import { Component } from '@angular/core';
import { MessageService } from '../message.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-murph',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './murph.component.html',
  styleUrl: './murph.component.css'
})
export class MurphComponent {
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
