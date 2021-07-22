import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { FrontEndServiceService } from 'src/app/frontEnd/front-end-service.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  constructor(private frontendservice: FrontEndServiceService) { }
  patients$ = this.frontendservice.getAllPatient().pipe(
    map(res => res.users)
  )

  ngOnInit(): void {
    // this.frontendservice.getAllPatient().subscribe(
    //   res => console.log(res)
    // )
  }

}
