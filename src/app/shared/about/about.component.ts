import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from 'src/app/auth/auth-service.service';
import {trigger, style, animate, transition} from "@angular/animations"



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
  selector: 'app-about-shared',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [
    trigger('fadeSlideInOut', [
      transition(':enter', [
        style({
          opacity: 0, transform: 'translateY(10px)'
        }),
        animate('400ms', style({opacity:0.4,  transform : 'translateY(0px)'}))
      ]),
      transition(':leave', [
        animate('500ms', style({opacity: 0, transform: 'translateY(10px)'}))
      ])
    ])
  ]

})
export class AboutComponent implements OnInit {
  errormsg: string = ''
//get userinfo from a service with the id

  aboutUser: FormGroup = this.fb.group({

    firstname: ['', [Validators.required]],

    lastname: ['', [Validators.required]],

    email: ['', [Validators.required, Validators.email]],

    passwordGroup: this.fb.group({
      password: ['', [Validators.required, Validators.minLength(6)]],

      confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
    }, {validators: passwordMatcher}),

    position: ['', [Validators.required]]
  })
  constructor(private fb: FormBuilder, private authService: AuthServiceService) { }

  ngOnInit(): void {
    this.setUser()
  }

  setUser(): void{
    this.authService.getUser().subscribe(
      res => {
        this.aboutUser.patchValue(res.user[0])
      }
    )
  }

  updateUser(): void{
    this.authService.updateUser(this.aboutUser.value).subscribe(
      res => this.errormsg = res.message,
      err => console.log(err)
    )
  }

}
