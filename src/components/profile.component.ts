import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserComponent } from './user.component';

@Component({
  selector: 'profile',
  standalone: true,
  imports: [CommonModule, RouterModule, UserComponent],
  template: `
  <div class="profile-container">
    <p>Profile Container</p>
    <user></user>
  </div>`,
})
export class ProfileComponent {}
