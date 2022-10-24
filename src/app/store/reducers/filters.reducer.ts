import { createReducer, on, Action } from '@ngrx/store';
import { Filter } from 'src/app/core/models/filters.model';
import * as FilterActions from '../actions/filter.actions';

const initialFilter: Filter = {
  brands: [],
  conditions: [],
};

const filterReducer = createReducer(
  initialFilter,
  on(FilterActions.LoadFilterSuccess, (state, { cars }) => cars)
);

export function reducer(state: Filter = initialFilter, action: Action) {
  return filterReducer(state, action);
}
