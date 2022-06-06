/* eslint-disable @typescript-eslint/no-explicit-any */
import { AbstractControl } from '@angular/forms';
import { translate } from '@ngneat/transloco';
import { FormlyFieldConfig } from '@ngx-formly/core';

/**
 * TODO: add description
 */
export function minlengthValidationMessage(
  error: any,
  field: FormlyFieldConfig
) {
  return `${translate('Validation.LeastCharacters{0}', {
    0: field?.templateOptions?.minLength,
  })}`;
}

/**
 * TODO: add description
 */
export function maxLengthValidationMessage(
  error: any,
  field: FormlyFieldConfig
) {
  return `${translate('Validation.LeastValue{0}', {
    0: field?.templateOptions?.maxLength,
  })}`;
}

/**
 * TODO: add description
 */
export function minValidationMessage(error: any, field: FormlyFieldConfig) {
  return `${translate('Validation.LessValue{0}', {
    0: field?.templateOptions?.min,
  })}`;
}

/**
 * TODO: add description
 */
export const maxValidationMessage = (
  error: any,
  field: FormlyFieldConfig
): string => {
  return `${translate('Validation.MostValue{0}', {
    0: field?.templateOptions?.max,
  })}`;
};

/**
 * TODO: add description
 */
export function requiredMessage(): string {
  return translate('Validation.FieldRequired');
}
