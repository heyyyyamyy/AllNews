import React, { useState, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Star, MapPin, Briefcase, ChevronDown, Check, Search, Filter, Building2 } from 'lucide-react';
import { COMPANIES } from '../data';
import { Company } from '../types';

// Helper component for star rating visualization
export const StarRating = ({ rating, size = 4 }: { rating: number, size?: number }) => {
  // Map size number to tailwind class to ensure Tailwind picks them up during scan
  const sizeClasses: {[key: number]: string} = {
    3: 'w-3 h-3',
    4: 'w-4 h-4',
    5: 'w-5 h-5',
    6: 'w-6 h-6',
    8: 'w-8 h-8'
  };
  const sizeClass = sizeClasses[size] || 'w-4 h-4';

  return (
    <div className="flex items-center bg-yellow-50/80 px-2 py-0.5 rounded-md border border-yellow-100 w-fit">
      <span className="font-bold mr-1.5 text-slate-900 text-sm">{rating}</span>
      <div className="flex">
        {[1, 2, 3, 4, 5].map((i) => (
          <Star 
            key={i} 
            className={`${sizeClass} ${i <= Math.round(rating) ? 'text-yellow-500 fill-yellow-500' : 'text-slate-300'}`} 
          />
        ))}
      </div>
    </div>
  );
};

