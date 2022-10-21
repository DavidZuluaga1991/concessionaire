import { CarsByBrand } from './core/models/carsByBrand.model';

export interface AppState {
  readonly cars: CarsByBrand[];
}
