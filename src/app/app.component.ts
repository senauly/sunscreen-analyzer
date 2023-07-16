import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Sunscreen Filter Analyzer';
  currentYear!: number;

  ngOnInit() {
    this.currentYear = new Date().getFullYear();
  }
}
