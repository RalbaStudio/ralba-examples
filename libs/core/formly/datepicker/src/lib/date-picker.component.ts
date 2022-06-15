import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'ral-date-picker',
  template: `
    <ng-container *ngIf="to && !to['readonly']; else readonly">
      <ralba-custom-calendar
        [showTime]="to['showTime']"
        [inline]="to['inline']"
        [touchUI]="to['touchUI']"
        [formControl]="$any(formControl)"
        [formlyAttributes]="field"
        [class.inline-overlay-calendar]="to['inlineOverlayCalendar']"
        [dateFormat]="to['dateFormat']"
        [placeholder]="to['placeholder'] || ''"
        [attr.data-cy]="key"
        [returnFormat]="to['returnFormat']"
      ></ralba-custom-calendar>
    </ng-container>
    <ng-template #readonly>
      <input
        pInputText
        type="text"
        [value]="formControl.value | translocoDate: { dateStyle: 'medium' }"
        [attr.data-cy]="key"
        disabled
        style="width: 100%;"
      />
    </ng-template>
    <!-- [attr.minDate]="to['attributes']?.min"
      [attr.maxDate]="to['attributes']?.max" -->
    <!-- [locale]="to['attributes'].locale" -->
    <!-- [placeholder]="placeholder" -->
  `,
  styleUrls: ['./date-picker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatePickerComponent extends FieldType {
  override defaultOptions = {
    templateOptions: {
      options: [],
      showTime: false,
      inline: false,
      touchUI: false,
      dateFormat: 'mm/dd/yy',
      returnFormat: 'complete', // | 'date' | 'time' | 'complete' for date only
      placeholder: '',
      inlineOverlayCalendar: false,
      attributes: {
        // min: '',
        // max: '', // TODO: // implement max and min
        //format: null, //'dd. MM. yyyy'
        //locale: this.locale,
      },
    },
  };
}
