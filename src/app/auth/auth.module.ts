import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RegisterComponent } from './register/register.component';
import { LoginComponent} from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { HelloComponent } from './hello/hello.component';



@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    HelloComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
    {
        path: '', redirectTo: 'home', pathMatch: 'full'
    },
    {
      path: 'home', component: HelloComponent 
    },
      {
        path: 'register', component: RegisterComponent
      },
      {
        path: 'login', component: LoginComponent
      }
    ]),
    SharedModule
  ]
})
export class AuthModule { }
