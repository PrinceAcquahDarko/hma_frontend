import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterfaceComponent } from './interface/interface.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PatientComponent } from './patient/patient.component';
import { AboutComponent } from './about/about.component';
import { SharedModule } from '../shared/shared.module';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { PatientInfoComponent } from './patient-info/patient-info.component';



@NgModule({
  declarations: [
    InterfaceComponent,
    HomeComponent,
    PatientComponent,
    AboutComponent,
    PatientDetailsComponent,
    PatientInfoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      
        {path: 'user/nurse', component: InterfaceComponent, children: [
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
          //to be used as a modal
          {
            path: 'populate', component: PatientInfoComponent
          }
  
        ]}

    ]),
    SharedModule
  
  ]
  
})
export class NurseModule { }
