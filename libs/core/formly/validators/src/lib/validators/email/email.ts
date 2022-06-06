import { AbstractControl } from '@angular/forms';
import { translate } from '@ngneat/transloco';

/**
 * Validation email
 * like https://formly.dev/guide/validation
 * @param {AbstractControl} control  Formly control for validation
 * @returns error message or null
 */

export function validateEmail(control: AbstractControl) {
  const value: string = control.value;

  // eslint-disable-next-line no-control-regex
  if (
    value == null ||
    !value.match(
      /(?:[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-zA-Z0-9-]*[a-zA-Z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
    )
  ) {
    return {
      validateEmail: true,
    };
  }
  return null;
}

/**
 * TODO: add description
 *  toto je potřeba mit rozdelene jinak nefungujou preklady
 */
export function validateEmailMessage(): string {
  return translate('Validation.validateEmail');
}
