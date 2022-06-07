import { createAction, props } from '@ngrx/store';
import { EntityType, makeGridActions } from '@ralba/core/web/common';
import { DocumentTamplate } from '@ralba/invoicing/web/core';
import { TemplatesGridColumnDataModel } from '@ralba/invoicing/web/ui';

export const TemplatesGridActions = makeGridActions(
  'Templates',
  EntityType<TemplatesGridColumnDataModel>()
);

export const CreateTemplateActions = {
  onFormSubmitted: createAction(
    '[Template] on create Template form submitted',
    props<{
      name: string;
      locale: string;
      html: string;
      documentType: string;
    }>()
  ),
};

export const GetTemplateDetailActions = {
  getTempalte: createAction(
    '[Template] get detail Template',
    props<{
      id: string;
    }>()
  ),
  getTempalteSucess: createAction(
    '[Template] get detail Template success',
    props<{
      data: {
        __typename: 'DocumentTamplate';
      } & Pick<DocumentTamplate, 'id' | 'html' | 'locale' | 'name' | 'type'>;
    }>()
  ),
};
