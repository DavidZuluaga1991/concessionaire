import { createReducer, on, Action } from '@ngrx/store';
import { Car } from 'src/app/core/models/car.model';
import { CarsByBrand } from 'src/app/core/models/carsByBrand.model';
import * as CarActions from './../actions/car.actions';

const initialCar: CarsByBrand = {
  brand: {
    id: '',
    description: '',
  },
  cars: [
    {
      title: '',
      description: '',
      year: 0,
      model: '',
      condition: {
        id: '',
        description: '',
      },
      brand: {
        id: '',
        description: '',
      },
      country: {
        language: '',
        currency: '',
        code: '',
      },
      price: {
        value: 0,
      },
      images: [
        {
          id: '',
          url: '',
        },
      ],
    },
  ],
};

const carReducer = createReducer(
  [initialCar],
  on(CarActions.LoadCarSuccess, (state, { cars }) => cars)
);

export function reducer(state: CarsByBrand[] = [], action: Action) {
  return carReducer(state, action);
}
