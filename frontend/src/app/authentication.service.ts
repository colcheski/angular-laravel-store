import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserStateService } from './user-state.service';
import { catchError, Observable, switchMap, tap, throwError } from 'rxjs';
import { API_URLS } from './constants/api-urls';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(
    private http: HttpClient,
    private userStateService: UserStateService
  ) {}

  login(email: string, password: string): Observable<any> {
    return this.getCSRFToken().pipe(
      switchMap(() => this.http.post<any>(
        API_URLS.login,
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
    return this.http.get<any>(API_URLS.csrf, { withCredentials: true });
  }

  user() {
    this.http.get<any>(API_URLS.user, { withCredentials: true }).subscribe({
      next: (value) => {
        console.log('User', value);
      },
      error: (err) => {
        console.error('Unauthenticated', err);
      }
    })
  }

  logout() {
    this.http.post<any>(API_URLS.logout, {}, { withCredentials: true }).subscribe({
      next: (value) => {
        this.userStateService.setUsername(null);
      }
    })
  }
}
