import { Injectable } from '@angular/core';
import { Results } from '../models/results.model';

@Injectable({
  providedIn: 'root'
})

export class ResultsService {
  results!: Results;

  constructor() {}

  setResults(results: Results) {
    this.results = results;
  }
}


