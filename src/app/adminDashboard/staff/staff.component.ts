import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { FrontEndServiceService } from 'src/app/frontEnd/front-end-service.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {
  staffs$ = this.frontendservice.getAllStaff().pipe(
    map(res => res.users.sort(this.sortByName))
  )
  constructor(private frontendservice: FrontEndServiceService) { }

  ngOnInit(): void {
  
  }

  sortByName(a: any, b: any){
    const nameA = a.position.toLocaleUpperCase();
    const nameB = b.position.toLocaleUpperCase();
    return (nameA < nameB) ? -1 : (nameA > nameB) ? 1 : 0;
  }

}
