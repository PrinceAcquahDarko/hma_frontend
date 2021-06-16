import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
import { ILogin, IRespons } from '../interface';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild(NgForm) registerForm: NgForm | undefined

  errormsg: string = ''

  get isValid(): boolean{
    return this.registerForm?.valid ? true : false
  }
  userCredentials: ILogin = {
    email: '',
    password: ''
  }
  constructor(private authService: AuthServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  loginUser(): void{
    console.log(this.registerForm?.invalid)

    if(this.isValid){
      console.log('yes its valid from loginUser')
      this.authService.loginUser(this.userCredentials).subscribe(
        (res: IRespons) => {
          if(!!res.auth)
            {
              localStorage.setItem('token', JSON.stringify(res.token))
              this.router.navigate([`user/${res.position}`])
            }
          else{
              this.errormsg = res.message
          }
        },
        err => this.errormsg = err
      )
    }

    //call service
  }

}
