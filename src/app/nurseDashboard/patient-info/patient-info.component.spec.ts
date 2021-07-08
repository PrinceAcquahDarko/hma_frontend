import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { FrontEndServiceService } from 'src/app/frontEnd/front-end-service.service';

import { PatientInfoComponent } from './patient-info.component';

describe('PatientInfoComponent', () => {
  let component: PatientInfoComponent;
  let fixture: ComponentFixture<PatientInfoComponent>;
  let mockfrontendService: any;
  let res = {
    message: 'prince'
  }

  beforeEach(async () => {
    mockfrontendService = jasmine.createSpyObj(['populatePatientData'])
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ PatientInfoComponent ],
      providers: [
        {provide: FrontEndServiceService, useValue: mockfrontendService}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call populate patientData from frontend service when populateData is called', () => {
    mockfrontendService.populatePatientData.and.returnValue(of(res));
    component.populateData();
    expect(mockfrontendService.populatePatientData).toHaveBeenCalled()

  });

  it('should set the errororconfirm msg to the response from the service call ', () => {
    mockfrontendService.populatePatientData.and.returnValue(of(res));
    component.populateData();
    expect(component.errororconfirmmsg).toEqual('prince')

  });
});
