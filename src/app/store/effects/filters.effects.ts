import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';

import * as FiltersActions from '../actions/filter.actions';
import { CarsByBrand } from 'src/app/core/models/carsByBrand.model';
import { ResultData } from 'src/app/core/models/result-data.model';
import { FilterService } from 'src/app/core/service/filter/filter.service';
import { Filter } from 'src/app/core/models/filters.model';

@Injectable()
export class FiltersEffects {
  constructor(
    private actions$: Actions,
    private filterService: FilterService
  ) {}

  getFilters$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(FiltersActions.LOAD_FILTERS),
        switchMap(() =>
          this.filterService.getId('./assets/data/data-filters.json')
        ),
        map((data: ResultData<Filter>) => {
          return FiltersActions.LoadFilterSuccess({ cars: data.results });
        }),
        catchError((error) => of(FiltersActions.LoadFilterFail({ error })))
      ),
    {
      dispatch: true,
      useEffectsErrorHandler: true,
    }
  );
}
