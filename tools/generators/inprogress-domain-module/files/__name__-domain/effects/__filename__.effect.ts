import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { DocumentTemplatesQueryService } from '@ralba/invoicing/web/core';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, withLatestFrom } from 'rxjs/operators';
import { TemplatesGridActions } from '../actions';
import { DocumentTemplatesSelectors } from '../selectors';

@Injectable()
export class TemplatesEffects {
  onGridStateChange$ = createEffect(() => {
    return this.store$
      .select(DocumentTemplatesSelectors.tempaltesGrid.gridState)
      .pipe(map(() => TemplatesGridActions.load()));
  });

  onLoadInvoices = createEffect(() => {
    return this.actions$.pipe(
      ofType(TemplatesGridActions.load),
      withLatestFrom(
        this.store$.select(DocumentTemplatesSelectors.tempaltesGrid.gridState)
      ),
      exhaustMap(([, args]) =>
        this.templatesQueryService
          .fetch({
            skip: args?.first,
            take: args?.rows,
          })
          .pipe(
            map(({ data }) =>
              TemplatesGridActions.loaded({
                entities: data.documentTemplates.result.map((p) => {
                  return {
                    html: p.html,
                    id: p.id,
                    locale: p.locale,
                    name: p.name,
                    type: p.type,
                  };
                }),
                totalCount: data.documentTemplates.count,
              })
            ),
            catchError(() => of(TemplatesGridActions.loadError()))
          )
      )
    );
  });

  constructor(
    private readonly actions$: Actions,
    private readonly store$: Store<never>,
    private readonly templatesQueryService: DocumentTemplatesQueryService // todo:// add services
  ) {}
}
