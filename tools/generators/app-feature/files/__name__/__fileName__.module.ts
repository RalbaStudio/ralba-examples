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
import { <%= constantName %>_GUARDS } from './guards';
import { <%= className %>RoutingModule } from './<%= fileName %>.module.routing';
import { <%= constantName %>_PAGES } from './pages';
import { <%= constantName %>_COMPONENTS } from './components';

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
    <%= className %>RoutingModule,
  ],
  exports: [],
  declarations: [...<%= constantName %>_PAGES, ...<%= constantName %>_COMPONENTS],
  providers: [...<%= constantName %>_GUARDS],
})
export class <%= className %>Module {}
