import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { FrontEndServiceService } from 'src/app/frontEnd/front-end-service.service';

import { PatientDetailComponent } from './patient-detail.component';

describe('PatientDetailComponent', () => {
  let component: PatientDetailComponent;
  let fixture: ComponentFixture<PatientDetailComponent>;
  let mockfrontendserivce: any;
  let res = {
    user: 'prince'
  }

  beforeEach(async () => {
    mockfrontendserivce = jasmine.createSpyObj(['getPatient'])
    await TestBed.configureTestingModule({
      declarations: [ PatientDetailComponent ],
      providers: [
        {provide: FrontEndServiceService, useValue: mockfrontendserivce}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientDetailComponent);
    component = fixture.componentInstance;
    mockfrontendserivce.getPatient.and.returnValue(of(res));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getUser when component is initailized', () => {
    spyOn(fixture.componentInstance, 'getUser')
    component.ngOnInit()
    expect(fixture.componentInstance.getUser).toHaveBeenCalled()
  });

  it('should call getPatient from service when getuser is called', () => {
    component.getUser()
    expect(mockfrontendserivce.getPatient).toHaveBeenCalled()
  });

  it('should set the value of user to the respone from the service call', () => {
    component.getUser()
    expect(fixture.componentInstance.user).toEqual(res.user)
  });


});
