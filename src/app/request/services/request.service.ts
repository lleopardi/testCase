import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Request } from '../models/request.models';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  private request = new BehaviorSubject<Request[]>([]);
  private allRequest: Request[] = [];
  request$ = this.request.asObservable();

  constructor(private http: HttpClient) { }

  all() {
    const api = `${environment.api}requests`;
    this.http.get<Request[]>(api).subscribe( request => {
      this.allRequest = request;
      this.request.next(this.allRequest);
    });
  }

  filterByStatus(status: string) {
    if (status === 'all') { return  this.request.next(this.allRequest); }
    const filtered = this.allRequest.filter((request) => request.status === status);
    this.request.next(filtered);
  }
}
