

import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as _ from '../reducers/nav.reducer';


const selectState = createFeatureSelector <_.NavBarState>(_.FEATURE_KEY);

const selectNavbarDetection = createSelector(
 selectState, (state) => state.visible
  );

export const NavBarSelectors = {
  selectNavbarDetection
};


