// app-jobs-main.component.ts
import { Component, OnInit } from '@angular/core';
import { JobPostingService } from '../job-posting.service'; // Import your JobPostingService
import { JobPosting } from '../job-posting.model';

@Component({
  selector: 'app-jobs-main',
  templateUrl: './jobs-main.component.html',
  styleUrls: ['./jobs-main.component.css'],
})
export class JobsMainComponent implements OnInit {
  jobPostings: JobPosting[] = [];
  filteredJobPostings: JobPosting[] = [];

  constructor(private jobPostingService: JobPostingService) {} // Inject the service

  ngOnInit(): void {
    this.getJobPostings();
  }

  getJobPostings(): void {
    this.jobPostingService.getAllJobPostings().subscribe((jobPostings) => {
      this.jobPostings = jobPostings;
      this.filteredJobPostings = jobPostings; // Initialize with all job postings
    });
  }

  onFilterChange(filters: any): void {
    // Apply filter changes to update filteredJobPostings
    console.log("filter changed called");
    this.filteredJobPostings = this.filterJobPostings(filters);
  }

  filterJobPostings(filters: any): JobPosting[] {
    // Implement your filter logic here based on filters
    let filteredPostings: JobPosting[] = this.jobPostings;

    if (filters.jobTitle) {
      filteredPostings = filteredPostings.filter((job) =>
        job.jobTitle.toLowerCase().includes(filters.jobTitle.toLowerCase())
      );
    }

    if (filters.tags) {
      filteredPostings = filteredPostings.filter((job) =>
        job.tags.some((s: string) => filters.tags.includes(s))
      );
    }


    if (filters.city) {
      filteredPostings = filteredPostings.filter((job) =>
        job.city.toLowerCase().includes(filters.city.toLowerCase())
      );
    }

    if (filters.country) {
      filteredPostings = filteredPostings.filter((job) =>
        job.country.toLowerCase().includes(filters.country.toLowerCase())
      );
    }

    

    if (filters.salaryRange) {
      filteredPostings = filteredPostings.filter((job) => 
        job.salaryStart > filters.salaryRange[0],
        console.log(filters.salaryRange[0] + ", " + filters.salaryRange[1])
      );
    }

    // Add more filter conditions as needed
    //console.log("filter changed in main component");

    return filteredPostings;
  }
}
