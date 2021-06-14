import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PatientLoginComponent } from './patient-login/patient-login.component';




@NgModule({
  declarations: [
    PatientLoginComponent
  ],
  imports: [
    FormsModule,
    CommonModule
  ],
  exports: [
    PatientLoginComponent,
    FormsModule,
    ReactiveFormsModule

  ]
})
export class SharedModule { }
