import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-request-list-filter',
  templateUrl: './request-list-filter.component.html',
  styleUrls: ['./request-list-filter.component.css']
})
export class RequestListFilterComponent {

  filters = ['all', 'pending', 'approved', 'denied'];
  filterSelected = 'all';

  @Output()
  selected =  new EventEmitter<string>();

  constructor() { }

  onSelected(filterSelected: string) {
    this.filterSelected = filterSelected;
    this.selected.emit(filterSelected);
  }
}
