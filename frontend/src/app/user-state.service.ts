import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserStateService {
  private usernameSubject = new BehaviorSubject<string | null>(null);

  constructor() { }

  setUsername(username: string | null): void {
    this.usernameSubject.next(username);
  }

  getUsername(): Observable<string | null> {
    return this.usernameSubject.asObservable();
  }
}
