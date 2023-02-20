import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './components/settings.component';
import { ProfileComponent } from './components/profile.component';
import { AdminComponent } from './components/admin.component';

const ROUTES: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
    component: AdminComponent,
  },
  {
    path: 'admin',
    loadComponent: () =>
      import('./components/admin.component').then((m) => m.AdminComponent),
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./components/home.component').then((m) => m.HomeComponent),
  },
];

@Component({
  selector: 'my-app',
  standalone: true,
  styleUrls: ['main.css'],
  imports: [CommonModule, RouterModule, SettingsComponent, ProfileComponent],
  template: `
    <router-outlet></router-outlet>
  `,
})
export class App {}

bootstrapApplication(App, {
  providers: [provideRouter(ROUTES)],
});
