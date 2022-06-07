import { createReducer, on } from '@ngrx/store';
import { DocumentTamplate } from '@ralba/invoicing/web/core';
import { GetTemplateDetailActions } from '../actions/index';

export type State = {
  __typename: 'DocumentTamplate';
} & Pick<DocumentTamplate, 'id' | 'html' | 'locale' | 'name' | 'type'>;

//   __typename: 'DocumentTamplate';
// } & Pick<DocumentTamplate, 'id' | 'html' | 'locale' | 'name' | 'type'>;
// }>()

export const initialState: State = {
  id: '',
  __typename: 'DocumentTamplate',
  html: '',
  locale: '',
  name: '',
  type: '',
};

export const reducer = createReducer(
  initialState,
  on(GetTemplateDetailActions.getTempalteSucess, (state, { data }) => ({
    ...state,
    ...data,
  }))
);

export const selectInvoice = (state: State) => state;
