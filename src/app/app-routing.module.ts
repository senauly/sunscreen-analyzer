import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultsPageComponent } from './components/results-page/results-page.component';
import { InputPageComponent } from './components/input-page/input-page.component';

const routes: Routes = [
  { path: '', component: InputPageComponent },
  { path: 'results', component: ResultsPageComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
