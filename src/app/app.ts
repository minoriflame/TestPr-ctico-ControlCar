import { Component } from '@angular/core';
import { Drawer } from './drawer/drawer'; // Asegúrate que esté bien importado

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Drawer],
  template: `
    <app-drawer />
  `
})
export class App {}
