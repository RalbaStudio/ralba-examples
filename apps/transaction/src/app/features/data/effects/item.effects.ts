import { Injectable } from '@angular/core';
import { act, Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { AngularFirestore } from '@angular/fire/compat/firestore';
//import * as ItemReducer from '../reducers/item.reducer';
import { fireItemService } from '../../../Services/fireItem.service';

import { ItemActions } from '../actions/index';
import { exhaustMap, combineLatest, mergeMap, map, switchMap, tap } from 'rxjs';
//import { state } from '@angular/animations';
import { Item } from '../model/item';
import { Action } from 'rxjs/internal/scheduler/Action';

@Injectable()
export class ItemEffects {
  $query = createEffect(
    () =>
      this.$action.pipe(
        ofType(ItemActions.QUERY),
        tap(() => console.log('ASdfasd')),
        switchMap(() => this.afs.collection<Item>('items').stateChanges()),
        mergeMap((actions) => actions),
        map((action) => {
          console.log(action);
          switch (action.type) {
            case 'added': {
              return ItemActions.ADDED({
                item: {
                  ...action.payload.doc.data(),
                  id: action.payload.doc.id,
                },
              });
            }
            case 'modified': {
              return ItemActions.MODIFIED({
                item: {
                  ...action.payload.doc.data(),
                  id: action.payload.doc.id,
                },
              });
            }
            case 'removed': {
              return ItemActions.REMOVED({
                id: action.payload.doc.id,
              });
            }
          }
        })
      ),
    { dispatch: false }
  );

  $saveItem = createEffect(
    () =>
      this.$action.pipe(
        ofType(ItemActions.ADDED),
        exhaustMap((p) => this.service.addItem(p.item))
      ),
    { dispatch: false }
  );

  constructor(
    private store$: Store<never>,
    private $action: Actions,
    private afs: AngularFirestore,
    private service: fireItemService
  ) {}

  // $updateItem = createEffect(
  //   () =>
  //     this.$action.pipe(
  //       ofType(ItemActions.UPDATE),
  //       exhaustMap(async (p) => this.service.updateItem())
  //     ),
  //   { dispatch: false }
  // );

  /*
  $getItem = createEffect(
    () =>
      this.$action.pipe(
        ofType(itemAction.ItemActions.QUERY),
        exhaustMap(() =>
          this.service.getAllItems().pipe(
            map((p) => {
              return itemAction.ItemActions.itemsLoaded({
                items: p.,
              });
            }),
            catchError((error) => {
              console.log(error);
              return of(itemAction.ItemActions.itemsFail());
            })
          )
        )
      ),
    { dispatch: true }
  );
  */
}
