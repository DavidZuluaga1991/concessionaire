import { createAction, props } from '@ngrx/store';
import { CarsByBrand } from 'src/app/core/models/carsByBrand.model';

export const LOAD_CARS_BY_BRANDS = 'LOAD CARS BY BRANDS';
export const LOAD_CARS_BY_BRANDS_SUCCESS = 'LOAD CARS BY BRANDS SUCCESS';
export const LOAD_CARS_BY_BRANDS_FAIL = 'LOAD CARS BY BRANDS FAIL';

export const LoadCarsByBrands = createAction(LOAD_CARS_BY_BRANDS_SUCCESS);

export const LoadCarsByBrandsSuccess = createAction(
  LOAD_CARS_BY_BRANDS_SUCCESS,
  props<{ cars: CarsByBrand[] }>()
);

export const LoadCarsByBrandsFail = createAction(
  LOAD_CARS_BY_BRANDS_FAIL,
  props<{ error: any }>()
);
