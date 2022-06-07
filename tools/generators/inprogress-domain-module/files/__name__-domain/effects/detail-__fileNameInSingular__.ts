import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { globalError, ToastActions } from '@ralba/core/web/common';
import { DocumentTemplateQueryService } from '@ralba/invoicing/web/core';
import { exhaustMap, map } from 'rxjs/operators';
import { GetTemplateDetailActions } from '../actions';


@Injectable()
export class DetailTemplateEffects {
  onFormSubmit = createEffect(() => {
    return this.actions$.pipe(
      ofType(GetTemplateDetailActions.getTempalte),
      exhaustMap(({ id }) =>
        this.documentTemplateQueryService.fetch({ id: id }).pipe(
          map(({ data, errors }) => {
            if (data?.documentTemplate.__typename == 'DocumentTamplate') {
              return GetTemplateDetailActions.getTempalteSucess({
                data: data.documentTemplate,
              });
            } else {
              return ToastActions.showToast({
                message: {
                  summary: 'Request schema error',
                },
              });
            }
          }),
          globalError()
        )
      )
    );
  });
  constructor(
    private readonly actions$: Actions,
    private readonly store$: Store<never>,
    private readonly documentTemplateQueryService: DocumentTemplateQueryService
  ) {}
}
