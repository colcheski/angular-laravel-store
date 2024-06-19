import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MessageService } from './message.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  message: string = '';
  title = 'frontend';

  constructor(private messageService: MessageService) {}  

  fetchMessage() {
    this.messageService.getMessage().subscribe(
      response => {
        this.message = response.message;
      },
      error => {
        console.error('Error fetching message:', error);
      }
    );
  }
}


