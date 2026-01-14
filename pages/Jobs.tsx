import React, { useState, useMemo } from 'react';
import { Search, MapPin, Clock, Building2, Briefcase, Filter, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';
import { JOBS, COMPANIES } from '../data';

const Jobs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedJobType, setSelectedJobType] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [showFiltersMobile, setShowFiltersMobile] = useState(false);

  // Extract unique locations
  const locations = useMemo(() => {
    const locs = new Set(JOBS.map(j => j.location));
    return ['All', ...Array.from(locs).sort()];
  }, []);

  const filteredJobs = JOBS.filter(job => {
    const company = COMPANIES.find(c => c.id === job.companyId);
    const companyName = company ? company.name.toLowerCase() : '';
    const term = searchTerm.toLowerCase();
    
    const matchesSearch = companyName.includes(term) ||
                          job.title.toLowerCase().includes(term) ||
                          job.location.toLowerCase().includes(term);
    
    const matchesType = selectedJobType === 'All' || job.type === selectedJobType;
    const matchesLocation = selectedLocation === 'All' || job.location === selectedLocation;

    return matchesSearch && matchesType && matchesLocation;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
       {/* Header */}
       <div className="mb-10 animate-fade-in">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Find Your Next Role</h1>
        <p className="text-slate-600 mb-8 max-w-2xl text-lg">
          Explore thousands of job opportunities from top companies.
        </p>
        <div className="relative max-w-3xl">
          <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-slate-400 w-6 h-6" />
          <input 
            type="text" 
            placeholder="Search by job title, keyword, or company..." 
            className="w-full pl-14 pr-4 py-4 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 shadow-sm text-lg"
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
            className="flex items-center gap-2 bg-white border border-slate-300 px-5 py-2.5 rounded-lg font-medium text-slate-700 hover:bg-slate-50 transition-colors shadow-sm"
          >
            <Filter className="w-4 h-4" /> {showFiltersMobile ? 'Hide Filters' : 'Show Filters'}
          </button>
        </div>

        {/* Sidebar Filters */}
        <div className={`lg:w-72 flex-shrink-0 animate-fade-in ${showFiltersMobile ? 'block' : 'hidden lg:block'}`}>
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm sticky top-24">
            <h3 className="font-bold text-slate-900 mb-6 flex items-center gap-2 pb-4 border-b border-slate-100">
              <Filter className="w-5 h-5" /> Filters
            </h3>
            
            {/* Job Type Filter */}
            <div className="mb-8">
              <label className="block text-sm font-bold text-slate-800 mb-3">Job Type</label>
              <div className="space-y-3">
                {['All', 'Full-time', 'Contract', 'Part-time', 'Remote'].map((type) => (
                  <label key={type} className="flex items-center cursor-pointer group">
                    <div className="relative flex items-center">
                      <input 
                        type="radio" 
                        name="jobType"
                        checked={selectedJobType === type}
                        onChange={() => setSelectedJobType(type)}
                        className="peer appearance-none h-5 w-5 border border-slate-300 rounded-full checked:border-teal-600 checked:border-4 transition-all"
                      />
                    </div>
                    <span className="ml-3 text-sm text-slate-600 group-hover:text-teal-700 transition-colors font-medium">{type}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Location Filter */}
            <div className="mb-8">
              <label className="block text-sm font-bold text-slate-800 mb-3">Location</label>
              <select 
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full border border-slate-300 rounded-lg p-3 text-sm text-slate-600 focus:ring-teal-500 focus:border-teal-500 outline-none"
              >
                {locations.map(loc => (
                  <option key={loc} value={loc}>{loc}</option>
                ))}
              </select>
            </div>

            <button 
              onClick={() => {
                setSearchTerm('');
                setSelectedJobType('All');
                setSelectedLocation('All');
              }}
              className="text-sm text-teal-600 font-bold hover:text-teal-800 w-full text-left hover:underline"
            >
              Reset Filters
            </button>
          </div>
        </div>

        {/* Job List */}
        <div className="flex-1">
          <div className="mb-5 text-slate-500 text-sm font-semibold tracking-wide uppercase">
            Showing {filteredJobs.length} job{filteredJobs.length !== 1 && 's'}
          </div>

          <div className="flex flex-col gap-5">
            {filteredJobs.length === 0 ? (
              <div className="text-center py-20 bg-white rounded-2xl border border-slate-200">
                <Briefcase className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-slate-900">No jobs found</h3>
                <p className="text-slate-500 mt-2">Try adjusting your search or filters.</p>
              </div>
            ) : (
              filteredJobs.map((job, index) => {
                const company = COMPANIES.find(c => c.id === job.companyId);
                if (!company) return null;

                return (
                  <div 
                    key={job.id} 
                    className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:border-teal-300 hover:shadow-lg transition-all duration-300 group animate-slide-up"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="flex flex-col sm:flex-row gap-6 items-start">
                      <div className="flex-shrink-0">
                        <Link to={`/companies/${company.id}`}>
                          {company.logo ? (
                             <img src={company.logo} alt={company.name} className="w-16 h-16 rounded-xl object-cover bg-white border border-slate-100 shadow-sm group-hover:scale-105 transition-transform" />
                          ) : (
                            <div className="w-16 h-16 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 shadow-sm group-hover:scale-105 transition-transform">
                               <Building2 className="w-8 h-8" />
                            </div>
                          )}
                        </Link>
                      </div>
                      <div className="flex-1 w-full">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-3">
                           <div>
                             <h3 className="text-xl font-bold text-teal-700 group-hover:underline cursor-pointer">{job.title}</h3>
                             <Link to={`/companies/${company.id}`} className="text-slate-600 hover:text-slate-900 font-semibold text-base block mt-1 transition-colors">
                               {company.name}
                             </Link>
                           </div>
                           <button className="bg-white text-teal-600 border border-teal-600 px-6 py-2.5 rounded-lg text-sm font-bold hover:bg-teal-50 transition-colors shadow-sm whitespace-nowrap mt-2 sm:mt-0">
                             Apply Now
                           </button>
                        </div>
                        
                        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-4 text-sm text-slate-600">
                          <span className="flex items-center gap-1.5 font-medium"><MapPin className="w-4 h-4 text-slate-400" /> {job.location}</span>
                          <span className="flex items-center gap-1.5 font-medium"><Clock className="w-4 h-4 text-slate-400" /> {job.postedDate}</span>
                          <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-md text-xs font-bold border border-slate-200">{job.type}</span>
                          {job.salaryRange && (
                            <span className="flex items-center gap-1 font-bold text-slate-900 bg-teal-50 px-2 py-1 rounded text-teal-800">
                              <DollarSign className="w-3.5 h-3.5" /> {job.salaryRange}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;