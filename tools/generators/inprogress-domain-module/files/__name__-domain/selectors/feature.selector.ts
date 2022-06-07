import { createFeatureSelector } from '@ngrx/store';
import { FEATURE_KEY, reducers } from '../reducers';

export const invoiceFeatureSelector = createFeatureSelector<
  ReturnType<typeof reducers>
>(FEATURE_KEY);
