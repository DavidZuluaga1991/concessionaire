import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResultData } from '../../models/result-data.model';
export abstract class BaseHttpService<TModel> {
  constructor(protected http: HttpClient) {}

  public get(apiUrl: string): Observable<ResultData<TModel[]>> {
    return this.http.get<ResultData<TModel[]>>(apiUrl);
  }

  public getId(apiUrl: string): Observable<ResultData<TModel>> {
    return this.http.get<ResultData<TModel>>(apiUrl);
  }

  public post(apiUrl: string, object: TModel): Observable<ResultData<TModel>> {
    return this.http.post<ResultData<TModel>>(apiUrl, object);
  }
}
