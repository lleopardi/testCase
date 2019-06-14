import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { ManagementRoutingModule } from './management-routing.module';
import { ManagementComponent } from './containers/management/management.component';
import { FieldViewerComponent } from './containers/field-viewer/field-viewer.component';

@NgModule({
  declarations: [ManagementComponent, FieldViewerComponent],
  imports: [
    CommonModule,
    ManagementRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ManagementModule { }
