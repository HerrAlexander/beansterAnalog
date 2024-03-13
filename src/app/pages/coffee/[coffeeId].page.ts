import { Component, inject, OnInit } from '@angular/core';
import {AsyncPipe, CurrencyPipe, NgIf} from '@angular/common';
import { injectActivatedRoute } from '@analogjs/router';
import { Observable} from 'rxjs';

import {Coffee} from "../../models/coffee";
import {CoffeeService} from "../../coffee.service";

@Component({
  selector: 'app-coffee-detail',
  standalone: true,
  imports: [NgIf, CurrencyPipe, AsyncPipe],
  template: `
    <h2>Coffee Detail</h2>

    <div *ngIf="coffee$ | async as coffee">
      <h3>{{ coffee.name }}</h3>
      <img [src]="coffee.imageUrl" style="width: 400px; height: 400px;" alt="coffee image">
      <h4>{{ coffee.price | currency:'EUR' }}</h4>
      <p>{{ coffee.description }}</p>
      <div>
        <button type="button" (click)="rate(coffee)">Rate</button>
      </div>
    </div>
  `,
})
export default class CoffeeDetailsComponent implements OnInit {
  private route = injectActivatedRoute();
  private coffeeService = inject(CoffeeService);
  public coffee$: Observable<Coffee>;


  ngOnInit() {
    const routeParams = this.route.parent!.snapshot!.paramMap;
    const coffeeIdFromRoute = Number(routeParams.get('coffeeId'));
    this.coffee$ = this.coffeeService.getCoffee(coffeeIdFromRoute);
  }

  rate(coffee: Coffee) {
    window.alert(`Your product '${coffee.name}' has been added to the cart!`);
  }
}
