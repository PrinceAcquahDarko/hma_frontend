import { Component, OnInit } from '@angular/core';
import { combineLatest, merge, Subject } from 'rxjs';
import { map, scan, startWith } from 'rxjs/operators';
import { FrontEndServiceService } from 'src/app/frontEnd/front-end-service.service';

@Component({
  selector: 'app-all-patients',
  templateUrl: './all-patients.component.html',
  styleUrls: ['./all-patients.component.css']
})
export class AllPatientsComponent implements OnInit {
  private searchedptn = new Subject<string>();
  insertedSearchedptn$ = this.searchedptn.asObservable();
  private deletedstd = new Subject<string>();
  insertedDeletedstd$ = this.deletedstd.asObservable()

  inputValue = ''
  getActivePatients$ = this.frontendservice.getactivePatient().pipe(
    map(res => res.users)
  )

    staffWithDelete$ = merge(
    this.getActivePatients$,
    this.insertedDeletedstd$
  ).pipe(
    scan((staffs, staff) => this.modifyProducts(staffs, staff))
   
  )
  PatientWithSearch$ =  combineLatest([
    this.staffWithDelete$,
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

  modifyProducts(staffs: any, staff: any): any{

    this.frontendservice.deletePatient(staff).subscribe(
      res => {    
      }
    )   
    let index: number = staffs.findIndex((sts: any)=> sts._id === staff)
        staffs.splice(index, 1)
        return [...staffs];
}


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.inputValue = filterValue;
  
    this.searchedptn.next(filterValue)
  
  
  }


  delete(id: string): void{
    this.deletedstd.next(id)
  }

}
