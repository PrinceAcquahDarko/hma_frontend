import { Component, OnInit } from '@angular/core';
import { combineLatest, merge, Subject } from 'rxjs';
import { map, scan, startWith, tap } from 'rxjs/operators';
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

  private deletedstd = new Subject<string>();
  insertedDeletedstd$ = this.deletedstd.asObservable()

  staffs$ = this.frontendservice.getAllStaff().pipe(
    map(res => res.users.sort(this.sortByName))
  )

  staffWithDelete$ = merge(
    this.staffs$,
    this.insertedDeletedstd$
  ).pipe(
    scan((staffs, staff) => this.modifyProducts(staffs, staff))
   
  )

  displayedColumns: string[] = ['image', 'firstname', 'lastname', 'position', 'email', 'delete'];
  constructor(private frontendservice: FrontEndServiceService) { }

  ngOnInit(): void {
  
  }

  modifyProducts(staffs: any, staff: any): any{

      this.frontendservice.deleteStaff(staff).subscribe(
        res => { 
          
        }
      )   
      let index: number = staffs.findIndex((sts: any)=> sts._id === staff)
          staffs.splice(index, 1)
          return [...staffs];
  }

  sortByName(a: any, b: any){
    const nameA = a.position.toLocaleUpperCase();
    const nameB = b.position.toLocaleUpperCase();
    return (nameA < nameB) ? -1 : (nameA > nameB) ? 1 : 0;
  }

  

  staffWithSearch$ =  combineLatest([
    this.staffWithDelete$,
    this.insertedSearchedStd$.pipe(
      startWith('')
    )
  ])
  .pipe(
    map(([staffs, staff]) => staffs.filter((i: any) => staff ?  i.firstname === staff.trim() : true) ) 
  )

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.inputValue = filterValue;
    this.searchedStd.next(filterValue)

  }


  delete(id: string): void{
    this.deletedstd.next(id)
  }



}
