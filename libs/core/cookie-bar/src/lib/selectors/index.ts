import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as _ from '../reducers';

const selectState = createFeatureSelector<_.CookieBarState>(_.FEATURE_KEY);

const selectCookieDetactions = createSelector(
  selectState,
  _.selectCookieDetactions
);

const selectCookieEnable = createSelector(selectState, _.selectCookieEnable);

const selectCookieOpen = createSelector(selectState, (a) => {
  // return isNullOrUndefined(a.enable);

  return typeof a.enable === 'undefined' || a.enable === null;
});

export const CookieBarSelectors = {
  selectCookieDetactions,
  selectCookieEnable,
  selectCookieOpen,
};
