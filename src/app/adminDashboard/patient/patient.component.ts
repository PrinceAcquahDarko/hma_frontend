import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { combineLatest,Subject } from 'rxjs';
import {  map, startWith, take } from 'rxjs/operators';
import { FrontEndServiceService } from 'src/app/frontEnd/front-end-service.service';
import { PatientDetailsComponent } from '../patient-details/patient-details.component';
import {trigger, style, animate, transition} from "@angular/animations"


@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css'],
  animations: [
    trigger('fadeSlideInOut', [
      transition(':enter', [
        style({
          opacity: 0, transform: 'translateY(10px)'
        }),
        animate('1000ms', style({opacity:0.4,  transform : 'translateY(0px)'}))
      ]),
      transition(':leave', [
        animate('500ms', style({opacity: 0, transform: 'translateY(10px)'}))
      ])
    ])
  ]
})
export class PatientComponent implements OnInit {

  constructor(private frontendservice: FrontEndServiceService, public dialog: MatDialog) { }
  inputValue: string = ''
  private searchedptn = new Subject<string>();
  insertedSearchedptn$ = this.searchedptn.asObservable();

  patients$ = this.frontendservice.getAllPatient().pipe(
    map(res => res.users)
  )

  PatientWithSearch$ =  combineLatest([
    this.patients$,
    this.insertedSearchedptn$

  ])
  .pipe(
    map(([staffs, staff]) => staffs.filter((i: { key: string; }) => staff ?  i.key === staff.trim() : true) )
  
  )

  ngOnInit(): void {

  }


  openDialog(patient: any): void{
    const dialogRef = this.dialog.open(PatientDetailsComponent, {
      width: '90%',
      height: '90%',
      data:{ patient}
      // disableClose: true
  
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);

    });
    }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.inputValue = filterValue;
  
    this.searchedptn.next(filterValue)
  
  
  }

}
