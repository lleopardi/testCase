import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ManageResponse } from '../../models/manage-response.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ManagementService } from '../../services/management.service';

@Component({
  selector: 'app-field-viewer',
  templateUrl: './field-viewer.component.html',
  styleUrls: ['./field-viewer.component.css']
})
export class FieldViewerComponent implements OnInit, OnChanges {

  @Input()
  field: ManageResponse;

  isEditing = false;
  fieldForm: FormGroup;
  typeOfFields = ['integer', 'boolean', 'string'];

  constructor(private fb: FormBuilder, private managementService: ManagementService) {
    this.createForm();
   }

  ngOnInit() {
    this.fieldForm.setValue(this.field.fields);
  }

  ngOnChanges(changes: SimpleChanges) {
    const {fields} = changes.field.currentValue;
    this.fieldForm.setValue(fields);
  }

  get fields() {
    return this.field.fields;
  }

  get values() {
    return this.field.values;
  }

  get message() {
    const {sensitivity} = this.fields;
    if (sensitivity) {
      return 'This is personal data, and cannot be distribuited in raw information';
    }
    return 'This is not personal data, and can be distribuited in raw information';
  }

  createForm() {
    this.fieldForm = this.fb.group({
      key_name: [],
      description: [],
      type: [],
      sensitivity: [false],
    });
  }

  edit() {
    this.isEditing = true;
  }

  save() {
    this.isEditing = false;
    const formValue = this.fieldForm.value;
    const fields = this.field;
    const payload: ManageResponse = { ...fields, ...{fields: formValue}};
    this.managementService.update(payload).subscribe((response) => {
      console.log('response', response);
      this.field = response;
    });
  }

}
