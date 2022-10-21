import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CarsByBrand } from '../../models/carsByBrand.model';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  constructor(private http: HttpClient) {}

  public get(apiUrl: string): Observable<CarsByBrand[]> {
    return this.http.get<CarsByBrand[]>(apiUrl);
  }
}
