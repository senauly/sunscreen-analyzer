import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ResultsService } from '../../services/results.service';
import { DataService } from '../../services/data.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-input-page',
  templateUrl: './input-page.component.html',
  styleUrls: ['./input-page.component.scss']
})
export class InputPageComponent {
  title = 'Sunscreen Filter Analyzer';
  filters$ = this.dataService.getFilters();
  results$ = this.dataService.getResults();
  ingredients = this.resultsService.getIngredients() || '';
  
  constructor(
    private resultsService: ResultsService,
    private dataService: DataService,
    private router: Router
  ) {}


  onSubmit() {
    this.resultsService.setIngredients(this.ingredients);
    forkJoin([this.filters$, this.results$]).subscribe(([filters, results]) => {
      const ingredients = this.ingredients.split(',');

      for (const ingredient of ingredients) {
        const filter = filters.find(filter => filter.INCI === ingredient.trim());

        if (filter) {
          for (const property in filter) {
            if (filter[property] && property.startsWith('is')) {
              const resultType = property.slice(2);
              results[`add${resultType}`](filter.name);
            }
          }
        }
      }

      results.isHybrid();
      
      this.resultsService.setResults(results);
      this.router.navigate(['/results']);
    });
  }

}
