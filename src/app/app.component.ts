import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor() {}

  onFilterChanged(filters: any): void {
    // Apply filter changes to update filteredJobPostings
    console.log("filter changed in app component");
  }
  
}
