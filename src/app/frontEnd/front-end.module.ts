import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontEndComponent } from './front-end/front-end.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { PatientComponent } from './patient/patient.component';
import { AboutComponent } from './about/about.component';
import { RegisterpatientComponent } from './registerpatient/registerpatient.component';



@NgModule({
  declarations: [
    FrontEndComponent,
    HomeComponent,
    PatientComponent,
    AboutComponent,
    RegisterpatientComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: 'user/frontEnd', component: FrontEndComponent, children: [
        {
          path: '', redirectTo: 'home', pathMatch: 'full'
        },
        {
          path: 'home', component: HomeComponent
        },
        {
          path: 'loginInPatient', component: PatientComponent
        },
        {
          path: 'about', component: AboutComponent
        },
        {
          path: 'registerPatient', component: RegisterpatientComponent
        }

      ]}
    ]),
    SharedModule
  ]
})
export class FrontEndModule { }
