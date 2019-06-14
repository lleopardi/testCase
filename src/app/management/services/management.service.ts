import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { ManageResponse } from '../models/manage-response.model';
import { environment } from '../../../environments/environment';
import { tap, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ManagementService {

  private allFields = new BehaviorSubject<ManageResponse[]>([]);
  private fields: ManageResponse[];

  allFields$ = this.allFields.asObservable();

  constructor(private http: HttpClient) { }

  all(): Observable<ManageResponse[]> {
    const api = `${environment.api}manage`;

    return this.http.get<ManageResponse[]>(api).pipe(
      tap((response) => {
        this.fields = response;
        return this.allFields.next(this.fields);
      })
    );
  }

  update(field: ManageResponse): Observable<ManageResponse> {
    const api = `${environment.api}manage/${field.id}`;
    return this.http.put<ManageResponse>(api, field).pipe(
      tap((response) => this.updateArray(response))
    );
  }

  updateArray(response: ManageResponse) {
    const filtrado = this.fields.filter( (item) => item.id !== response.id);
    const nuevo = [...filtrado, response];
    this.allFields.next(nuevo);
  }

}
