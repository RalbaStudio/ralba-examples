import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslocoModule } from '@ngneat/transloco';
import { ReactiveComponentModule } from '@ngrx/component';
import { FormlyModule } from '@ngx-formly/core';
import { TitleModule } from '@ralba/core/web/ui';

// import {
//   InvoiceDetailModule,
//   InvoiceDomainModule,
//   InvoiceFieldsModule,
//   PickBusinessPartnerModule,
//   TemplateDomainModule,
// } from '@ralba/invoicing/web/features';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ITEMS_GUARDS } from './guards';
import { ItemsRoutingModule } from './items.module.routing';
import { ITEMS_PAGES } from './pages';
import { ITEMS_COMPONENTS } from './components';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    TranslocoModule,
    ReactiveComponentModule,
    ButtonModule,
    TitleModule,
    CardModule,
    FormlyModule,
    ItemsRoutingModule,
  ],
  exports: [],
  declarations: [...ITEMS_PAGES, ...ITEMS_COMPONENTS],
  providers: [...ITEMS_GUARDS],
})
export class ItemsModule {}
