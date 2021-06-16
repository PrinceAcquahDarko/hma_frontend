import { TestBed } from '@angular/core/testing';

import { AuthServiceService } from './auth-service.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing'
import { ILogin, IRegister } from './interface';

describe('AuthServiceService', () => {
  let service: AuthServiceService;
  let httpTestingController: HttpTestingController
  let data: IRegister
  let data2: ILogin

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(AuthServiceService);
    httpTestingController = TestBed.inject(HttpTestingController)


  });

  it('should call post when registerUser is called', () => {

    service.registerUser(data).subscribe();
    
    const req = httpTestingController.expectOne('http://localhost:3000/register')

    expect(req).toBeTruthy()


  });

  it('should call put when updateUser is called', () => {

    service.updateUser(data).subscribe()
    
    const req = httpTestingController.expectOne('http://localhost:3000/register');
    req.flush({firstname: 'rpince', lastname: 'darko'})

    expect(req).toBeTruthy()


  });

  it('should call post when loginUser is called', () => {

    service.loginUser(data2).subscribe();
    
    const req = httpTestingController.expectOne('http://localhost:3000/login');
    req.flush({firstname: 'rpince', lastname: 'darko'})


    expect(req).toBeTruthy()


  });

  it('should call get when getUser is called', () => {

    service.getUser().subscribe();
    
    const req = httpTestingController.expectOne('http://localhost:3000/register')

    expect(req).toBeTruthy()


  });
});