const Companies = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialSearch = queryParams.get('search') || '';
  const initialIndustry = queryParams.get('industry') || '';

  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [selectedIndustry, setSelectedIndustry] = useState<string>(initialIndustry);
  const [minRating, setMinRating] = useState<number>(0);
  const [hiringOnly, setHiringOnly] = useState<boolean>(false);
  const [showFiltersMobile, setShowFiltersMobile] = useState(false);

  // Extract unique industries from data
  const industries = Array.from(new Set(COMPANIES.map(c => c.industry))).sort();

  const filteredCompanies = useMemo(() => {
    return COMPANIES.filter(company => {
      const matchesSearch = company.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            company.industry.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesIndustry = selectedIndustry ? company.industry === selectedIndustry : true;
      const matchesRating = company.rating >= minRating;
      const matchesHiring = hiringOnly ? company.isHiring : true;

      return matchesSearch && matchesIndustry && matchesRating && matchesHiring;
    });
  }, [searchTerm, selectedIndustry, minRating, hiringOnly]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      
      {/* Search Header */}
      <div className="mb-10 animate-fade-in">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Discover great companies</h1>
        <div className="relative max-w-3xl">
          <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-slate-400 w-6 h-6" />
          <input 
            type="text" 
            placeholder="Search by company name or industry..." 
            className="w-full pl-14 pr-4 py-4 rounded-xl glass-card border border-white/50 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent shadow-sm text-lg"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Mobile Filter Toggle */}
        <div className="lg:hidden mb-4">
          <button 
            onClick={() => setShowFiltersMobile(!showFiltersMobile)}
            className="flex items-center gap-2 glass-card px-5 py-2.5 rounded-lg font-medium text-slate-700 transition-colors shadow-sm"
          >
            <Filter className="w-4 h-4" /> {showFiltersMobile ? 'Hide Filters' : 'Show Filters'}
          </button>
        </div>

        {/* Sidebar Filters */}
        <div className={`lg:w-72 flex-shrink-0 animate-fade-in ${showFiltersMobile ? 'block' : 'hidden lg:block'}`}>
          <div className="glass-card p-6 rounded-2xl sticky top-24">
            <h3 className="font-bold text-slate-900 mb-6 flex items-center gap-2 pb-4 border-b border-slate-100">
              <Filter className="w-5 h-5" /> Filter Companies
            </h3>
            
            {/* Industry Filter */}
            <div className="mb-8">
              <label className="block text-sm font-bold text-slate-800 mb-3">Industry</label>
              <select 
                value={selectedIndustry} 
                onChange={(e) => setSelectedIndustry(e.target.value)}
                className="w-full border border-slate-200 bg-white/50 rounded-lg p-3 text-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
              >
                <option value="">All Industries</option>
                {industries.map(ind => (
                  <option key={ind} value={ind}>{ind}</option>
                ))}
              </select>
            </div>

            {/* Rating Filter */}
            <div className="mb-8">
              <label className="block text-sm font-bold text-slate-800 mb-3">Rating</label>
              <div className="space-y-3">
                {[4, 3, 2].map(rating => (
                  <label key={rating} className="flex items-center cursor-pointer group">
                    <div className="relative flex items-center">
                      <input 
                        type="radio" 
                        name="rating" 
                        checked={minRating === rating}
                        onChange={() => setMinRating(rating)}
                        className="peer appearance-none h-5 w-5 border border-slate-300 rounded-full checked:border-teal-600 checked:border-4 transition-all"
                      />
                    </div>
                    <span className="ml-3 text-sm text-slate-600 flex items-center group-hover:text-teal-700 transition-colors font-medium">
                      {rating}+ <Star className="w-3.5 h-3.5 text-yellow-400 ml-1.5 fill-yellow-400" />
                    </span>
                  </label>
                ))}
                <label className="flex items-center cursor-pointer group">
                    <div className="relative flex items-center">
                      <input 
                        type="radio" 
                        name="rating" 
                        checked={minRating === 0}
                        onChange={() => setMinRating(0)}
                        className="peer appearance-none h-5 w-5 border border-slate-300 rounded-full checked:border-teal-600 checked:border-4 transition-all"
                      />
                    </div>
                    <span className="ml-3 text-sm text-slate-600 group-hover:text-teal-700 transition-colors font-medium">Any</span>
                  </label>
              </div>
            </div>

            {/* Hiring Filter */}
            <div className="mb-8">
              <label className="flex items-center cursor-pointer group p-3 border border-slate-200 rounded-xl hover:border-teal-300 hover:bg-teal-50/30 transition-all bg-white/40">
                <input 
                  type="checkbox" 
                  checked={hiringOnly}
                  onChange={(e) => setHiringOnly(e.target.checked)}
                  className="w-5 h-5 rounded border-slate-300 text-teal-600 focus:ring-teal-500"
                />
                <span className="ml-3 text-sm text-slate-700 font-semibold group-hover:text-teal-700 transition-colors">Hiring Now</span>
              </label>
            </div>

            <button 
              onClick={() => {
                setSelectedIndustry('');
                setMinRating(0);
                setHiringOnly(false);
                setSearchTerm('');
              }}
              className="w-full text-sm text-teal-600 font-bold hover:text-teal-800 text-left py-2 hover:underline transition-all"
            >
              Reset Filters
            </button>
          </div>
        </div>

        {/* Results Grid */}
        <div className="flex-1">
          <div className="mb-5 text-slate-500 text-sm font-semibold tracking-wide uppercase">
            Showing {filteredCompanies.length} result{filteredCompanies.length !== 1 && 's'}
          </div>

          {filteredCompanies.length === 0 ? (
            <div className="glass-card rounded-2xl p-16 text-center shadow-sm animate-fade-in">
              <div className="mx-auto w-20 h-20 bg-slate-50/50 rounded-full flex items-center justify-center mb-6">
                <Search className="text-slate-300 w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">No companies found</h3>
              <p className="text-slate-500 mt-2">Try adjusting your filters or search terms.</p>
            </div>
          ) : (
            <div className="grid gap-5">
              {filteredCompanies.map((company, index) => (
                <Link 
                  to={`/companies/${company.id}`} 
                  key={company.id} 
                  className="block glass-card rounded-2xl p-7 hover:shadow-lg transition-all duration-300 group relative hover:border-teal-200 animate-slide-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-start gap-5 md:gap-8">
                    <div className="flex-shrink-0">
                      {company.logo ? (
                        <img src={company.logo} alt={company.name} className="w-20 h-20 md:w-24 md:h-24 rounded-xl object-cover bg-white border border-slate-100 shadow-sm group-hover:scale-105 transition-transform duration-300" />
                      ) : (
                        <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 shadow-sm group-hover:scale-105 transition-transform duration-300">
                          <Building2 className="w-10 h-10 md:w-12 md:h-12" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                        <h2 className="text-2xl font-bold text-slate-900 group-hover:text-teal-600 transition-colors truncate">{company.name}</h2>
                        {company.isHiring && (
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-teal-50 text-teal-700 border border-teal-100 w-fit">
                            Hiring Now
                          </span>
                        )}
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-600 mb-4">
                        <StarRating rating={company.rating} />
                        <span className="flex items-center font-medium"><MapPin className="w-4 h-4 mr-1.5 text-slate-400" /> {company.location}</span>
                        <span className="flex items-center font-medium"><Briefcase className="w-4 h-4 mr-1.5 text-slate-400" /> {company.industry}</span>
                        <span className="text-slate-400">|</span>
                        <span>{company.size}</span>
                      </div>

                      <p className="text-slate-600 text-sm line-clamp-2 leading-relaxed mb-5">{company.shortDescription}</p>
                      
                      <div className="pt-4 border-t border-slate-100 flex items-center gap-8 text-sm">
                        <div className="group-hover:text-teal-600 transition-colors">
                            <span className="font-bold text-slate-900">{company.reviewCount}</span> <span className="text-slate-500">Reviews</span>
                        </div>
                        <div className="group-hover:text-teal-600 transition-colors">
                            <span className="font-bold text-slate-900">{company.salaryCount}</span> <span className="text-slate-500">Salaries</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Companies;