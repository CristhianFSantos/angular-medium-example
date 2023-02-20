import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SettingsComponent } from './settings.component';
import { ProfileComponent } from './profile.component';

@Component({
  selector: 'admin',
  standalone: true,
  imports: [CommonModule, RouterModule, SettingsComponent, ProfileComponent],
  template: `
  <settings></settings>
  <profile></profile>
  `,
})
export class AdminComponent {}
