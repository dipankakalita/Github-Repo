import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse} from '@angular/common/http';
import {Observable,throwError,Subject} from 'rxjs';
import {catchError} from 'rxjs/operators';
// import {authKey,login,findUser} from '../interfaces/http-interface';
@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private http: HttpClient) { }

  public repoSubject = new Subject();

  repoData(username: any,public_repos: number): any{
    const data = [username,public_repos];
    this.repoSubject.next(data);
  }

  getUserData(username: any): Observable<any>{
    const ajax = this.http.get<any>('https://api.github.com/users/' + username).pipe(catchError(this.handleError));
    return ajax;
  }

  getRepoData(username: any,page:number): Observable<any> {
    const ajax = this.http.get<any>('https://api.github.com/users/' + username + '/repos?accept=application/vnd.github.v3+json&per_page=10&sort=pushed&direction=desc&page=' + page).pipe(catchError(this.handleError));
    return ajax;
  }

  handleError(error: HttpErrorResponse): Observable<any> {
    let errorMsg = '';
    if(error.error instanceof ErrorEvent) {
      errorMsg = "Network error! Please try again later";
    } else {
      errorMsg = error.error.messages;
    }
    return throwError(errorMsg);
  }

}
 