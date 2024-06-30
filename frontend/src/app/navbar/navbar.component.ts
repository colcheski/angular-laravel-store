import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { environment } from '../../environments/environment';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatToolbarModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private http: HttpClient) {}

  testLogin() {
    console.log("I'm testing LOGIN!");
    this.http.get<any>(`${environment.apiUrl}/sanctum/csrf-cookie`, { withCredentials: true }).subscribe({
      next: (value) => {
        console.log(value);
      },
    });
  }
}
