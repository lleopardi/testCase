import { Component, OnInit, Input } from '@angular/core';
import { Request } from '../../models/request.models';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent {

  @Input()
  requests: Request[];

  classBadges = {
    pending: 'badge badge-dark',
    approved: 'badge badge-success',
    denied: 'badge badge-danger'
  };

  headerTable = ['date', 'reason', 'status'];

  constructor() { }

  getStyle(status: string) {
    return this.classBadges[status];
  }

}
