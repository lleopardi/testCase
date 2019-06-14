import { Component, OnInit } from '@angular/core';
import { ManagementService } from '../../services/management.service';
import { ManageResponse } from '../../models/manage-response.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css']
})
export class ManagementComponent implements OnInit {
  fieldSelected: ManageResponse = null;
  entities$: Observable<ManageResponse[]>;

  constructor(private manageService: ManagementService) { }

  ngOnInit() {
    this.entities$ = this.manageService.allFields$;
    this.manageService.all();
  }

  setField(fieldSelected: ManageResponse) {
    this.fieldSelected = fieldSelected;
  }

  isActive(entity: ManageResponse) {
    return this.fieldSelected && this.fieldSelected.id === entity.id;
  }

}
