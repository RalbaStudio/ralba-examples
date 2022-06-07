import { Action, createReducer, on } from '@ngrx/store';
import { CookieActions } from '../actions';

export const FEATURE_KEY = 'Cookiebar';

export interface CookieBarState {
  detected: boolean;
  enable: boolean | null;
}

export const initialState: CookieBarState = {
  detected: false,
  enable: false,
};

export const cookieReducer = createReducer(
  initialState,
  on(CookieActions.initCookie, (state) => ({
    ...state,
    detected: false,
    enable: null,
  })),
  on(CookieActions.detectCookie, (state, payload) => ({
    ...state,
    detected: payload.detected,
    enable: payload.enable,
  })),
  on(CookieActions.setCookie, (state, payload) => ({
    ...state,
    enable: payload.enable,
  }))
);

export function reducer(state: CookieBarState | undefined, action: Action) {
  return cookieReducer(state, action);
}

export const selectCookieDetactions = (state: CookieBarState) => state.detected;
export const selectCookieEnable = (state: CookieBarState) => state.enable;
export const selectState = (state: CookieBarState) => state;
