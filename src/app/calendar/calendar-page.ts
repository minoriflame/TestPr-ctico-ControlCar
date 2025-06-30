import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Calendar } from './calendar';
import { Drawer } from '../drawer/drawer';

@Component({
  selector: 'app-calendar-page',
  standalone: true,
  imports: [CommonModule, Calendar, Drawer],
  template: `
    <div class="d-flex" style="height: 100vh;">
      <div class="flex-grow-1 border-end">
        <app-calendar></app-calendar>
      </div>
      <div style="width: 400px;">
        <app-drawer></app-drawer>
      </div>
    </div>
  `
})
export class CalendarPage {}
