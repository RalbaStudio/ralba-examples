import { combineReducers } from '@ngrx/store';
import * as fromTemplates from './templates.reducer';
//import * as fromTemplate from './template.reducer';

export const FEATURE_KEY = 'templates';

export const reducers = combineReducers({
  templates: fromTemplates.reducer,
  //template: fromInvoice.reducer,
});
