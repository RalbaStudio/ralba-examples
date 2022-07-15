import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslocoModule } from '@ngneat/transloco';
import { ReactiveComponentModule } from '@ngrx/component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { FormlyModule } from '@ngx-formly/core';

// import {
//   InvoiceDetailModule,
//   InvoiceDomainModule,
//   InvoiceFieldsModule,
//   PickBusinessPartnerModule,
//   TemplateDomainModule,
// } from '@ralba/invoicing/web/features';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DATA_COMPONENTS } from './components';
import { ItemEffects } from './effects/item.effects';
import { FEATURE_KEY, reducers } from './reducers';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    TranslocoModule,
    ReactiveComponentModule,
    ButtonModule,
    CardModule,
    FormlyModule,
    StoreModule.forFeature(FEATURE_KEY,reducers),
    EffectsModule.forFeature([ItemEffects])
  ],
  exports: [],
  declarations: [...DATA_COMPONENTS],
})
export class DataModule {}
