import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
import { IRespons } from '../interface';


function passwordMatcher(c: AbstractControl): { [key:string]: boolean } | null {

  const passwordControl = c.get('password');
  const confirmPassword = c.get('confirmPassword');

  if (passwordControl?.pristine || confirmPassword?.pristine){
    return null;
  }
  if (passwordControl?.value === confirmPassword?.value){
    return null
  }
  return {'match': true}
}


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  show = false;
  errormsg: string = ''

  registerForm: FormGroup = this.fb.group({

    firstname: ['', [Validators.required]],

    lastname: ['', [Validators.required]],

    email: ['', [Validators.required, Validators.email]],

    passwordGroup: this.fb.group({
      password: ['', [Validators.required, Validators.minLength(6)]],

      confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
    }, {validators: passwordMatcher}),

    position: ['', [Validators.required]]
  })

 
  constructor(private fb: FormBuilder, private router: Router, private authService: AuthServiceService) { }

  ngOnInit(): void {
  
  }

  registerUser(): void{
      if(this.registerForm?.valid){
        this.show = true
        this.authService.registerUser(this.registerForm.value).subscribe(
          (res: IRespons) => {
            if(!!res.auth)
              {
                localStorage.setItem('token', JSON.stringify(res.token))
                localStorage.setItem('fullname', JSON.stringify(res.fullname))
                 this.authService.position = res.position;

                this.router.navigate([`user/${res.position}`])
              }
            else{
                this.errormsg = res.message
            }
          },
          err => this.errormsg = err,
          () => {
            this.show = false;
          }
        )
      } 
  }

}
