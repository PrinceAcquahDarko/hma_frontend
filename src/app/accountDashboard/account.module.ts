import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterfaceComponent } from './interface/interface.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { PatientComponent } from './patient/patient.component';
import { SharedModule } from '../shared/shared.module';
import { PatientInfoComponent } from './patient-info/patient-info.component';
import { RouterModule } from '@angular/router';
import { PatientDetailsComponent } from './patient-details/patient-details.component';



@NgModule({
  declarations: [
    InterfaceComponent,
    AboutComponent,
    HomeComponent,
    PatientComponent,
    PatientInfoComponent,
    PatientDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      // {path: 'user/account', component: InterfaceComponent, children: [
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
          path: 'patientDetails', component: PatientDetailsComponent
        },
        {
          path: 'about', component: AboutComponent
        },
       

      // ]}
    ]),
    SharedModule

  ]
})
export class AccountModule { }
