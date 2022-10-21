import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { Brand } from 'src/app/core/models/brand.model';
import { Car } from 'src/app/core/models/car.model';
import { CarsByBrand } from 'src/app/core/models/carsByBrand.model';
import * as CarAction from 'src/app/store/actions/car.actions';

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
  public brands: string[] = [];

  constructor(private readonly store: Store<AppState>) {}
  ngOnInit(): void {
    this.store.dispatch({ type: CarAction.LOAD_CAR });
    this.store.select('cars').subscribe((cars) => {
      cars.forEach((car, index) => {
        this.brands.push(car.brand.description);
      });
      this.brands = this.brands.sort();
      this.cars = [...cars];
      this.tempCars = this.cars;
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

  public filterAction(data: string) {
    this.tempCars = data
      ? this.cars.filter((brand) =>
          brand.brand.description.toUpperCase().includes(data.toUpperCase())
        )
      : [...this.cars];
  }
}
