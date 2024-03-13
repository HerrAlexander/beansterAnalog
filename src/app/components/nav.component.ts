import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink],
  template: `
    <nav>
      <a routerLink="/">Home</a> |
      <a routerLink="/coffee">Coffee</a> |
      <a routerLink="/blog">Blog</a> |
      <a routerLink="/material">Material Example</a> |
      <a routerLink="/about">About</a> |
    </nav>
  `,
})
export default class NavComponent {}
