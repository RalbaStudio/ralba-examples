import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { InputTextModule } from 'primeng/inputtext';
import { InputFieldComponent } from './input.field';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'input',
          component: InputFieldComponent,
          wrappers: ['wrapper'],
        },
      ],
    }),
  ],
  exports: [InputFieldComponent],
  declarations: [InputFieldComponent],
  providers: [],
})
export class CoreFormlyInputModule {}
