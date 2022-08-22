import {
  Component,
  ExistingProvider,
  forwardRef,
  Input,
  ViewChild,
} from '@angular/core';
import {
  ControlValueAccessor,
  UntypedFormControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { Calendar } from 'primeng/calendar';
// import moment from 'moment';
import isValid from 'date-fns/isValid';
import parse from 'date-fns/parse';
import parseISO from 'date-fns/parseISO';
import formatISO from 'date-fns/formatISO';

const CUSTOM_CALENDAR_CONTROL_VALUE_ACCESSOR: ExistingProvider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CustomCalendarComponent),
  multi: true,
};

@Component({
  selector: 'ralba-custom-calendar',
  template: `
    <p-calendar
      [(ngModel)]="model"
      dataType="string"
      [inline]="inline"
      [showIcon]="!disabled"
      [showTime]="showTime"
      [disabled]="disabled"
      [touchUI]="touchUI"
      (onSelect)="valueChanged($event)"
      (onTodayClick)="valueChanged($event)"
      (onClearClick)="valueChanged(null)"
      (onInput)="valueChanged($event.target.value)"
      [showButtonBar]="true"
      [dateFormat]="dateFormat"
      appendTo="body"
      [placeholder]="placeholder"
      [baseZIndex]="8000"
      [readonlyInput]="readonlyInput"
    ></p-calendar>
  `,
  providers: [CUSTOM_CALENDAR_CONTROL_VALUE_ACCESSOR],
})
export class CustomCalendarComponent implements ControlValueAccessor {
  model: Date | null = null;
  @Input() formControl: UntypedFormControl = new UntypedFormControl();
  @Input() disabled = false;
  // primeng property for UI
  @Input() showTime = false;
  // Return only Date
  @Input() onlyDate = false;
  @Input() inline = false;
  @Input() touchUI = false;
  @Input() readonlyInput = false;
  @Input() placeholder = '';
  @Input() dateFormat = 'mm/dd/yy';
  @Input() returnFormat: 'complete' | 'date' | 'time' = 'complete';

  _returnFormat = formatISO;

  @ViewChild(Calendar) private _calendar: Calendar | undefined;

  validInputMapping: Map<string, Date> = new Map<string, Date>();

  private onChange = (_: string | null) => {
    return _;
  };

  private onTouched = () => {
    return;
  };

  writeValue(value: string) {
    if (value) {
      this.model = parseISO(value);
      this._calendar?.updateModel(this.model);
      this._calendar?.updateInputfield();
    } else {
      this.model = null;
    }
  }

  valueChanged($event: Date | null) {
    if ($event == null) return this.onChange(null);
    if ($event && isValid($event))
      return this.onChange(
        formatISO($event, { representation: this.returnFormat })
      );
    if (
      parse(
        JSON.parse(JSON.stringify($event)),
        this.dateFormat + 'yy',
        new Date()
      )
    )
      return this.onChange(
        formatISO(
          parse(
            JSON.parse(JSON.stringify($event)),
            this.dateFormat + 'yy',
            new Date()
          ),
          { representation: this.returnFormat }
        )
      );

    return this.onChange(null);
  }

  registerOnChange(fn: () => string | null): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
