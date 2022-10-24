import { createAction, props } from '@ngrx/store';
import { Filter } from 'src/app/core/models/filters.model';

export const LOAD_FILTERS = 'LOAD FILTERS';
export const LOAD_FILTERS_SUCCESS = 'LOAD FILTERS SUCCESS';
export const LOAD_FILTERS_FAIL = 'LOAD FILTERS FAIL';

export const LoadFilter = createAction(LOAD_FILTERS_SUCCESS);

export const LoadFilterSuccess = createAction(
  LOAD_FILTERS_SUCCESS,
  props<{ cars: Filter }>()
);

export const LoadFilterFail = createAction(
  LOAD_FILTERS_FAIL,
  props<{ error: any }>()
);
