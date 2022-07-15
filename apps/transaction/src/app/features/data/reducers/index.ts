import { combineReducers } from "@ngrx/store";
import { itemReducer } from "./item.reducer";
import { navReducer } from "./nav.reducer";

export const FEATURE_KEY = "Trans";

export const reducers = combineReducers({
itemReducer,
navReducer
})

