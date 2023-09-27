// job-posting.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JobPosting } from './job-posting.model';
import { CountryAndCity } from './countries-cities.model';

@Injectable({
  providedIn: 'root'
})
export class JobPostingService {
  private apiUrl = 'http://localhost:3000/api'; // Replace with your API endpoint

  constructor(private http: HttpClient) {}

  // Fetch all job postings
  getAllJobPostings(): Observable<JobPosting[]> {
    return this.http.get<JobPosting[]>(`${this.apiUrl}/getAll`);
  }

  // Get job postings based on filters
  getFilteredJobs(filters: any): Observable<JobPosting[]> {
    return this.http.post<JobPosting[]>(`${this.apiUrl}/searchJob`, filters);
  }

  getAllJobTechnologies(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/getAllJobTechnologies`);  
  }

  getCountriesAndCities(): Observable<CountryAndCity[]> {
    return this.http.get<CountryAndCity[]>(`${this.apiUrl}/getCountriesAndCities`);  
  }
}