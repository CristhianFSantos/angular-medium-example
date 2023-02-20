import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <p>HomeComponent</p>
    <button class="generic-button" [routerLink]="['/admin']">Go Settings</button>
    `,
})
export class HomeComponent {}
