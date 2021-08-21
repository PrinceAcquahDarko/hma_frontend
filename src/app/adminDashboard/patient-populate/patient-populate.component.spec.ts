import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientPopulateComponent } from './patient-populate.component';

describe('PatientPopulateComponent', () => {
  let component: PatientPopulateComponent;
  let fixture: ComponentFixture<PatientPopulateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientPopulateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientPopulateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
