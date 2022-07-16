import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import {
  createReducer,
  on,
} from '@ngrx/store';
import { ItemActions } from '../actions';
import { Item } from '../model/item';

export interface State extends EntityState<Item> {
  loading: boolean;
}

export const adapter: EntityAdapter<Item> = createEntityAdapter<Item>();

export const initialState: State = adapter.getInitialState({
  loading: false,
});

export const itemReducer = createReducer(
  initialState,on(ItemActions.ADDED, (state, { item }) => {
    return adapter.addOne(item, state)
  }),on(ItemActions.UPDATE, (state, { update}) => {
    return adapter.updateOne( update, state)
  }),on(ItemActions.REMOVED, (state, { id }) => {
    return adapter.removeOne(id, state);
  })
);

// get the selectors
 export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();