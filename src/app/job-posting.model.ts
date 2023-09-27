export interface JobPosting {
    jobTitle: string;
    city: string;
    country: string;
    salaryStart: number;
    salaryEnd: number;
    jobDescription: string;
    tags: string[]; // An array of tags (e.g., job technologies)
    officeLocation: OfficeLocation; // Enum for office location (Office, Remote, Hybrid)
    role: Role; // Enum for job role (Junior, Mid, Senior, Lead)
    isFullTime: boolean; // Boolean indicating full-time or part-time
  }
  
  export enum OfficeLocation {
    Office = 'Office',
    Remote = 'Remote',
    Hybrid = 'Hybrid',
  }
  
  export enum Role {
    Junior = 'Junior',
    Mid = 'Mid',
    Senior = 'Senior',
    Lead = 'Lead',
  }