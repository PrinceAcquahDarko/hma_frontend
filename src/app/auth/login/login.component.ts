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
  show= false;
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

    if(this.isValid){
      this.show = true
      this.authService.loginUser(this.userCredentials).subscribe(
        (res: IRespons) => {
          if(!!res.auth)
            {
              localStorage.setItem('token', JSON.stringify(res.token));
              localStorage.setItem('fullname', JSON.stringify(res.fullname));
              this.authService.position = res.position;
              this.router.navigate([`user/${res.position}`])
            }
          else{
              this.errormsg = res.message
          }
        },
        err => {
          this.errormsg = err;
          this.show = false;
        },
        () => {
          this.show = false
        }
      )
    }

  }

}
