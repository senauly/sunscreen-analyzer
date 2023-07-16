import { Injectable } from '@angular/core';
import { Results } from '../models/results.model';

@Injectable({
  providedIn: 'root'
})

export class ResultsService {
  private resultsKey = 'results';
  private ingredientsKey = 'ingredients';
  private results!: Results;

  constructor() {}

  setResults(results: Results) {
    this.results = results;
    localStorage.setItem(this.resultsKey, JSON.stringify(results));
  }

  getResults(): Results {
    if (this.results) {
      return this.results;
    }

    const results = localStorage.getItem(this.resultsKey);
    if (results) {
      this.results = new Results(JSON.parse(results));
    }

    return this.results;
  }

  setIngredients(ingredients: string) {
    localStorage.setItem(this.ingredientsKey, ingredients);
  }

  getIngredients(): string | null {
    return localStorage.getItem(this.ingredientsKey);
  }
}
