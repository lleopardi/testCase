import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../services/request.service';
import { Request } from '../../models/request.models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

  requests$: Observable<Request[]>;

  constructor(private requestService: RequestService) { }

  ngOnInit() {
    this.requests$ = this.requestService.request$;
    this.requestService.all();
  }

  filterByStatus(status: string = 'all') {
    this.requestService.filterByStatus(status);
  }
}
