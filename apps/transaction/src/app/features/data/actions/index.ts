import { createAction,props } from "@ngrx/store";
import { Update } from "@ngrx/entity";
import { Item } from "../model/item";
import { create } from "lodash";


const QUERY = createAction('[Items Component] query Items');

const REQUEST = createAction('[Dashboard Component] requesting Items',props<{message: string}>());

const ADDED = createAction('[CreateItem Component] added',props<{ item: Item }>());

const MODIFIED = createAction('[Items Component] modified',props<{ item: Item }>());

const REMOVED = createAction('[CreateItem Component] removed',props<{ id: string}>());

const UPDATE = createAction('[CreateItem Component] update',props<{ id: string , update: Update<Item> }>());

const SUCCESS = createAction('[Items Component] success');





export const ItemActions = {
MODIFIED,
SUCCESS,
QUERY,
UPDATE,
ADDED,
REMOVED,
REQUEST
}

