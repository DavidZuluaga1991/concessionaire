import { CarsByBrand } from './core/models/carsByBrand.model';
import { Filter } from './core/models/filters.model';

export interface AppState {
  cars: CarsByBrand[];
  filter: Filter;
}
