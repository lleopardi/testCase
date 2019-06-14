import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestListComponent } from './request-list.component';

describe('RequestListComponent', () => {
  let component: RequestListComponent;
  let fixture: ComponentFixture<RequestListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return styles of status', () => {
    expect(component.getStyle('pending')).toEqual('badge badge-dark');
    expect(component.getStyle('approved')).toEqual('badge badge-success');
    expect(component.getStyle('denied')).toEqual('badge badge-danger');
  });
});
