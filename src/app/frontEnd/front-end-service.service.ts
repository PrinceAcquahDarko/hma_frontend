import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { INurse } from '../shared/patientInfo.interface';
import { IInitialize, IPatientRegister } from './frontEndInterface';

@Injectable({
  providedIn: 'root'
})
export class FrontEndServiceService {
  url = "http://localhost:3000"
  constructor(private http: HttpClient) { }

  key: string = ''
  user: any;
  currentUser: string = ''

  registerPatient(data: IPatientRegister): Observable<any>{
      return this.http.post<IPatientRegister>(this.url + '/patient', data ).pipe(
        catchError(this.handleError)
      )
  }


  initializePatient(data: IInitialize): Observable<any>{
    return this.http.post<IInitialize>(this.url + '/details', data).pipe(
      catchError(this.handleError)
    )
  }

  getPatient(data?: string): Observable<any>{
      if(data){
        this.currentUser = data
      }
      return this.http.get(this.url +'/details/patient' + '?key=' + this.currentUser ).pipe(
        catchError(this.handleError)
      )

  }

  populatePatientData(data:any): Observable<any>{
    return this.http.put(this.url + '/details/patient' + '?key=' + this.currentUser, data).pipe(
      catchError(this.handleError)
    )
  }

  handleError(err:HttpErrorResponse){
    let message = '';

    if(err.error instanceof ErrorEvent){
      message = `an error occured: ${err.error.message}`
    }
    else{
      message =  `Oops an error occured try again later`
    }

    return throwError(message)


  }
}
