// import { NO_ERRORS_SCHEMA } from '@angular/core';
// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { FormsModule } from '@angular/forms';
// import { of } from 'rxjs';
// import { AuthServiceService } from '../auth-service.service';

// import { LoginComponent } from './login.component';

// describe('LoginComponent', () => {
//   let component: LoginComponent;
//   let fixture: ComponentFixture<LoginComponent>;
//   let mockAuthService : any

//   beforeEach( () => {
        // mockAuthService = jasmine.createSpyObj(['loginUser'])
//     TestBed.configureTestingModule({
//       imports: [FormsModule],
//       declarations: [ LoginComponent ],
//       providers: [
//           {provide: AuthServiceService, useValue: mockAuthService}
//       ],
//       schemas: [NO_ERRORS_SCHEMA]
//     })
//     .compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(LoginComponent);
//     component = fixture.componentInstance;
    
//     fixture.detectChanges();
//   });




  
//   it('should call login function if fields are valid', ()=> {
//     mockAuthService.loginUser.and.returnValue(of(true))
//     // component.userCredentials.email = "info@gmail.com",
//     // component.userCredentials.password = "ofeefj"

//     fixture.detectChanges();

//     component.loginUser()
//     console.log(component.registerForm?.valid)



//     // expect(mockAuthService.loginUser).toHaveBeenCalled()

//   })
// });
