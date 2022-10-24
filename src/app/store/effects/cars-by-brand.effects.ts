import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CarService } from 'src/app/core/service/car/car.service';
import { of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';

import * as CarActions from '../actions/cars-by-brand.actions';
import { CarsByBrand } from 'src/app/core/models/carsByBrand.model';
import { ResultData } from 'src/app/core/models/result-data.model';

@Injectable()
export class CarsByBrandEffects {
  constructor(private actions$: Actions, private carService: CarService) {}

  getCars$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(CarActions.LOAD_CARS_BY_BRANDS),
        switchMap(() => this.carService.get('./assets/data/data.json')),
        map((data: ResultData<CarsByBrand[]>) =>
          CarActions.LoadCarsByBrandsSuccess({ cars: data.results })
        ),
        catchError((error) => of(CarActions.LoadCarsByBrandsFail({ error })))
      ),
    {
      dispatch: true,
      useEffectsErrorHandler: true,
    }
  );
}
