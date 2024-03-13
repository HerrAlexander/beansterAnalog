import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// @ts-ignore
import NavComponent from './components/nav.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, NavComponent],
  template: `
    <div style="display: flex; flex-direction: column; height: 100%; margin-left: 200px;">
      <app-nav></app-nav>
      <div class="container">
        <router-outlet></router-outlet>
      </div>
    </div>  `,
})
export class AppComponent {}
