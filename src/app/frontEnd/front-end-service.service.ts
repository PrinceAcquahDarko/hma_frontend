import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IInitialize, IPatientRegister } from './frontEndInterface';
import {environment} from "../../environments/environment.prod"


@Injectable({
  providedIn: 'root'
})
export class FrontEndServiceService {
  url = environment.url
  constructor(private http: HttpClient) { }

  key: string = ''
  user: any;
  currentUser: string = ''
  loggedInPatient: string = '';

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

  deleteStaff(id: string): Observable<any>{
    
    return this.http.delete(this.url + '/register/delete' + '?id=' + id).pipe(
      catchError(this.handleError)
    )
  }

  deletePatient(id: string): Observable<any>{
    
    return this.http.delete(this.url + '/patient/single' + '?id=' + id).pipe(
      catchError(this.handleError)
    )
  }


  getPatient(data?: string): Observable<any>{
      let user = JSON.parse(localStorage.getItem('currentUser')!);
      if(data){
        this.currentUser = data
      }
      if(user){
        this.currentUser = user
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

  getAllPatient():Observable<any>{
    return this.http.get(this.url + '/details').pipe(
      catchError(this.handleError)
    )
    
  }

  getactivePatient():Observable<any>{
    return this.http.get(this.url + '/patient').pipe(
      catchError(this.handleError)
    )
    
  }

  getLoggedInPatient(key: string):Observable<any>{
    return this.http.get(this.url + '/patient/single'+ '?key=' + key).pipe(
      catchError(this.handleError)
    )
  }

  
  getAllStaff():Observable<any>{
    return this.http.get(this.url + '/register/all').pipe(
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
