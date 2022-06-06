import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreFormlyInputModule } from '@ralba-examples/core/formly/input';
import { CoreFormlySelectModule } from '@ralba-examples/core/formly/select';
import { CoreFormlyCheckboxModule } from '@ralba-examples/core/formly/checkbox';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { CoreFormlyValidatorsModule } from '@ralba-examples/core/formly/validators';
import { CoreFormlyWrapperModule } from '@ralba-examples/core/formly/wrapper';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule.forRoot({
      extras: {
        // lazyRender: true,
      },
    }),
    CoreFormlyWrapperModule,
    CoreFormlyValidatorsModule,
    CoreFormlySelectModule,
    CoreFormlyInputModule,
    CoreFormlySelectModule,
    CoreFormlyCheckboxModule,
  ],
})
export class CoreFormlyAllModulesModule {}
