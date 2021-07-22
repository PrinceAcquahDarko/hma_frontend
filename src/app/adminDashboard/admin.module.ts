import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { InterfaceComponent } from './interface/interface.component';
import { AboutComponent } from './about/about.component';
import { StaffComponent } from './staff/staff.component';
import { PatientComponent } from './patient/patient.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { AllPatientsComponent } from './all-patients/all-patients.component';



@NgModule({
  declarations: [
    HomeComponent,
    InterfaceComponent,
    AboutComponent,
    StaffComponent,
    PatientComponent,
    AllPatientsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: 'user/admin', component: InterfaceComponent, children: [
        {
          path: '', redirectTo: 'home', pathMatch: 'full'
        },
        {
          path: 'home', component: HomeComponent
        },
        {
          path: 'patient', component: PatientComponent
        },
        {
          path: 'staff', component: StaffComponent
        },
        {
          path: 'about', component: AboutComponent
        },
        {
          path: 'activePatient', component: AllPatientsComponent
        }

      ]}
    ]),
    SharedModule
  ]
})
export class AdminModule { }
