import { createEntityAdapter } from '@ngrx/entity';
import {
    GridState, makeGridReducer, makeGridSelectors
} from '@ralba/core/web/common';
import { TemplatesGridColumnDataModel } from '@ralba/invoicing/web/ui';
// export interface InvoicesGridState
//   extends EntityState<InvoicesGridColumnDataModel> {
//   totalCount: number;
//   gridState: LazyLoadEvent | null;
//   loading: boolean;
// }
import { TemplatesGridActions } from '../actions';


//! Nepoužívat.
//! Vytváří stejný reducer jako na všech ostatních gridech co jsou v applikaci
//! Až to bárník z optimalizuje, tak to bude snad použitelné bez červeného řádku
//! Ale jinak to funguje :)

const adapter = createEntityAdapter<TemplatesGridColumnDataModel>({
  selectId: (s) => s.id,
});

const initialState: GridState<TemplatesGridColumnDataModel> = adapter.getInitialState(
  {
    totalCount: 0,
    gridState: {},
    loading: false,
  }
);

export const reducer = makeGridReducer(
  initialState,
  TemplatesGridActions,
  adapter
);

const selectors = makeGridSelectors(adapter);

export const {
  selectAll,
  selectGridLoading,
  selectGridState,
  selectTotalCount,
} = selectors;
