import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CarService } from 'src/app/core/service/car/car.service';
import { EMPTY, of } from 'rxjs';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';

import * as CarActions from './../actions/car.actions';
import { Car } from 'src/app/core/models/car.model';
import { CarsByBrand } from 'src/app/core/models/carsByBrand.model';

@Injectable()
export class CarEffects {
  constructor(private actions$: Actions, private carService: CarService) {}

  getCars$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(CarActions.LOAD_CAR),
        switchMap(() => this.carService.get('./assets/data/data.json')),
        map((data: CarsByBrand[]) => CarActions.LoadCarSuccess({ cars: data })),
        catchError((error) => of(CarActions.LoadCarFail({ error })))
      ),
    {
      dispatch: true,
      useEffectsErrorHandler: true,
    }
  );
}
