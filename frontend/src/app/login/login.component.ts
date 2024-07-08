import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AuthenticationService } from '../authentication.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatButtonModule, FormsModule, MatProgressSpinnerModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private authenticationService: AuthenticationService) {}

  email = '';
  password = '';
  isLoading = false;

  login() {
    this.isLoading = true;
    this.authenticationService.login(this.email, this.password).subscribe({
      next: () => {
        this.isLoading = false;
      },
      error: () => {
        // TODO: Flash a message to the screen
        this.isLoading = false;
      }
    });
  }

  user() {
    this.authenticationService.user();
  }
}
