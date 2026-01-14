import { Company, Review, Salary, Job } from './types';

// --- Static Company Data ---
// Note: reviewCount and salaryCount will be updated dynamically below based on generated data.
const BASE_COMPANIES: Company[] = [
  {
    id: '1',
    name: 'Zenthera Groups',
    industry: 'Energy & Industrial Solutions',
    location: 'Houston, USA',
    website: 'https://zentheragroups.example.com',
    logo: '',
    shortDescription: 'A global leader in sustainable energy, industrial infrastructure, and advanced manufacturing.',
    description: 'Zenthera Groups is a diversified multinational conglomerate headquartered in Houston, Texas. We specialize in delivering cutting-edge solutions across energy, industrial construction, and advanced manufacturing sectors. With a commitment to sustainability and innovation, Zenthera Groups drives progress by integrating technology with industrial expertise to solve complex global challenges.',
    rating: 4.4,
    reviewCount: 0, 
    salaryCount: 0,
    isHiring: true,
    size: '5,000 - 10,000 Employees',
    founded: 1995,
    benefits: ['401(k) Matching', 'Comprehensive Health', 'Relocation Assistance', 'Global Rotations']
  },
  {
    id: '2',
    name: 'TechNova Solutions',
    industry: 'Technology',
    location: 'San Francisco, CA',
    website: 'https://technova.example.com',
    logo: '',
    shortDescription: 'Innovating the future of cloud computing and AI services.',
    description: 'TechNova is at the forefront of the AI revolution, providing enterprise-grade cloud solutions to Fortune 500 companies.',
    rating: 4.7,
    reviewCount: 0,
    salaryCount: 0,
    isHiring: true,
    size: '10,000+ Employees',
    founded: 2010,
    benefits: ['Unlimited PTO', 'Stock Options', 'Free Food', 'Wellness Stipend']
  },
  {
    id: '3',
    name: 'GreenLeaf Health',
    industry: 'Healthcare',
    location: 'Boston, MA',
    website: 'https://greenleaf.example.com',
    logo: '',
    shortDescription: 'Patient-first healthcare network spanning the Northeast.',
    description: 'A network of hospitals and clinics dedicated to providing accessible, high-quality care to communities across Massachusetts and beyond.',
    rating: 3.8,
    reviewCount: 0,
    salaryCount: 0,
    isHiring: true,
    size: '5,000 - 10,000 Employees',
    founded: 1995,
    benefits: ['Health Insurance', 'Tuition Reimbursement', 'Childcare Support']
  },
  {
    id: '4',
    name: 'Apex Financial',
    industry: 'Finance',
    location: 'Chicago, IL',
    website: 'https://apexfin.example.com',
    logo: '',
    shortDescription: 'Global investment banking and wealth management services.',
    description: 'Apex Financial serves individuals and corporations with tailored financial advice, wealth management strategies, and secure banking services.',
    rating: 4.0,
    reviewCount: 0,
    salaryCount: 0,
    isHiring: false,
    size: '1,000 - 5,000 Employees',
    founded: 1988,
    benefits: ['Performance Bonuses', 'Retirement Plans', 'Professional Development']
  },
  {
    id: '5',
    name: 'Solaris Energy',
    industry: 'Energy & Utilities',
    location: 'Austin, TX',
    website: 'https://solaris.example.com',
    logo: '',
    shortDescription: 'Renewable energy solutions for a brighter tomorrow.',
    description: 'Solaris Energy is dedicated to making solar power accessible and affordable for homeowners and businesses throughout the Sun Belt.',
    rating: 4.5,
    reviewCount: 0,
    salaryCount: 0,
    isHiring: true,
    size: '500 - 1,000 Employees',
    founded: 2015,
    benefits: ['Stock Options', 'Flexible Schedule', 'Green Commute Stipend']
  },
  {
    id: '6',
    name: 'Urban Retail Group',
    industry: 'Retail',
    location: 'Seattle, WA',
    website: 'https://urbanretail.example.com',
    logo: '',
    shortDescription: 'Premium lifestyle brands for the modern consumer.',
    description: 'Managing a portfolio of high-end lifestyle brands, Urban Retail Group focuses on customer experience and omni-channel excellence.',
    rating: 3.5,
    reviewCount: 0,
    salaryCount: 0,
    isHiring: true,
    size: '10,000+ Employees',
    founded: 2001,
    benefits: ['Store Discounts', 'Health Insurance', 'Flexible Shifts']
  },
  {
    id: '7',
    name: 'Skyline Logistics',
    industry: 'Transportation',
    location: 'Atlanta, GA',
    website: 'https://skyline.example.com',
    logo: '',
    shortDescription: 'Efficient global shipping and supply chain management.',
    description: 'Skyline Logistics connects businesses to the world through air, sea, and land freight solutions with real-time tracking.',
    rating: 3.9,
    reviewCount: 0,
    salaryCount: 0,
    isHiring: false,
    size: '1,000 - 5,000 Employees',
    founded: 1999,
    benefits: ['Travel Perks', 'Health Savings Account', 'Pension Plan']
  },
  {
    id: '8',
    name: 'BlueWave Media',
    industry: 'Media & Entertainment',
    location: 'Los Angeles, CA',
    website: 'https://bluewave.example.com',
    logo: '',
    shortDescription: 'Creating content that inspires and entertains.',
    description: 'An entertainment powerhouse producing award-winning television, film, and digital content for global audiences.',
    rating: 4.1,
    reviewCount: 0,
    salaryCount: 0,
    isHiring: true,
    size: '500 - 1,000 Employees',
    founded: 2008,
    benefits: ['Creative Environment', 'Free Screenings', 'Catered Lunches']
  }
];

