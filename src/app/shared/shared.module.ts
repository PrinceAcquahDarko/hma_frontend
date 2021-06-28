import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { PatientComponent } from './patient/patient.component';
import { PatientDetailComponent } from './patient-detail/patient-detail.component';





@NgModule({
  declarations: [
    AboutComponent,
    HomeComponent,
    PatientComponent,
    PatientDetailComponent

  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    AboutComponent,
    HomeComponent,
    PatientComponent,
    PatientDetailComponent


  ]
})
export class SharedModule { }
