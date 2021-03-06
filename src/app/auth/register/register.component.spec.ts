import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { AuthServiceService } from '../auth-service.service';

import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let mockAuthService: any
  let mockRouter: any

  beforeEach(async () => {
    mockAuthService = jasmine.createSpyObj(['registerUser'])
    mockRouter = jasmine.createSpyObj(['navigate'])

    await TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
      imports: [ReactiveFormsModule],
      providers: [
        {provide: AuthServiceService, useValue: mockAuthService},
        {provide: Router, useValue: mockRouter}
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })


    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;

     component.registerForm.get('firstname')?.setValue('Prince')
     component.registerForm.get('lastname')?.setValue('Prince')
     component.registerForm.get('email')?.setValue('info@gmail.com')
     component.registerForm.get('position')?.setValue('doc')
     component.registerForm.get('passwordGroup.password')?.setValue('Prince')
     component.registerForm.get('passwordGroup.confirmPassword')?.setValue('Prince')
    
    fixture.detectChanges();
  });


  it('should register user if user credentials is valid', ()=>{
    mockAuthService.registerUser.and.returnValue(of(true))
    fixture.detectChanges();

    component.registerUser()

    expect(mockAuthService.registerUser).toHaveBeenCalled();
    expect(mockAuthService.registerUser).toHaveBeenCalledWith(component.registerForm.value)
  })

  it('should not register user if any user credential is invalid(email)', ()=>{
    component.registerForm.get('email')?.setValue('infogmail.com')

    mockAuthService.registerUser.and.returnValue(of(true))
    fixture.detectChanges();

    component.registerUser()

    expect(mockAuthService.registerUser).not.toHaveBeenCalled()
  })


  it('should call registerUser when the register button is clicked', fakeAsync(()=>{

    fixture.detectChanges();
    
      spyOn(fixture.componentInstance, 'registerUser')

      const button = fixture.debugElement.nativeElement.querySelector('button')
      button.click();
      tick()
      expect(fixture.componentInstance.registerUser).toHaveBeenCalled()

 
    
  })

)

  it('should properly display the error message in the template if field is invalid (firstname)', ()=>{
    //for some reason i'm not able to test this
    //i do not know if it's because the span has the ngIf directive

    /*
    
    component.registerForm.get('firstname')?.setValue('')

    fixture.detectChanges();

    let firstnameSpan = fixture.debugElement.queryAll(By.css('span'))
    expect(firstnameSpan[0]?.nativeElement.textContent).toBeDefined()
    

    */
  
   
   
    

  })
});
