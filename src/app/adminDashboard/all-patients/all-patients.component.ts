import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { FrontEndServiceService } from 'src/app/frontEnd/front-end-service.service';

@Component({
  selector: 'app-all-patients',
  templateUrl: './all-patients.component.html',
  styleUrls: ['./all-patients.component.css']
})
export class AllPatientsComponent implements OnInit {
  getActivePatients$ = this.frontendservice.getactivePatient().pipe(
    map(res => res.users)
  )
  constructor(private frontendservice: FrontEndServiceService) { }

  ngOnInit(): void {
  }

}
