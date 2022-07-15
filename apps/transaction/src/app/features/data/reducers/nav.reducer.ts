import { Action, createReducer, on} from "@ngrx/store";
import { create } from "lodash";
import {NavBarAction} from "../actions/nav.action";



export const FEATURE_KEY = 'Navbar';

export interface NavBarState {
  visible: boolean;
}
export const initialState: NavBarState = { visible: true };

export const navReducer = createReducer(
initialState,on(NavBarAction.hideMenu,(state) => ({...state, visible: false})),
on(NavBarAction.showMenu,(state)=> ({...state,visible: true})));


/*
export function reducer(state: NavBarState | undefined, action: Action) {
  return navReducer(state, action);
}

export const selectNavbarDetection = (state :NavBarState) => state.visible
export const selectState = (state: NavBarState) => state;
*/