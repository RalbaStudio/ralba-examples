import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarModule } from 'primeng/calendar';
import { FormlyModule } from '@ngx-formly/core';
import { DatePickerComponent } from './date-picker.component';
import { TranslocoLocaleModule } from '@ngneat/transloco-locale';
import { CustomCalendarComponent } from './date-picker-with-value-accesor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    CalendarModule,
    FormsModule,
    ReactiveFormsModule,
    TranslocoLocaleModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'date-picker',
          component: DatePickerComponent,
          wrappers: ['form-field'],
        },
      ],
    }),
  ],
  exports: [DatePickerComponent, CustomCalendarComponent],
  declarations: [DatePickerComponent, CustomCalendarComponent],
})
export class CoreFormlyDatepickerModule {}
