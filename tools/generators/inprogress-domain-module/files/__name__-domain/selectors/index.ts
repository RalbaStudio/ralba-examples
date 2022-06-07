import { createSelector } from '@ngrx/store';
import * as fromReducer from '../reducers/templates-grid.reducer';
import { invoiceFeatureSelector } from './feature.selector';


//import * as fromDialog from '../reducers/bussines-partners-add-new-dialog.reducer';

const selectTemplates = createSelector(
  invoiceFeatureSelector,
  (s) => s.templates
);

const selecetGrid = createSelector(selectTemplates, (s) => s.grid);
// const selectDialog = createSelector(selectInvoce, (s) => s.addNewDialog);

const templatesGrid = {
  data: createSelector(selecetGrid, fromReducer.selectAll),
  totalCount: createSelector(selecetGrid, fromReducer.selectTotalCount),
  gridState: createSelector(selecetGrid, fromReducer.selectGridState),
};

const selectDetailTemplate = createSelector(selectTemplates, (s) => s.detail);

// const addNewInvoice = {
//   isDialogVisible: createSelector(selectDialog, fromDialog.selectDisplayDialog),
// };

export const DocumentTemplatesSelectors = {
  tempaltesGrid: templatesGrid,
  selectDetailTemplate: selectDetailTemplate,
  // addNewInvoice,
};
