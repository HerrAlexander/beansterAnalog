import {Component, inject} from '@angular/core';
import { RouteMeta } from '@analogjs/router';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatExpansionModule} from '@angular/material/expansion';
import {CoffeeService} from "../../coffee.service";
import {Observable} from "rxjs";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {Coffee} from "../../models/coffee";
import {RouterLinkWithHref} from "@angular/router";

export const routeMeta: RouteMeta = {
  title: 'Coffee List',
};

@Component({
  selector: 'app-coffee-list',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [MatExpansionModule, AsyncPipe, NgIf, NgForOf, RouterLinkWithHref],
  template: `
    <h2>Coffee Overview</h2>
    <ng-container *ngIf="coffees$ | async as coffees">
      <div *ngFor="let coffee of coffees">
        <div class="container">
          <div>
            <img class="imageTile" [src]="coffee.imageUrl" alt="coffee image">
          </div>
          <div>
            <h3>
              <a [title]="coffee.name + ' details'" [routerLink]="['/coffee', coffee.id]">{{ coffee.name }}</a>
            </h3>
            <p *ngIf="coffee.description">Description: {{ coffee.description }}</p>
          </div>
        </div>
      </div>
    </ng-container>

  `,
  styles: `
    .container {
      display: flex;
      flex-direction: row;
    }

    .imageTile {
      width: 200px;
      height: 200px;
      margin: 10px;
    }`,
})
export default class TestListComponent {
  private coffeeService = inject(CoffeeService);
  public coffees$: Observable<Coffee[]>;

  constructor() {
    this.coffees$ = this.coffeeService.getCoffees();
  }
}
