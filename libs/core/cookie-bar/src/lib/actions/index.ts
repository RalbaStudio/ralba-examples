import { createAction, props } from '@ngrx/store';

const initCookie = createAction('[CookieBar] init');
const detectCookie = createAction(
  '[CookieBar] detect cookie',
  props<{ detected: boolean; enable: boolean | null }>()
);
const setCookie = createAction(
  '[CookieBar] set cookie',
  props<{ enable: boolean | null }>()
);

export const CookieActions = {
  initCookie,
  detectCookie,
  setCookie,
};
