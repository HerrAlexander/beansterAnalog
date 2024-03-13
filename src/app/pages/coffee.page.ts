import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-test-list',
  standalone: true,
  imports: [RouterOutlet],
  styles: `
    div {
      display: flex;
      justify-content: center;
      width: 1500px;
    }
  `,
  template: `
    <div>
      <img alt="Analog Logo" style="width: 300px;" class="logo analog" src="/logo.png"/>
    </div>
    <router-outlet></router-outlet>
  `,
})
export default class ProductDetailsComponent {
}
