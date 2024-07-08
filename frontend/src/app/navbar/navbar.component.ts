import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { UserStateService } from '../user-state.service';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatButtonModule, RouterLink, MatMenuModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  username: string | null = null;

  constructor(
    public userStateService: UserStateService,
    public authenticationService: AuthenticationService
  ) {}

  ngOnInit() {
    this.userStateService.getUsername().subscribe(username => {
      this.username = username;
    });
  }
}
