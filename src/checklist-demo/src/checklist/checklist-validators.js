import { format } from '@mobilex/localization';
import resources from '../checklist-resources.yml';

export function getPresenceValidator() {
  // can't validate "if (value)" because "0" should return false (= valid)
  return value =>
    (value === null || value === undefined || value === '') &&
    format(resources.error_field_isRequired);
}
