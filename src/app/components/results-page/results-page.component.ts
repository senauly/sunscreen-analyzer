import { Component } from '@angular/core';
import { ResultsService } from '../../services/results.service';

@Component({
  selector: 'app-results-page',
  templateUrl: './results-page.component.html',
  styleUrls: ['./results-page.component.scss']
})

export class ResultsPageComponent {
  title = 'Sunscreen Filter Analyzer - Results';
  results = this.resultsService.getResults();
  categories = this.results.getCategoryNames();

  constructor(public resultsService: ResultsService) {}

  ngOnInit(): void {
    //if the results are empty, redirect to the home page
    if (this.results == null) {
      window.location.href = '/';
    }
  }
}

