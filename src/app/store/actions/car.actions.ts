import { createAction, props } from '@ngrx/store';
import { CarsByBrand } from 'src/app/core/models/carsByBrand.model';

export const LOAD_CAR = 'LOAD CAR';
export const LOAD_CAR_SUCCESS = 'LOAD CAR SUCCESS';
export const LOAD_CAR_FAIL = 'LOAD CAR FAIL';

export const LoadCar = createAction(LOAD_CAR_SUCCESS);

export const LoadCarSuccess = createAction(
  LOAD_CAR_SUCCESS,
  props<{ cars: CarsByBrand[] }>()
);

export const LoadCarFail = createAction(LOAD_CAR_FAIL, props<{ error: any }>());
