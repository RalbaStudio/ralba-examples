import {
  createSelector,
  createFeatureSelector,
  select,
} from '@ngrx/store';
import { FEATURE_KEY, reducers } from '../reducers';
import * as fromItem from '../reducers/item.reducer';


export const selectState = createFeatureSelector<ReturnType<typeof reducers>>(FEATURE_KEY);
const allItems = createSelector(selectState, (state)=> state.itemReducer)


export const selectItem = (state: fromItem.State) => state.entities;
export const selectAllItems = createSelector(allItems, fromItem.selectAll
);
