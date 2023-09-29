import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ShipComponent } from '../ship/ship.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
  imports: [CommonModule, ShipComponent],
})
export class HeaderComponent {}
