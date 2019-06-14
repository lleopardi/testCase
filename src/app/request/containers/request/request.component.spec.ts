import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestComponent } from './request.component';
import { Observable, of } from 'rxjs';
import { Request } from '../../models/request.models';
import { RequestService } from '../../services/request.service';

class MockRequestService {
  all(): Observable<Request[]> {
    return of([{
      id: 1,
      date: '2017/09/21',
      reason: 'data science algorithms',
      status: 'pending'
    }]);
  }
}

fdescribe('RequestComponent', () => {
  let component: RequestComponent;
  let fixture: ComponentFixture<RequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RequestComponent],
      providers: [{provide: RequestService, useClass: MockRequestService}],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
