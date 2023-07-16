import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Category } from '../models/category.model';
import { Filter } from '../models/filter.model';
import { Results } from '../models/results.model';


@Injectable({
  providedIn: 'root'
})

export class DataService {
  constructor(private http: HttpClient) { }

  categorySrc = '/assets/data/category-data.json';
  filterSrc = '/assets/data/filter-data.json';

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.categorySrc);
  }

  getFilters(): Observable<Filter[]> {
    return this.http.get<Filter[]>(this.filterSrc);
  }

  getResults(): Observable<Results> {
    return this.getCategories().pipe(
      map(categories => {
        let categoryObj: any = {};
        categories.forEach(category => {
          category.name = category.name.replace(/\s/g, '');
          categoryObj[category.name] = category;
        });

        return new Results(categoryObj);
      })
    );
  }


}
