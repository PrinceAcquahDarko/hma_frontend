import { Component, OnInit } from '@angular/core';
import { combineLatest, Subject } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { FrontEndServiceService } from 'src/app/frontEnd/front-end-service.service';

@Component({
  selector: 'app-all-patients',
  templateUrl: './all-patients.component.html',
  styleUrls: ['./all-patients.component.css']
})
export class AllPatientsComponent implements OnInit {
  private searchedptn = new Subject<string>();
  insertedSearchedptn$ = this.searchedptn.asObservable();

  inputValue = ''
  getActivePatients$ = this.frontendservice.getactivePatient().pipe(
    map(res => res.users)
  )

  
  PatientWithSearch$ =  combineLatest([
    this.getActivePatients$,
    this.insertedSearchedptn$.pipe(
      startWith('')
    )

  ])
  .pipe(
    map(([staffs, staff]) => staffs.filter((i: { firstname: string; }) => staff ?  i.firstname === staff.trim() : true) )
  
  )

  displayedColumns: string[] = ['image', 'firstname', 'lastname', 'contact', 'address', 'delete'];

  constructor(private frontendservice: FrontEndServiceService) { }

  ngOnInit(): void {
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.inputValue = filterValue;
  
    this.searchedptn.next(filterValue)
  
  
  }

}
