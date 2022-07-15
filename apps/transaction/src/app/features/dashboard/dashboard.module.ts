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
import { DASHBOARD_GUARDS } from './guards';
import { DashboardRoutingModule } from './dashboard.module.routing';
import { DASHBOARD_PAGES } from './pages';
import { DASHBOARD_COMPONENTS } from './components';

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
    DashboardRoutingModule,
  ],
  exports: [],
  declarations: [...DASHBOARD_PAGES, ...DASHBOARD_COMPONENTS],
  providers: [...DASHBOARD_GUARDS],
})
export class DashboardModule {}
