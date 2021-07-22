import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RegisterComponent } from './register/register.component';
import { LoginComponent} from './login/login.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
    // {
    //     path: '', redirectTo: 'login', pathMatch: 'full'
    // },
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
