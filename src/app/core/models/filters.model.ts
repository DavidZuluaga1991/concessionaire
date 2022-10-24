import { Brand } from './brand.model';
import { Condition } from './condition.model';

export interface Filter {
  conditions: Condition[];
  brands: Brand[];
}
