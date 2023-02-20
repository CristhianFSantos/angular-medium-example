import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoService } from '../services/info.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'settings',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <p>Settings Component</p>
    <p>Name: {{ name }}</p>
    <button class="generic-button" [routerLink]="['/home']">Go Home</button>
  `,
})
export class SettingsComponent implements OnInit {
  name: string;

  constructor(private readonly infoService: InfoService) {}
  ngOnInit(): void {
    this.infoService.dataSource$.subscribe((name) => {
      this.name = name;
      console.log(name);
    });
  }
}
