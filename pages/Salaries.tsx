import React, { useState, useMemo } from 'react';
import { Search, Building2, DollarSign, Filter, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SALARIES, COMPANIES } from '../data';

const Salaries = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRange, setSelectedRange] = useState<string>('All');
  const [selectedIndustry, setSelectedIndustry] = useState<string>('All');
  const [showFiltersMobile, setShowFiltersMobile] = useState(false);

  // Extract unique industries from companies
  const industries = useMemo(() => {
    const uniqueIndustries = new Set(COMPANIES.map(c => c.industry));
    return ['All', ...Array.from(uniqueIndustries).sort()];
  }, []);

  const filteredSalaries = SALARIES.filter(salary => {
    const company = COMPANIES.find(c => c.id === salary.companyId);
    if (!company) return false;

    const companyName = company.name.toLowerCase();
    const term = searchTerm.toLowerCase();
    
    const matchesSearch = companyName.includes(term) ||
                          salary.role.toLowerCase().includes(term);

    // Industry Filter
    const matchesIndustry = selectedIndustry === 'All' || company.industry === selectedIndustry;

    // Range Filter
    let matchesRange = true;
    if (selectedRange === 'Under $80k') matchesRange = salary.avg < 80000 && salary.period === 'yearly';
    if (selectedRange === '$80k - $120k') matchesRange = salary.avg >= 80000 && salary.avg <= 120000 && salary.period === 'yearly';
    if (selectedRange === '$120k - $160k') matchesRange = salary.avg > 120000 && salary.avg <= 160000 && salary.period === 'yearly';
    if (selectedRange === '$160k+') matchesRange = salary.avg > 160000 && salary.period === 'yearly';
    if (selectedRange === 'Hourly') matchesRange = salary.period === 'hourly';

    return matchesSearch && matchesRange && matchesIndustry;
  });

  const formatSalary = (amount: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumSignificantDigits: 3 }).format(amount);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Header */}
      <div className="mb-10 animate-fade-in">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Search Salaries</h1>
        <p className="text-slate-600 max-w-2xl mb-8 text-lg">
          Discover how much you could be earning. Browse salaries by job title, company, and industry.
        </p>
        
        <div className="max-w-3xl relative">
          <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
          <input 
            type="text" 
            placeholder="Job title or company..." 
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

        {/* Filters */}
        <div className={`lg:w-72 flex-shrink-0 animate-fade-in ${showFiltersMobile ? 'block' : 'hidden lg:block'}`}>
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm sticky top-24">
            <h3 className="font-bold text-slate-900 mb-6 flex items-center gap-2 pb-4 border-b border-slate-100">
              <Filter className="w-5 h-5" /> Filters
            </h3>
            
            {/* Industry Filter */}
            <div className="mb-8">
              <label className="block text-sm font-bold text-slate-800 mb-3">Industry</label>
              <select 
                value={selectedIndustry}
                onChange={(e) => setSelectedIndustry(e.target.value)}
                className="w-full border border-slate-300 rounded-lg p-3 text-sm text-slate-600 focus:ring-teal-500 focus:border-teal-500 outline-none"
              >
                {industries.map(ind => (
                  <option key={ind} value={ind}>{ind}</option>
                ))}
              </select>
            </div>

            {/* Salary Range Filter */}
            <div className="mb-8">
              <label className="block text-sm font-bold text-slate-800 mb-3">Salary Range</label>
              <div className="space-y-3">
                {['All', 'Under $80k', '$80k - $120k', '$120k - $160k', '$160k+', 'Hourly'].map((range) => (
                   <label key={range} className="flex items-center cursor-pointer group">
                    <div className="relative flex items-center">
                      <input 
                        type="radio" 
                        name="salaryRange" 
                        checked={selectedRange === range}
                        onChange={() => setSelectedRange(range)}
                        className="peer appearance-none h-5 w-5 border border-slate-300 rounded-full checked:border-teal-600 checked:border-4 transition-all"
                      />
                    </div>
                    <span className="ml-3 text-sm text-slate-600 group-hover:text-teal-700 transition-colors font-medium">{range}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="bg-teal-50 p-5 rounded-xl border border-teal-100 mb-4">
               <h4 className="font-bold text-teal-800 text-sm mb-2 flex items-center gap-2">
                 <DollarSign className="w-4 h-4" /> Market Insights
               </h4>
               <p className="text-xs text-teal-700 leading-relaxed">
                 Salaries for Tech roles have increased by 5% in the last quarter. Stay updated to negotiate better.
               </p>
            </div>

            <button 
              onClick={() => {
                setSearchTerm('');
                setSelectedRange('All');
                setSelectedIndustry('All');
              }}
              className="mt-2 text-sm text-teal-600 font-bold hover:text-teal-800 w-full text-left hover:underline"
            >
              Reset Filters
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="flex-1">
          <div className="mb-4 text-slate-500 text-sm font-semibold tracking-wide uppercase">
            Showing {filteredSalaries.length} result{filteredSalaries.length !== 1 && 's'}
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm animate-fade-in">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-slate-200">
                <thead className="bg-slate-50/50">
                  <tr>
                    <th scope="col" className="px-8 py-5 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Role & Company</th>
                    <th scope="col" className="px-8 py-5 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Total Pay Range</th>
                    <th scope="col" className="px-8 py-5 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Average</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-slate-100">
                  {filteredSalaries.length === 0 ? (
                    <tr>
                      <td colSpan={3} className="px-6 py-24 text-center text-slate-500">
                        <div className="flex flex-col items-center justify-center">
                          <DollarSign className="w-12 h-12 text-slate-200 mb-4" />
                          <p className="text-lg font-bold text-slate-900">No salaries found</p>
                          <p className="text-sm text-slate-500 mt-1">Try adjusting your search criteria.</p>
                        </div>
                      </td>
                    </tr>
                  ) : (
                    filteredSalaries.map((salary, index) => {
                      const company = COMPANIES.find(c => c.id === salary.companyId);
                      if (!company) return null;

                      return (
                        <tr key={salary.id} className="hover:bg-teal-50/30 transition-colors group animate-fade-in" style={{ animationDelay: `${index * 30}ms` }}>
                          <td className="px-8 py-5 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-12 w-12">
                                {company.logo ? (
                                  <img className="h-12 w-12 rounded-xl object-cover bg-white border border-slate-200 shadow-sm" src={company.logo} alt="" />
                                ) : (
                                  <div className="h-12 w-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-400">
                                    <Building2 className="w-6 h-6" />
                                  </div>
                                )}
                              </div>
                              <div className="ml-5">
                                <div className="text-sm font-bold text-slate-900 group-hover:text-teal-700 transition-colors">{salary.role}</div>
                                <div className="flex items-center gap-2 mt-0.5">
                                  <Link to={`/companies/${company.id}`} className="text-xs font-medium text-slate-500 hover:text-teal-600 hover:underline">
                                    {company.name}
                                  </Link>
                                  <span className="text-xs text-slate-300">•</span>
                                  <span className="text-xs text-slate-400">{company.industry}</span>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-8 py-5 whitespace-nowrap">
                            <div className="text-sm text-slate-600 font-medium bg-slate-100 px-3 py-1 rounded-full w-fit">
                              {salary.period === 'hourly' ? `$${salary.min}` : formatSalary(salary.min)} - {salary.period === 'hourly' ? `$${salary.max}/hr` : formatSalary(salary.max)}
                            </div>
                          </td>
                          <td className="px-8 py-5 whitespace-nowrap">
                            <div className="flex flex-col">
                              <div className="flex items-center text-base font-bold text-slate-900">
                                {salary.period === 'hourly' ? `$${salary.avg}/hr` : formatSalary(salary.avg)}
                              </div>
                              <div className="text-xs text-slate-400 font-medium uppercase tracking-wide mt-0.5">{salary.period}</div>
                            </div>
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Salaries;