import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { UserStateService } from './user-state.service';
import { catchError, Observable, switchMap, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private csrfUrl = `${environment.apiUrl}/sanctum/csrf-cookie`;
  private loginUrl = `${environment.apiUrl}/api/login`;
  private logoutUrl = `${environment.apiUrl}/api/logout`;
  private userUrl = `${environment.apiUrl}/api/user`;

  constructor(
    private http: HttpClient,
    private userStateService: UserStateService
  ) {}

  // loginOld(email: string, password: string): Observable<any> {
  //   // TODO: I think we should run this as soon as they get to the site, check into this
  //   this.http.get<any>(this.csrfUrl, { withCredentials: true }).subscribe({
  //     next: () => {
  //       this.http.post<any>(this.loginUrl, {
  //         email,
  //         password
  //       }, { withCredentials: true }).subscribe({
  //         next: (value) => {
  //           // navigation service change login to username
  //           this.userStateService.setUsername(value.user.name);

  //           // redirect to home route
  //         },
  //         error: (err) => {
  //           console.error(err);
  //         }
  //       });
  //     },
  //   });
  // }

  login(email: string, password: string): Observable<any> {
    return this.getCSRFToken().pipe(
      switchMap(() => this.http.post<any>(
        this.loginUrl,
        { email, password },
        { withCredentials: true })
      ),
      tap(response => {
        this.userStateService.setUsername(response.user.name);
      }),
      catchError(err => {
        console.error(err);
        return throwError(() => err);
      })
    )
  }

  // TODO: I think we should run this as soon as they get to the site, check into this
  private getCSRFToken(): Observable<any> {
    return this.http.get<any>(this.csrfUrl, { withCredentials: true });
  }

  user() {
    this.http.get<any>(this.userUrl, { withCredentials: true }).subscribe({
      next: (value) => {
        console.log('User', value);
      },
      error: (err) => {
        console.error('Unauthenticated', err);
      }
    })
  }

  logout() {
    this.http.post<any>(this.logoutUrl, {}, { withCredentials: true }).subscribe({
      next: (value) => {
        this.userStateService.setUsername(null);
      }
    })
  }
}
