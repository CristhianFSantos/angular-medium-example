import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoService } from '../services/info.service';

@Component({
  selector: 'user',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button class="generic-button" (click)="sendInfo()">Sendo Info</button>
  `,
})
export class UserComponent {
  constructor(private readonly infoService: InfoService) {}
  sendInfo(): void {
    this.infoService.dataSource$$.next('Jhon Doe');
  }
}
