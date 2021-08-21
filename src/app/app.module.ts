import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {DoctorsModule} from './docDashboard/doctors.module'
import {AuthModule} from './auth/auth.module'
import { RouterModule } from '@angular/router';
import { FrontEndModule } from './frontEnd/front-end.module';
import { HttpInterceptorModule } from './shared/http-interceptor';
import { NurseModule } from './nurseDashboard/nurse.module';
import { LabModule } from './labDashboard/lab.module';
import { PharmModule } from './pharmDashboard/pharm/pharm.module';
import { AccountModule } from './accountDashboard/account.module';
import { AdminModule } from './adminDashboard/admin.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModuleModule } from './shared/app-routing-module/app-routing-module.module';



@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    HttpInterceptorModule,
    AppRoutingModuleModule,
    AuthModule,
    DoctorsModule,
    FrontEndModule,
    // RouterModule.forRoot([
    //   {path: '', component: HelloComponent}
    // ]),
    NurseModule,
    LabModule,
    PharmModule,
    AdminModule,
    AccountModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
