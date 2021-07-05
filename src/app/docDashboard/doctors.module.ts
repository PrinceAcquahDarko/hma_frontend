import { NgModule } from '@angular/core';
import { InterfaceComponent } from './interface/interface.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { PatientComponent } from './patient/patient.component';
import { AboutComponent } from './about/about.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { PatientInfoComponent } from './patient-info/patient-info.component';




@NgModule({
  declarations: [
    InterfaceComponent,
    HomeComponent,
    PatientComponent,
    AboutComponent,
    PatientDetailsComponent,
    PatientInfoComponent,

  ],
  imports: [
    RouterModule.forChild([
      {path: 'user/doctor', component: InterfaceComponent, children: [
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
        //we will use a dialog
        {
          path: 'populate', component: PatientInfoComponent
        }

      ]}
    ]),
    SharedModule
  ]
})
export class DoctorsModule { }
