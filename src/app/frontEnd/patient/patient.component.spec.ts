import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { FrontEndServiceService } from '../front-end-service.service';

import { PatientComponent } from './patient.component';

describe('PatientComponent', () => {
  let component: PatientComponent;
  let fixture: ComponentFixture<PatientComponent>;
  let frontEndService: any;
  let res = {
      message: "hey you working!!!"
  }

  beforeEach(async () => {
      frontEndService = jasmine.createSpyObj(['initializePatient'])
        frontEndService.key = 'hello'

    await TestBed.configureTestingModule({
        imports: [FormsModule],
      declarations: [ PatientComponent ],
      providers: [
          {provide: FrontEndServiceService, useValue: frontEndService}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientComponent);
    component = fixture.componentInstance;
    
    fixture.detectChanges();
  });

  it('should set the cofirm message correctly from the service', () => {

    expect(component.confirmMsg).toEqual('hello')
  });

  it('should set the key correctly from the service', () => {

    expect(component.patient.key).toEqual('hello')
  });

  it('should call initialize patient from service when intialize function is called', () => {
        frontEndService.initializePatient.and.returnValue(of(res));
        
        component.initializePatient();
        expect(frontEndService.initializePatient).toHaveBeenCalled()

  })

  it('should call initialize patient from service with the right parameter when intialize function is called', () => {
    frontEndService.initializePatient.and.returnValue(of(res));
    
    component.initializePatient();
    expect(frontEndService.initializePatient).toHaveBeenCalledOnceWith(component.patient)

})

  it("should set key in  frontEndservice to  '' when intialize function is called", () => {
    frontEndService.initializePatient.and.returnValue(of(res));
    
    component.initializePatient();
    expect(frontEndService.key).toEqual('')

})

it("should set key in  the firstname input field ", () => {
    fixture.whenStable().then(()=> {
        const firstnameInput = fixture.debugElement.query(By.css('input'))
        let el = firstnameInput.nativeElement
        expect(el.value).toBe('hello')
    })
   

})

  it('should call initializePatient when the submit button is clicked', fakeAsync(()=>{

    component.patient.nhis = true
    fixture.detectChanges();
    
      spyOn(fixture.componentInstance, 'initializePatient')

      const button = fixture.debugElement.nativeElement.querySelector('button')
      button.click();
      tick()
      expect(fixture.componentInstance.initializePatient).toHaveBeenCalled()

 
    
  })

)

});
