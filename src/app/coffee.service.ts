import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, filter, map, Observable, of} from "rxjs";
import {Coffee} from "./models/coffee";

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {

  constructor() {
  }

  private http = inject(HttpClient);

  public getCoffees(): Observable<Coffee[]> {
    return this.http
      .get<Coffee[]>('/api/v1/coffees')
      .pipe(catchError(() => of([])));
  }

  public getCoffee(id: number): Observable<Coffee | null> {
    return this.getCoffees().pipe(map((coffees) => {
      if (id) {
        return coffees.filter((coffee) => coffee.id === id)[0];
      } else {
        return null;
      }
    }));
  }
}
