import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CarsByBrand } from '../../models/carsByBrand.model';
import { BaseHttpService } from '../base-http/base-http.services';

@Injectable({
  providedIn: 'root',
})
export class CarService extends BaseHttpService<CarsByBrand> {
  constructor(protected override http: HttpClient) {
    super(http);
  }
}
