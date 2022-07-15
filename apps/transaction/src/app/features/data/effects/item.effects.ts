import { Injectable } from '@angular/core';
import { act, Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { AngularFirestore } from '@angular/fire/compat/firestore';
//import * as ItemReducer from '../reducers/item.reducer';
import { fireItemService } from '../../../Services/fireItem.service';
import { combineLatest } from 'rxjs';

import * as itemAction from '../actions/index';
import { catchError, exhaustMap, of, map, switchMap, Observable, Subject } from 'rxjs';
//import { state } from '@angular/animations';
import { Item } from '../model/item';
import { Action } from 'rxjs/internal/scheduler/Action';

@Injectable()
export class ItemEffects {
  constructor(
    private store$: Store<never>,
    private $action: Actions,
    private afs: AngularFirestore,
    private service: fireItemService
  ) {}

     
$query = createEffect(
  this.$action.pipe(ofType(itemAction.ItemActions.QUERY),switchMap(Action => {
    console(Action)
    afs.collection('items', ref => ref.where('status', '==', 'available'))
  })
  )
);
/* $query = this.$action.pipe(ofType(itemAction.ItemActions.QUERY),
  switchMap( ({status}) => {status$ => console(Action)
   this.afs.collection<Item>('/Items', ref =>{
    let query : firebase.firestore.Query = ref;
   
   } 
  }
  )
);
this.items$ = Observable.combineLatest(
  this.sizeFilter$,
  this.colorFilter$
).switchMap(([size, color]) => 
  afs.collection<Item>('items', ref => {
    let query : firebase.firestore.Query = ref;
    if (size) { query = query.where('size', '==', size) };
    if (color) { query = query.where('color', '==', color) };
    return query;
  }).valueChanges()
);
*/
  $saveItem = createEffect(
    () =>
      this.$action.pipe(
        ofType(itemAction.ItemActions.ADDED),
        exhaustMap((p) => this.service.addItem(p.item))
      ),
    { dispatch: false }
  );



  $updateItem = createEffect(
    () =>
      this.$action.pipe(
        ofType(itemAction.ItemActions.UPDATE),
        exhaustMap(async (p) => this.service.updateItem())
      ),
    { dispatch: false }
  );
  
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
