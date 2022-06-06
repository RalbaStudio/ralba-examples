import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormFieldWrapperWrapperComponent } from './form-field-wrapper.wrapper';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    FormlyModule.forChild({
      wrappers: [
        {
          name: 'wrapper',
          component: FormFieldWrapperWrapperComponent,
        },
      ],
    }),
  ],
  exports: [FormFieldWrapperWrapperComponent],
  declarations: [FormFieldWrapperWrapperComponent],
  providers: [],
})
export class CoreFormlyWrapperModule {}
