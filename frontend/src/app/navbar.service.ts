import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  constructor(public authenticationService: AuthenticationService) { }

  private loggedInUsername: string | null = null;

  setLoggedInUsername(username: string) {
    this.loggedInUsername = username;
  }

  getLoggedInUsername(): string | null {
    return this.loggedInUsername;
  }
}
