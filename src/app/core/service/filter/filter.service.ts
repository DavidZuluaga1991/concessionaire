import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Filter } from '../../models/filters.model';
import { BaseHttpService } from '../base-http/base-http.services';

@Injectable({
  providedIn: 'root',
})
export class FilterService extends BaseHttpService<Filter> {
  constructor(protected override http: HttpClient) {
    super(http);
  }
}
