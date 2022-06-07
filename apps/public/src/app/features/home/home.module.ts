import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslocoModule } from '@ngneat/transloco';
import { ReactiveComponentModule } from '@ngrx/component';
import { FormlyModule } from '@ngx-formly/core';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { HOME_GUARDS } from './guards';
import { HomeRoutingModule } from './home.module.routing';
import { HOME_PAGES } from './pages';
import { HOME_COMPONENTS } from './components';

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
    HomeRoutingModule,
  ],
  exports: [],
  declarations: [...HOME_PAGES, ...HOME_COMPONENTS],
  providers: [...HOME_GUARDS],
})
export class HomeModule {}
