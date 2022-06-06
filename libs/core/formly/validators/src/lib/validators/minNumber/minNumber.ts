import { AbstractControl } from '@angular/forms';
import { translate } from '@ngneat/transloco';

/**
 * Validation email
 * like https://formly.dev/guide/validation
 * @param {AbstractControl} control  Formly control for validation
 * @returns error message or null
 */

export function validateMinValueZero(control: AbstractControl) {
  const value: number = parseFloat(control.value);

  // eslint-disable-next-line no-control-regex
  if (value == null || value > 0) {
    return {
      fieldMatch: {
        message: `${translate('Validation.minNumber')}`,
      },
    };
  }
  return null;
}

/**
 * TODO: add description
 *  toto je potřeba mit rozdelene jinak nefungujou preklady
 */
export function validateMinValueZeroMessage(): string {
  return translate('Validation.minNumber');
}
