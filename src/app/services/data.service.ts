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
  constructor(private http: HttpClient) {}

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`/assets/data/category-data.json`);
  }

  getFilters(): Observable<Filter[]> {
    return this.http.get<Filter[]>(`/assets/data/filter-data.json`);
  }

  getResults(): Observable<Results> {
    return this.getCategories().pipe(
      map(categories => {
  
        const hybrid = categories.find(c => c.name === 'Hybrid');
        const mineral = categories.find(c => c.name === 'Mineral');
        const chemical = categories.find(c => c.name === 'Chemical');
        const UVA1 = categories.find(c => c.name === 'UVA1');
        const UVA2 = categories.find(c => c.name === 'UVA2');
        const UVB = categories.find(c => c.name === 'UVB');
        const UVC = categories.find(c => c.name === 'UVC');
  
        if (!hybrid || !mineral || !chemical || !UVA1 || !UVA2 || !UVB || !UVC) {
          throw new Error('One or more required categories not found');
        }
  
        return new Results(hybrid, mineral, chemical, UVA1, UVA2, UVB, UVC);
      })
    );
  }
  

}
