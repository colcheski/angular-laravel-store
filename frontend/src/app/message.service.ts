import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private apiUrl = `${environment.apiUrl}/message`;

  constructor(private http: HttpClient) {}

  getMessage(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