// --- Helpers for Data Generation ---

const ROLES = [
  'Software Engineer', 'Senior Project Manager', 'Product Manager', 'Data Analyst', 
  'Sales Associate', 'Customer Success Manager', 'HR Specialist', 'Marketing Director',
  'Account Executive', 'DevOps Engineer', 'Civil Engineer', 'Financial Analyst',
  'Operations Manager', 'Administrative Assistant', 'UX Designer'
];

const POSITIVE_TITLES = [
  'Great place to work', 'Amazing culture and benefits', 'Best job I ever had', 
  'Learned a lot here', 'Supportive management', 'Excellent work-life balance',
  'Good place to start career', 'Meaningful work', 'Top notch colleagues', 'Fun environment'
];

const NEUTRAL_TITLES = [
  'It is okay', 'Good but could be better', 'Typical corporate environment',
  'Decent pay, hard work', 'Average experience', 'Some good days, some bad',
  'Standard benefits'
];

const NEGATIVE_TITLES = [
  'Management needs improvement', 'Long hours and low pay', 'Toxic environment',
  'No room for growth', 'Outdated technology', 'Stressful deadlines', 
  'Would not recommend', 'Upper management is disconnected'
];

const PROS_LIST = [
  'Great benefits package including 401k match.', 'Friendly and smart coworkers.',
  'Flexible remote work policy.', 'Free lunch and snacks.', 'Good office location.',
  'Opportunities for learning and development.', 'Generous PTO.', 'Brand recognition.',
  'Modern equipment.', 'Inclusive culture.'
];

const CONS_LIST = [
  'Long working hours during crunch time.', 'Salary is below market average.',
  'Middle management can be ineffective.', 'Bureaucracy slows things down.',
  'Limited career advancement.', 'Open office plan is noisy.', 'High turnover rate.',
  'Benefits have been cut recently.', 'Commute is difficult.', 'Politics play a big role.'
];

const LOCATIONS = ['Remote', 'New York, NY', 'San Francisco, CA', 'Austin, TX', 'Chicago, IL', 'Boston, MA', 'Seattle, WA', 'Los Angeles, CA', 'Atlanta, GA', 'Houston, USA'];

const getRandomItem = <T>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];
const getRandomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
const getRandomDate = (start: Date, end: Date) => new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toISOString().split('T')[0];

// --- Data Generation ---

const generatedReviews: Review[] = [];
const generatedSalaries: Salary[] = [];
const generatedJobs: Job[] = [];

// Generate ~40 reviews per company
BASE_COMPANIES.forEach(company => {
  // 1. REVIEWS
  const reviewCount = getRandomInt(35, 45);
  for (let i = 0; i < reviewCount; i++) {
    const isPositive = Math.random() > 0.3; // 70% positive bias
    const rating = isPositive ? getRandomInt(4, 5) : getRandomInt(1, 3);
    const title = isPositive 
      ? getRandomItem(POSITIVE_TITLES) 
      : (rating === 3 ? getRandomItem(NEUTRAL_TITLES) : getRandomItem(NEGATIVE_TITLES));
    
    generatedReviews.push({
      id: `r-${company.id}-${i}`,
      companyId: company.id,
      role: getRandomItem(ROLES),
      title: title,
      rating: rating,
      pros: getRandomItem(PROS_LIST) + " " + getRandomItem(PROS_LIST),
      cons: getRandomItem(CONS_LIST),
      date: getRandomDate(new Date(2022, 0, 1), new Date()),
      helpfulCount: getRandomInt(0, 50)
    });
  }
  company.reviewCount = reviewCount;

  // 2. SALARIES
  const salaryCount = getRandomInt(10, 20);
  for (let i = 0; i < salaryCount; i++) {
    const role = getRandomItem(ROLES);
    const baseMin = getRandomInt(60, 100) * 1000;
    const baseMax = baseMin + getRandomInt(20, 50) * 1000;
    
    generatedSalaries.push({
      id: `s-${company.id}-${i}`,
      companyId: company.id,
      role: role,
      min: baseMin,
      max: baseMax,
      avg: Math.floor((baseMin + baseMax) / 2),
      period: 'yearly'
    });
  }
  // Add a few hourly ones
  generatedSalaries.push({
      id: `s-${company.id}-hourly-1`,
      companyId: company.id,
      role: 'Intern',
      min: 20,
      max: 35,
      avg: 28,
      period: 'hourly'
  });
  company.salaryCount = salaryCount + 1;

  // 3. JOBS
  const jobCount = getRandomInt(3, 8);
  for (let i = 0; i < jobCount; i++) {
    const role = getRandomItem(ROLES);
    generatedJobs.push({
      id: `j-${company.id}-${i}`,
      companyId: company.id,
      title: role,
      type: Math.random() > 0.2 ? 'Full-time' : 'Contract',
      location: company.id === '1' ? 'Houston, USA' : getRandomItem(LOCATIONS),
      postedDate: `${getRandomInt(1, 14)} days ago`,
      salaryRange: `$${getRandomInt(80, 120)}k - $${getRandomInt(130, 180)}k`
    });
  }
});

