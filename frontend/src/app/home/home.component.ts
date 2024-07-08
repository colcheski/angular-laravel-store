import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(public authenticationService: AuthenticationService) {}

  user() {
    this.authenticationService.user();
  }
}
