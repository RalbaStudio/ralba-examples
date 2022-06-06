import { AbstractControl } from '@angular/forms';
import { translate } from '@ngneat/transloco';

/**
 * TODO: add description
 */
export function requiredTrue(control: AbstractControl) {
  if (control.value === true) {
    return null;
  }
  return {
    requiredTrue: true,
  };
}

/**
 * TODO: add description
 *  toto je potřeba mit rozdelene jinak nefungujou preklady
 */
export function requiredTrueMessage(): string {
  return translate('Validation.YouMustAggree');
}
