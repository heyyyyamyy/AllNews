
export interface Company {
  id: string;
  name: string;
  industry: string;
  location: string;
  website: string;
  logo: string;
  shortDescription: string;
  description: string;
  rating: number;
  reviewCount: number;
  salaryCount: number;
  isHiring: boolean;
  size: string; // e.g., "1000+ employees"
  founded: number;
  benefits: string[];
}

export interface Review {
  id: string;
  companyId: string;
  role: string;
  title: string;
  rating: number;
  pros: string;
  cons: string;
  date: string;
  helpfulCount: number;
  author?: string;
  tenure?: string;
}

export interface Salary {
  id: string;
  companyId: string;
  role: string;
  min: number;
  max: number;
  avg: number;
  period: 'yearly' | 'hourly';
}

export interface Job {
  id: string;
  companyId: string;
  title: string;
  type: string; // Full-time, Part-time
  location: string;
  postedDate: string;
  salaryRange?: string;
}

export type SortOption = 'rating' | 'reviews' | 'salary';

export interface FilterState {
  industry: string[];
  location: string[];
  minRating: number;
  hiringOnly: boolean;
}
