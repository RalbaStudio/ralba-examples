import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslocoModule } from '@ngneat/transloco';
import { FormlyModule } from '@ngx-formly/core';
import { FORMLY_VALIDATION_MESSAGES, FORMLY_VALIDATORS } from './validators';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslocoModule,
    FormlyModule.forChild({
      validators: FORMLY_VALIDATORS,
      validationMessages: FORMLY_VALIDATION_MESSAGES,
    }),
  ],
})
export class CoreFormlyValidatorsModule {}
