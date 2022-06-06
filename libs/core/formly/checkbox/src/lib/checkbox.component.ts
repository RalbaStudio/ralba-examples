import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'ral-checkbox',
  template: `
    <div class="checkbox-field">
      <!-- [class.ng-dirty]="showError" -->
      <p-checkbox
        [binary]="true"
        [formControl]="$any(formControl)"
        [formlyAttributes]="field"
        [label]="to['checkboxLabel']"
        (onChange)="to.change && to.change(field, $event)"
        [inputId]="'a' + field['id']"
        [attr.data-cy]="key"
        checkboxIcon="fal far fa-check"
      >
      </p-checkbox>
      <div></div>
    </div>
  `,
  styles: [
    `
      .checkbox-field {
        padding-top: 7px;
        padding-bottom: 6px;
      }
      .checkbox-field {
        padding-top: 7px;
        padding-bottom: 6px;
      }
      .htmlLabel {
        top: 3px;
        position: relative;
        padding-left: 0.5rem;
      }
    `,
  ],
})
export class CheckboxComponent extends FieldType {
  override defaultOptions = {
    templateOptions: {
      hideLabel: true,
      checkboxLabel: '',
    },
  };
}