// --- Inject specific reviews for Zenthera Groups (id: '1') ---
const zentheraSpecificReviews: Review[] = [
    {
      id: 'z-1',
      companyId: '1',
      role: 'Senior System Analyst',
      author: 'Venkat Raman',
      tenure: 'Working for 8 years',
      title: 'Stable career but strict certification norms',
      rating: 4,
      pros: 'I have been with Zenthera for over 8 years now. The job security is excellent and project pipeline is steady. Good for long term. They really take care of long-standing employees.',
      cons: 'They are very strict about professional certifications. You cannot get deployed to a billable project without clearing the specific certifications for that domain (AWS/Azure/PMP).',
      date: '2023-11-15',
      helpfulCount: 45
    },
    {
      id: 'z-2',
      companyId: '1',
      role: 'Graduate Trainee Engineer',
      author: 'Amit Kumar Singh',
      tenure: 'Fresher (Joined 6 months ago)',
      title: 'Good for freshers but interview is tough',
      rating: 5,
      pros: 'Best place to start as a fresher. The training facility is world-class. They teach you everything from scratch about industrial standards.',
      cons: 'The interview process was very long. Aptitude, Coding, and Technical HR. Also, immediate pressure to pass certifications to get allocated to a project.',
      date: '2024-01-10',
      helpfulCount: 32
    },
    {
      id: 'z-3',
      companyId: '1',
      role: 'Project Manager',
      author: 'Sai Krishna Reddy',
      tenure: 'Working for 12 years',
      title: 'Excellent opportunities for those who upgrade skills',
      rating: 5,
      pros: 'If you keep learning, you will grow. I started as a developer 12 years ago. The internal mobility between projects is good.',
      cons: 'Work life balance can be tricky during release cycles. Management expects you to be certified in PMP/Scrum before promotion.',
      date: '2023-09-22',
      helpfulCount: 28
    },
    {
      id: 'z-4',
      companyId: '1',
      role: 'Associate Consultant',
      author: 'Srinivas Rao',
      tenure: 'Working for 3 years',
      title: 'Interview process transparency',
      rating: 4,
      pros: 'Transparent hiring. They clearly told me I need AWS solution architect certification before I can touch the production system. They reimbursed the cost though.',
      cons: 'Salary hike is average compared to product based companies.',
      date: '2023-12-05',
      helpfulCount: 19
    },
    {
      id: 'z-5',
      companyId: '1',
      role: 'Software Developer',
      author: 'Ravi Shankar Mishra',
      tenure: 'Working for 2 years',
      title: 'Great infrastructure in Houston and India offices',
      rating: 4,
      pros: 'The campuses are huge. Lots of amenities. Good transport facility for late shifts.',
      cons: 'Strict policies on certifications. If you fail the certification exam twice, it affects your appraisal ratings significantly.',
      date: '2024-02-01',
      helpfulCount: 15
    },
    {
      id: 'z-6',
      companyId: '1',
      role: 'Technical Lead',
      author: 'Mounika Reddy',
      tenure: 'Working for 6 years',
      title: 'Challenging projects',
      rating: 5,
      pros: 'We work on massive industrial IoT projects. The scale is huge. Great exposure for technical folks.',
      cons: 'Need to constantly study for certifications to stay relevant in the team. No downtime.',
      date: '2023-10-30',
      helpfulCount: 22
    }
];

// Add specific reviews to the main list
generatedReviews.push(...zentheraSpecificReviews);

// Calculate average rating for each company (re-run to include new Zenthera reviews)
BASE_COMPANIES.forEach(company => {
  const companyReviews = generatedReviews.filter(r => r.companyId === company.id);
  const totalRating = companyReviews.reduce((sum, r) => sum + r.rating, 0);
  company.rating = parseFloat((totalRating / companyReviews.length).toFixed(1));
  company.reviewCount = companyReviews.length;
});

export const COMPANIES = BASE_COMPANIES;
export const REVIEWS = generatedReviews.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
// Shuffle salaries so the list isn't just one company at a time
export const SALARIES = generatedSalaries.map(value => ({ value, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(({ value }) => value);
export const JOBS = generatedJobs;