import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestRoutingModule } from './request-routing.module';
import { RequestComponent } from './containers/request/request.component';
import { RequestListComponent } from './components/request-list/request-list.component';
import { RequestListFilterComponent } from './components/request-list-filter/request-list-filter.component';

@NgModule({
  declarations: [RequestComponent, RequestListComponent, RequestListFilterComponent],
  imports: [
    CommonModule,
    RequestRoutingModule
  ]
})
export class RequestModule { }
