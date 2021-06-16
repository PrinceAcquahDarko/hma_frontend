import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing'

import { FrontEndServiceService } from './front-end-service.service';
import { IInitialize, IPatientRegister } from './frontEndInterface';


describe('FrontEndServiceService', () => {
  let service: FrontEndServiceService;
  let httpTestingController: HttpTestingController
  let data:IPatientRegister
  let data2: IInitialize

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(FrontEndServiceService);
    httpTestingController = TestBed.inject(HttpTestingController)
  });

  it("should call post when registerPatient is called", () => {
    service.registerPatient(data).subscribe();

    const req = httpTestingController.expectOne('http://localhost:3000/patient')

    expect(req).toBeTruthy()

  })

  it("should call post when initializePatient is called", () => {
    service.initializePatient(data2).subscribe();

    const req = httpTestingController.expectOne('http://localhost:3000/details')
    
    expect(req).toBeTruthy()

  })
});
