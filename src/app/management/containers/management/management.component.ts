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
  allEntities: {};
  fieldSelected: ManageResponse = null;
  entitiesArray: ManageResponse[];
  entities$: Observable<ManageResponse[]>;

  constructor(private manageService: ManagementService) { }

  ngOnInit() {
    this.manageService.all().subscribe((response) => {
      // this.entitiesArray = response;
    });

    this.entities$ = this.manageService.allFields$;
  }

  getEntities(response: ManageResponse[]) {
    const entitites = response.reduce(
      (entities: { [id: number]: ManageResponse }, manage: ManageResponse) => {
        return {
          ...entities,
          [manage.id]: manage,
        };
      },
      {}
    );
    console.log('entities', entitites);
    return entitites;
  }

  getAllFields(entities) {
    return Object.keys(entities).map(id => {
      return entities[id];
    });
  }

  setField(fieldSelcted) {
    this.fieldSelected = fieldSelcted;
  }

  isActive(entity) {
    return this.fieldSelected && this.fieldSelected.id === entity.id;
  }

}
