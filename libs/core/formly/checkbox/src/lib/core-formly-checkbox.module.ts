import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { CheckboxModule } from 'primeng/checkbox';

import { CheckboxComponent } from './checkbox.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CheckboxModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'checkbox',
          component: CheckboxComponent,
          wrappers: ['wrapper'],
        },
      ],
    }),
  ],
  exports: [CheckboxComponent],
  declarations: [CheckboxComponent],
  providers: [],
})
export class CoreFormlyCheckboxModule {}
