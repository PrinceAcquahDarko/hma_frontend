import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FrontEndServiceService } from '../front-end-service.service';

@Component({
  selector: 'app-registerpatient',
  templateUrl: './registerpatient.component.html',
  styleUrls: ['./registerpatient.component.css']
})
export class RegisterpatientComponent implements OnInit {
show = false
  errormsg: string = '';

  registerPatientForm: FormGroup = this.fb.group({

    firstname: ['', [Validators.required]],

    lastname: ['', [Validators.required]],

    contact: ['', [Validators.required]],

    address: ['', [Validators.required]]

  })
  constructor(private fb: FormBuilder, private frontSerice: FrontEndServiceService, private router: Router, private route:ActivatedRoute) { }

  
  ngOnInit(): void {
  }

  registerPatient(): void{
    // alert('not yet implementeed')
    this.show = true
    this.frontSerice.registerPatient(this.registerPatientForm.value).subscribe(
      (res) => {
        if(res.key){
            this.frontSerice.key = res.key
            this.router.navigate(['../loginInPatient'], {relativeTo: this.route})
        }else{
          this.errormsg = res.message
        }
      },
      err => this.errormsg = err,
      () =>this.show = false
    )
  }

}
