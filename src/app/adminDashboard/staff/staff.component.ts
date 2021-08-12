import { Component, OnInit } from '@angular/core';
import { combineLatest, Subject } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { FrontEndServiceService } from 'src/app/frontEnd/front-end-service.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {
  inputValue = ''
  private searchedStd = new Subject<string>();
  insertedSearchedStd$ = this.searchedStd.asObservable()

  staffs$ = this.frontendservice.getAllStaff().pipe(
    map(res => res.users.sort(this.sortByName))
  )

  displayedColumns: string[] = ['image', 'firstname', 'lastname', 'position', 'email', 'delete'];
  constructor(private frontendservice: FrontEndServiceService) { }

  ngOnInit(): void {
  
  }

  sortByName(a: any, b: any){
    const nameA = a.position.toLocaleUpperCase();
    const nameB = b.position.toLocaleUpperCase();
    return (nameA < nameB) ? -1 : (nameA > nameB) ? 1 : 0;
  }

  staffWithSearch$ =  combineLatest([
    this.staffs$,
    this.insertedSearchedStd$.pipe(
      startWith('')
    )

  ])
  .pipe(
    map(([staffs, staff]) => staffs.filter((i: { firstname: string; }) => staff ?  i.firstname === staff.trim() : true) )
  
  )

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.inputValue = filterValue;
  
    this.searchedStd.next(filterValue)
  
  
  }



}
