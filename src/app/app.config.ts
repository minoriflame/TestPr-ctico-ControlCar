import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { calendarConfig } from './calendar.config';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    ...(calendarConfig.providers ?? []) 
  ]
};
