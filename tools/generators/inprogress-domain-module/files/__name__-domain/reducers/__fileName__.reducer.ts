import { combineReducers } from '@ngrx/store';
import { reducer as detalReducer } from './template-detail.reducer';
import { reducer as templateGridReducer } from './templates-grid.reducer';


export const reducer = combineReducers({
  grid: templateGridReducer,
  detail: detalReducer,
});
