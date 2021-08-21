import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from '../about/about.component';
import { HomeComponent } from '../home/home.component';
import { InterfaceComponent } from '../interface/interface.component';
import { PatientComponent } from '../patient/patient.component';
import { PatientDetailsComponent } from '../patient-details/patient-details.component';
import { PatientInfoComponent } from '../patient-info/patient-info.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AboutComponent,
    HomeComponent,
    InterfaceComponent,
    PatientComponent,
    PatientDetailsComponent,
    PatientInfoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      // {path: 'user/pharmacy', component: InterfaceComponent, children: [
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
        }

      // ]}
    ]),
    SharedModule
  ]
})
export class PharmModule { }
