import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { NavbarService } from './navbar.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private csrfUrl = `${environment.apiUrl}/sanctum/csrf-cookie`;
  private loginUrl = `${environment.apiUrl}/api/login`;
  private userUrl = `${environment.apiUrl}/api/user`;

  constructor(
    private http: HttpClient,
    private navbarService : NavbarService
  ) {}

  login(email: string, password: string) {
    // TODO: I think we should run this as soon as they get to the site, check into this
    this.http.get<any>(this.csrfUrl, { withCredentials: true }).subscribe({
      next: () => {
        this.http.post<any>(this.loginUrl, {
          email,
          password
        }, { withCredentials: true }).subscribe({
          next: (value) => {
            // navigation service change login to username
            console.log(value);
            this.navbarService.setLoggedInUsername(value.user.name);

            // redirect to home route
          },
          error: (err) => {
            console.error(err);
          }
        });
      },
    });
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
}
