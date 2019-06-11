import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestRoutingModule } from './request-routing.module';
import { RequestComponent } from './containers/request/request.component';

@NgModule({
  declarations: [RequestComponent],
  imports: [
    CommonModule,
    RequestRoutingModule
  ]
})
export class RequestModule { }
