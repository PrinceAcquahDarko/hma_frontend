import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { AuthServiceService } from '../auth-service.service';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let mockAuthService : any
  let mockRouter : any

  beforeEach( () => {
        mockAuthService = jasmine.createSpyObj(['loginUser'])
        mockRouter = jasmine.createSpyObj(['navigate'])

    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ LoginComponent ],
      providers: [
          {provide: AuthServiceService, useValue: mockAuthService},
          {provide: Router, useValue: mockRouter}
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    
    fixture.detectChanges();
  });




  
  it('should call login function if fields are valid', ()=> {

  //eventhough fields are not valid (component.userCredentials.password has not been set )
  //the function still fires and I do not know why


    mockAuthService.loginUser.and.returnValue(of(true))
    component.userCredentials.email = "info@gmail.com",
//     component.userCredentials.password = ""

    fixture.detectChanges();

    component.loginUser()
    console.log(component.registerForm?.valid)

    expect(mockAuthService.loginUser).toHaveBeenCalled()

  })
});
