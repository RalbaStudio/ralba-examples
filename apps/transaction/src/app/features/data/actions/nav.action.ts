import { Action, createAction } from "@ngrx/store";

const showMenu = createAction ('[Nav Component] show');
const hideMenu = createAction ('[Nav Component] hide');

export const NavBarAction = {
showMenu,
hideMenu,
}
