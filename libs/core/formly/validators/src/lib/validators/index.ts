import {
  maxLengthValidationMessage,
  maxValidationMessage,
  minlengthValidationMessage,
  minValidationMessage,
  requiredMessage,
} from './common';
import {
  ValidationMessageOption,
  ValidatorOption,
} from '@ngx-formly/core/lib/services/formly.config';
import { requiredTrue, requiredTrueMessage } from './requiredTrue';

import { validateEmail, validateEmailMessage } from './email';
import {
  validateMinValueZero,
  validateMinValueZeroMessage,
} from './minNumber/minNumber';
// import { validateChildClaim, validateChildClaimMessage } from './childClaim';

export const FORMLY_VALIDATORS: ValidatorOption[] = [
  {
    name: 'requiredTrue',
    validation: requiredTrue,
  },

  {
    name: 'validateEmail',
    validation: validateEmail,
  },

  {
    name: 'validateMinValueZero',
    validation: validateMinValueZero,
  },
];

export const FORMLY_VALIDATION_MESSAGES: ValidationMessageOption[] = [
  { name: 'required', message: requiredMessage },
  // TODO: deprecated
  { name: 'minlength', message: minlengthValidationMessage },
  { name: 'maxlength', message: maxLengthValidationMessage },
  { name: 'minLength', message: minlengthValidationMessage },
  { name: 'maxLength', message: maxLengthValidationMessage },
  { name: 'min', message: minValidationMessage },
  { name: 'max', message: maxValidationMessage },
  { name: 'requiredTrue', message: requiredTrueMessage },
  { name: 'validateEmail', message: validateEmailMessage },

  { name: 'validateMinValueZero', message: validateMinValueZeroMessage },
];
