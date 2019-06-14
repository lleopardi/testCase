import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Request } from '../models/request.models';
import { RequestService } from '../services/request.service';


describe('Request Service', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RequestService]
    });
  });

  describe(':', () => {
    function setup() {
      const requestService: RequestService = TestBed.get(RequestService);
      const httpTestingController = TestBed.get(HttpTestingController);
      return { requestService, httpTestingController };
    }

    it('must get list of request', () => {
      const { requestService, httpTestingController } = setup();
      const mockData: Request[] = [
        {
          id: 1,
          date: '2017/09/21',
          reason: 'data science algorithms',
          status: 'pending'
        }, {
          id: 2,
          date: '2017/08/13',
          reason: 'stakeHolder dashboard',
          status: 'approved'
        }
      ];

      requestService.all();

      const req = httpTestingController.expectOne('http://localhost:3000/requests');

      expect(req.request.method).toBe('GET');

      req.flush(mockData);

    });








  });





});
