import { Brand } from './brand.model';
import { Condition } from './condition.model';
import { Country } from './country.model';
import { Image } from './image.model';
import { Price } from './price.model';

export interface Car {
  title: string;
  description: string;
  year: number;
  model: string;
  condition: Condition;
  brand: Brand;
  country: Country;
  images: Image[];
  price: Price;
}
