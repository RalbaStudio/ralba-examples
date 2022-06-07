import { Component } from '@angular/core';
import {
  BaseGridStore,
  CommonGridStore,
  commonQueryError,
  commonHttpError,
  errorToast,
  selectRouteParam,
  successToast,
  ToastActions,
} from '@ralba/core/web/common';
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';


import { forkJoin, iif, Observable, of } from 'rxjs';
import {
  catchError,
  exhaustMap,
  map,
  tap,
  withLatestFrom,
} from 'rxjs/operators';
import { ComponentStore } from '@ngrx/component-store';
import { translate } from '@ngneat/transloco';

// Expample of getting type from graphQL
//type MenuQueryTaskRepsonseType = NonNullable<MenuQuery>['pivobasilico_Menu'];

type <%= className %>Type = {
    name: string
}[]

export interface <%= className %>PageState {
  data: <%= className %>Type | null;
  loading: boolean;
}

@Injectable()
export class <%= className %>PageStore extends ComponentStore<<%= className %>PageState> {

  readonly loading$ = this.select((state) => state.loading);
  readonly data$ = this.select((state) => state.data);

  public readonly requesting = this.updater((state) => ({
    ...state,
    loading: true,
  }));

  public readonly requestFinished = this.updater((state) => ({
    ...state,
    loading: false,
  }));

  private readonly updateData = this.updater(
    (state, input: <%= className %>Type) => ({
      ...state,
      data: input,
    })
  );



  constructor(
    private store$: Store<never>,
    //private readonly menuDetailQueryService: MenuDetailQueryService,
    //private readonly router: Router,
    //private readonly activatedRoute: ActivatedRoute
  ) {
    super({
      data: null,
      loading: false,
    });
  }

  // readonly fetchData = this.effect((input: Observable<never>) => {
  //   return input.pipe(
  //     withLatestFrom(this.store$.pipe(select(selectRouteParam('id')))),
  //     tap(() => this.requesting()),
  //     tap(() => this.updateData(MENU_DETAIL_INIT_DATA)),
  //     exhaustMap(([, id]) =>
  //       iif(
  //         () => id == 'new',
  //         of({}),
  //         this.menuDetailQueryService
  //           .fetch(
  //             {
  //               ID: id,
  //             }
  //           )
  //           .pipe(
  //             map(({ data, errors }) => {
  //               this.commonError(data, errors);
  //               if (data.pivobasilico_Menu) {
  //                 console.log(data.pivobasilico_Menu);
  //                 this.updateData(data.pivobasilico_Menu[0]);
  //               }
  //             }),
  //             tap(() => this.requestFinished()),
  //             catchError((p) => this.httpError(p))
  //           )
  //       )
  //     )
  //   );
  // });

  readonly validationError = this.effect((input: Observable<never>) => {
    return input.pipe(
      tap(() =>
        this.store$.dispatch(
          ToastActions.showToast({
            message: {
              ...errorToast,
              summary: translate('commonFormErrorTitle'),
              detail: translate('commonFormErrorText'),
            },
          })
        )
      )
    );
  });

  commonError(data: unknown, errors: readonly unknown[] | undefined) {
    return commonQueryError(this.store$, data, errors);
  }

  httpError(errors: unknown) {
    return commonHttpError(this.store$, errors);
  }
}




