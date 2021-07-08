import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';

import { PatientComponent } from './patient.component';

describe('PatientComponent', () => {
  let component: PatientComponent;
  let fixture: ComponentFixture<PatientComponent>;
  let mockRouter: any, mockActivatedRoute: any

  beforeEach(async () => {
    mockRouter = jasmine.createSpyObj(['navigate'])
    await TestBed.configureTestingModule({
      declarations: [ PatientComponent ],
      providers: [
        {provide:Router, useValue: mockRouter},
        {provide: ActivatedRoute, useValue: mockActivatedRoute}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should route if the value is true', () => {
      component.route(true)
      expect(mockRouter.navigate).toHaveBeenCalled()
  });

  it('should route if the value is false', () => {
    component.route(false)
    expect(mockRouter.navigate).not.toHaveBeenCalled()
});


});
