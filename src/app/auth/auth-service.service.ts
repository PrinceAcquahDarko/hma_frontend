import { Injectable } from '@angular/core';
import { ILogin, IRegister, IRespons } from './interface';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:3000'

  registerUser(data: IRegister): Observable<any>{
    return this.http.post<IRegister>(this.url + '/register', data)
      .pipe(
        catchError(this.handleError)
      )
  }

  loginUser(data: ILogin): Observable<any>{
    return this.http.post<ILogin>(this.url + '/login', data)
    .pipe(
      catchError(this.handleError)
    )
  }

  getUser(): Observable<any> {
    return this.http.get(this.url + '/register').pipe(catchError(this.handleError))
  }

  updateUser(data: IRegister): Observable<any> {
    return this.http.put(this.url + '/register', data).pipe(catchError(this.handleError))
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
