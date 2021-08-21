import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { PatientComponent } from './patient/patient.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { PatientInfoComponent } from './patient-info/patient-info.component';
import { InterfaceComponent } from './interface/interface.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    AboutComponent,
    HomeComponent,
    PatientComponent,
    PatientDetailsComponent,
    PatientInfoComponent,
    InterfaceComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      // {path: 'user/lab', component: InterfaceComponent, children: [
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
export class LabModule { }
