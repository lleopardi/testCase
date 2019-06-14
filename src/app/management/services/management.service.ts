import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { ManageResponse } from '../models/manage-response.model';
import { environment } from '../../../environments/environment';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ManagementService {

  private allFields = new BehaviorSubject<ManageResponse[]>([]);
  private fields: ManageResponse[];

  allFields$ = this.allFields.asObservable();

  constructor(private http: HttpClient) { }

  all(): void {
    const api = `${environment.api}manage`;

    this.http.get<ManageResponse[]>(api).subscribe((response) => {
      this.fields = response;
      return this.allFields.next(this.fields);
    });
  }

  update(field: ManageResponse): Observable<ManageResponse> {
    const api = `${environment.api}manage/${field.id}`;
    return this.http.put<ManageResponse>(api, field).pipe(
      tap((response) => this.updateArray(response))
    );
  }

  updateArray(response: ManageResponse) {
    const fields = this.fields.map( (item) => {
      if (item.id === response.id) {
        return response;
      }
      return item;
    }
    );
    this.allFields.next(fields);
  }

}
