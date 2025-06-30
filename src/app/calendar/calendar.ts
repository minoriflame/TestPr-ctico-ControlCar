// src/app/calendar/calendar.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarModule } from 'angular-calendar';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [
    CommonModule,
    CalendarModule
  ],
  templateUrl: './calendar.html',
  styleUrls: ['./calendar.css']
})
export class Calendar{
}
