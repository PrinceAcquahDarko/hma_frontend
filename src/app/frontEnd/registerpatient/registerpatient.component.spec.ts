import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { FrontEndServiceService } from '../front-end-service.service';

import { RegisterpatientComponent } from './registerpatient.component';

describe('RegisterpatientComponent', () => {
  let component: RegisterpatientComponent;
  let fixture: ComponentFixture<RegisterpatientComponent>;
  let mockRouter: any, frontEndService: any, mockActivatedRoute: any;
  let res: any;

  beforeEach(async () => {
      mockRouter = jasmine.createSpyObj(['navigate'])
      frontEndService = jasmine.createSpyObj(['registerPatient'])
      frontEndService.key = 'no_key'
    await TestBed.configureTestingModule({
        imports: [ReactiveFormsModule],
      declarations: [ RegisterpatientComponent ],
      providers: [
          {provide: Router, useValue: mockRouter},
          {provide: FrontEndServiceService, useValue: frontEndService},
          {provide: ActivatedRoute, useValue: mockActivatedRoute}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
      res   = {
        key: 'hello'
    }
    fixture = TestBed.createComponent(RegisterpatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should call registerUser from frontEnd service if register user is called', () => {
    frontEndService.registerPatient.and.returnValue(of(res));
    component.registerPatient();
    expect(frontEndService.registerPatient).toHaveBeenCalled()
  });

  it('should call registerUser from frontEnd service with the correct parameter if register user is called', () => {
    frontEndService.registerPatient.and.returnValue(of(res));
    component.registerPatient();
    expect(frontEndService.registerPatient).toHaveBeenCalledOnceWith(component.registerPatientForm.value)
  });
 
  it('should set the key in the frontEnd service if register user is called and has a key', () => {
    frontEndService.registerPatient.and.returnValue(of(res));
    component.registerPatient();
    expect(frontEndService.key).toEqual('hello')
  });

  it('should not set the key in the frontEnd service if register user is called and has no key', () => {
    res.key = ''
    frontEndService.registerPatient.and.returnValue(of(res));
    component.registerPatient();
    expect(frontEndService.key).toEqual('no_key')
  });

  it('should not route if register user is called and has no key', () => {
    res.key = ''
    frontEndService.registerPatient.and.returnValue(of(res));
    component.registerPatient();
    expect(mockRouter.navigate).not.toHaveBeenCalled()
  });

  it('should route if register user is called and has a key', () => {
    frontEndService.registerPatient.and.returnValue(of(res));
    component.registerPatient();
    expect(mockRouter.navigate).toHaveBeenCalled()
  });

  it('should route with the correct parameter if register user is called and has a key', () => {
    frontEndService.registerPatient.and.returnValue(of(res));
    component.registerPatient();
    expect(mockRouter.navigate).toHaveBeenCalledOnceWith(['../loginInPatient'], {relativeTo: mockActivatedRoute})
  });


  it('should call registerPatient when the register button is clicked', fakeAsync(()=>{

    component.registerPatientForm.get('firstname')?.setValue('PRINCE')
    component.registerPatientForm.get('lastname')?.setValue('PRINCE')
    component.registerPatientForm.get('contact')?.setValue('454555')
    component.registerPatientForm.get('address')?.setValue('PRINCE');
    fixture.detectChanges();
    
      spyOn(fixture.componentInstance, 'registerPatient')

      const button = fixture.debugElement.nativeElement.querySelector('button')
      button.click();
      tick()
      expect(fixture.componentInstance.registerPatient).toHaveBeenCalled()

 
    
  })

)}
);
