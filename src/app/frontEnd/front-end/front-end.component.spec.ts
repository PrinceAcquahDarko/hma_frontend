// import { Directive, Input, NO_ERRORS_SCHEMA } from '@angular/core';
// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { ActivatedRoute, Router, RouterModule } from '@angular/router';

// import { FrontEndComponent } from './front-end.component';

// @Directive({
//     selector: '[routerLink]',
//     host: {'(click)': 'onClick'}
// })

// export class RouterLinkDirectiveStub {
//     @Input('routerlink') linkParmas: any;
//     navigatedTo: any = null;

//     onClick() {
//         this.navigatedTo = this.linkParmas
//     }
// }

// describe('FrontEndComponent', () => {
//   let component: FrontEndComponent;
//   let fixture: ComponentFixture<FrontEndComponent>;
//   let mockRouter: any;
//   let mockActivated: any;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//         imports: [RouterModule],
//       declarations: [ FrontEndComponent, RouterLinkDirectiveStub ],
  
//       schemas: [NO_ERRORS_SCHEMA]
//     })
//     .compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(FrontEndComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
