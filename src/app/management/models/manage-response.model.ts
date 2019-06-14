import { Field } from './field.model';
import { Value } from './values.model';

export interface ManageResponse {
  id: number;
  fields: Field;
  values: Value[];
}
