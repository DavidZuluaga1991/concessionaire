import { Brand } from './brand.model';
import { Car } from './car.model';

export interface CarsByBrand {
  brand: Brand;
  cars: Car[];
}
