import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterfaceComponent } from './interface/interface.component';
import { RouterModule } from '@angular/router';
import { PatientLoginComponent } from '../shared/patient-login/patient-login.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    InterfaceComponent,
    PatientLoginComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
        {path: 'user/doctor', component: InterfaceComponent}
    ])
  ]
})
export class DoctorsModule { }
