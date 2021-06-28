import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {DoctorsModule} from './docDashboard/doctors.module'
import {AuthModule} from './auth/auth.module'
import { RouterModule } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { FrontEndModule } from './frontEnd/front-end.module';
import { HttpInterceptorModule } from './shared/http-interceptor';
import { NurseModule } from './nurseDashboard/nurse.module';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    HttpInterceptorModule,
    AuthModule,
    DoctorsModule,
    FrontEndModule,
    RouterModule.forRoot([
      {path: '', component: HelloComponent}
    ]),
    NurseModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
