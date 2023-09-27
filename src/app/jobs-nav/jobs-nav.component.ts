import { Component, EventEmitter, Output } from '@angular/core';
import { JobPostingService } from '../job-posting.service'; // Import your JobPostingService
import {ThemePalette} from '@angular/material/core';
import { CountryAndCity } from '../countries-cities.model';

@Component({
  selector: 'app-jobs-nav',
  templateUrl: './jobs-nav.component.html',
  styleUrls: ['./jobs-nav.component.css']
})
export class JobsNavComponent {
  public filter: any = {
    salaryRange: [0,100000],
  };

  constructor(private jobPostingService: JobPostingService) {} // Inject the service

  jobTechnologies: string[] = [];
  selectedTechnologies: string[] = [];
  countriesAndCities: CountryAndCity[] = [];

    ngOnInit(): void {
    this.getJobTechnologies();
    this.getCountryAndCities();
  }

  getJobTechnologies(): void {
    this.jobPostingService.getAllJobTechnologies().subscribe((jobTechnologies) => {
      this.jobTechnologies = jobTechnologies;
    });
  }

  getCountryAndCities(): void {
    this.jobPostingService.getCountriesAndCities().subscribe((countriesAndCities) => {
      this.countriesAndCities = countriesAndCities;
    });
  }

  formatLabel(value: number): string {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return `${value}`;
  }

  @Output() applyFiltersEvent = new EventEmitter<any>();

  applyFilters() {
    this.applyFiltersEvent.emit(this.filter); // Pass the filter object
  }

}