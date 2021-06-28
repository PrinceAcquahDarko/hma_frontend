import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { AuthServiceService } from 'src/app/auth/auth-service.service';

import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;
  let mockAuthService: any;
  let res = {
      user: [
          {
        firstname: 'PRINCE',
        lastname: 'darko',
        position: 'doctor',
        email: 'info@gmail.com'
      }
    ]
  }

  beforeEach(async () => {
      mockAuthService = jasmine.createSpyObj(['updateUser', 'getUser'])
    await TestBed.configureTestingModule({
        imports: [ReactiveFormsModule],
      declarations: [ AboutComponent ],
      providers: [{
        provide:  AuthServiceService, useValue: mockAuthService
      }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    mockAuthService.updateUser.and.returnValue(of(true))
    mockAuthService.getUser.and.returnValue(of(res))

    fixture.detectChanges();
  });

  it('should populate the form with users data from the get request', () => {
   
    expect(component.aboutUser.get('firstname')?.value).toEqual('PRINCE')
    expect(component.aboutUser.get('lastname')?.value).toEqual('darko')
    expect(component.aboutUser.get('email')?.value).toEqual('info@gmail.com')
    expect(component.aboutUser.get('position')?.value).toEqual('doctor')
    
  });

  it('should call the update user function from service when Update user is called', ()=> {
      component.updateUser();
      expect(mockAuthService.updateUser).toHaveBeenCalled()
  })

  it('should call the update user function from service with the right parameter when Update user is called', ()=> {
    component.updateUser();
    expect(mockAuthService.updateUser).toHaveBeenCalledOnceWith(component.aboutUser.value)
})
});
