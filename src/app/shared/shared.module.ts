import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { PatientComponent } from './patient/patient.component';
import { PatientDetailComponent } from './patient-detail/patient-detail.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';





@NgModule({
  declarations: [
    AboutComponent,
    HomeComponent,
    PatientComponent,
    PatientDetailComponent,
    HeaderComponent,
    FooterComponent

  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MaterialModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    AboutComponent,
    HomeComponent,
    PatientComponent,
    PatientDetailComponent,
    HeaderComponent


  ]
})
export class SharedModule { }
