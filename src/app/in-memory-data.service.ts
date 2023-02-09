import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Dekku' },
      { id: 2, name: 'Shoto' },
      { id: 3, name: 'Katchan' },
      { id: 4, name: 'Uravité' },
      { id: 5, name: 'Ingenium' },
      { id: 6, name: 'Red Riot' },
      { id: 7, name: 'Endeavor' },
      { id: 8, name: 'All Might' },
      { id: 9, name: 'Hawks' },
      { id: 10, name: 'Beast Jeanist' },
    ];
    return { heroes };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0
      ? Math.max(...heroes.map((hero) => hero.id)) + 1
      : 11;
  }
}
