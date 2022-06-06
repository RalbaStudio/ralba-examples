import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { DropdownModule } from 'primeng/dropdown';
import { SelectComponent } from './select.component';
import { FormlySelectModule } from '@ngx-formly/core/select';
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DropdownModule,
    FormlySelectModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'select',
          component: SelectComponent,
          wrappers: ['form-field'],
        },
      ],
    }),
  ],
  declarations: [SelectComponent],
  exports: [SelectComponent],
  providers: [],
})
export class CoreFormlySelectModule {}
