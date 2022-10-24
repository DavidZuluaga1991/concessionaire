import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { take } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { Brand } from 'src/app/core/models/brand.model';
import { Car } from 'src/app/core/models/car.model';
import { CarsByBrand } from 'src/app/core/models/carsByBrand.model';
import { Condition } from 'src/app/core/models/condition.model';
import * as CarAction from 'src/app/store/actions/cars-by-brand.actions';
import * as FilterAction from 'src/app/store/actions/filter.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public cars: CarsByBrand[] = [];
  public tempCars: CarsByBrand[] = [];
  public carModal?: Car;
  public indexCarModal = 0;
  public brands: Brand[] = [];
  public conditions: Condition[] = [];
  public filterCondition?: Condition;
  public filterSearch = '';

  constructor(private store: Store<AppState>) {}
  ngOnInit(): void {
    this.store.dispatch({ type: CarAction.LOAD_CARS_BY_BRANDS });
    this.store.dispatch({ type: FilterAction.LOAD_FILTERS });
    this.store
      .select('cars')
      .pipe(take(2))
      .subscribe((cars) => {
        this.cars = cars;
        this.tempCars = cars;
      });
    this.store
      .select('filter')
      .pipe(take(2))
      .subscribe((filter) => {
        if (filter?.brands?.length > 0) {
          this.brands = filter.brands;
          this.conditions = filter.conditions;
          this.filterCondition = filter.conditions[0];
        }
      });
  }

  public selectedCar(car: Car, index: number) {
    this.carModal = car;
    this.indexCarModal = index;
  }

  public changePublication(brand: string, next?: boolean) {
    let index = 0;
    const carsTemp = this.tempCars.find((x) =>
      x.brand.description.toUpperCase().includes(brand.toUpperCase())
    );
    if (carsTemp) {
      if (next) {
        index =
          this.indexCarModal + 1 >= carsTemp.cars.length
            ? 0
            : this.indexCarModal + 1;
      } else {
        index =
          this.indexCarModal - 1 < 0
            ? carsTemp.cars.length - 1
            : this.indexCarModal - 1;
      }
      this.selectedCar(carsTemp.cars[index], index);
    }
  }

  public close() {
    this.carModal = undefined;
    this.indexCarModal = 0;
  }

  private filterAction() {
    this.tempCars = this.getListCarsByBrand();
    this.getListCarsByCondition();
  }

  private getListCarsByBrand(): CarsByBrand[] {
    return this.filterSearch
      ? [
          ...this.cars.filter((brand) =>
            brand.brand.description
              .toUpperCase()
              .includes(this.filterSearch.toUpperCase())
          ),
        ]
      : [...this.cars];
  }

  private getListCarsByCondition() {
    const tempCarsByCondition: CarsByBrand[] = [];
    if (this.filterCondition?.id !== '1') {
      for (let i = 0; i < this.tempCars.length; i++) {
        const element = { ...this.tempCars[i] };
        let cars = element.cars.filter(
          (car) => car.condition.id === this.filterCondition?.id
        );
        element.cars = [...cars];
        if (element.cars.length > 0) {
          tempCarsByCondition.push(element);
        }
      }
      this.tempCars = tempCarsByCondition;
    }
  }

  public filterByCondition(condition: Condition) {
    this.filterCondition = condition;
    this.filterAction();
  }

  public filterByBrand(text: string) {
    this.filterSearch = text && typeof text === 'string' ? text : '';
    this.filterAction();
  }
}
