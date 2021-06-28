import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterfaceComponent } from './interface/interface.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PatientComponent } from './patient/patient.component';
import { AboutComponent } from './about/about.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    InterfaceComponent,
    HomeComponent,
    PatientComponent,
    AboutComponent
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
            path: 'about', component: AboutComponent
          }
  
        ]}

    ]),
    SharedModule
  
  ]
  
})
export class NurseModule { }
