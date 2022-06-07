import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { globalError, ToastActions } from '@ralba/core/web/common';
import { CreateDocumentTamplateMutationService } from '@ralba/invoicing/web/core';
import { exhaustMap, map } from 'rxjs/operators';
import { CreateTemplateActions } from '../actions';

@Injectable()
export class CreateTemplatesEffects {
  onFormSubmit = createEffect(() => {
    return this.actions$.pipe(
      ofType(CreateTemplateActions.onFormSubmitted),
      exhaustMap(({ name, documentType, locale, html }) =>
        this.createDocumentTamplateMutationService
          .mutate({
            input: {
              name,
              type: documentType,
              locale,
              html,
            },
          })
          .pipe(
            map(({ data, errors }) => {
              if (
                data?.createDocumentTemplate.__typename == 'DocumentTamplate'
              ) {
                return ToastActions.showToast({
                  message: {
                    summary: 'OK',
                  },
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
    private readonly createDocumentTamplateMutationService: CreateDocumentTamplateMutationService
  ) {}
}
