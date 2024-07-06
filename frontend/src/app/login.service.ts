import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private csrfUrl = `${environment.apiUrl}/sanctum/csrf-cookie`;
  private loginUrl = `${environment.apiUrl}/api/login`;

  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    // TODO: I think we should run this as soon as they get to the site, check into this
    this.http.get<any>(this.csrfUrl, { withCredentials: true }).subscribe({
      next: (value) => {
        console.log('csrf', value);
      },
    });

    this.http.post<any>(this.loginUrl, {
      email,
      password
    }, { withCredentials: true }).subscribe({
      next: (value) => {
        console.log(value);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}
