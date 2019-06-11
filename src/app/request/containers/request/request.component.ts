import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../services/request.service';
import { Request } from '../../models/request.models';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
  requests: Request[];
  requests$ = new Subject<Request[]>();

  constructor(private requestService: RequestService) { }

  ngOnInit() {
    this.requestService.all().subscribe(requests => {
      this.requests = requests;
      this.requests$.next(requests);
    });
  }

  // TODO: refactor
  filterByStatus(status: string = 'all') {
    if (status === 'all') {
      return this.requests$.next(this.requests);
    }
    const filtered =  this.requests.filter((item) => item.status === status);
    this.requests$.next(filtered);
  }
}
