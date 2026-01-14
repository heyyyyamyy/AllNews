import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, MapPin, Globe, CheckCircle, ThumbsUp, ThumbsDown, Clock, Building2, ChevronLeft, ChevronRight, DollarSign, Filter, Briefcase } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { COMPANIES, REVIEWS, SALARIES, JOBS } from '../data';
import { StarRating } from './Companies';

const ITEMS_PER_PAGE = 5;

const CompanyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState<'overview' | 'reviews' | 'salaries' | 'jobs'>('overview');
  
  // Review Pagination State
  const [currentPage, setCurrentPage] = useState(1);

  const company = COMPANIES.find(c => c.id === id);
  const allReviews = REVIEWS.filter(r => r.companyId === id);
  const salaries = SALARIES.filter(s => s.companyId === id);
  const jobs = JOBS.filter(j => j.companyId === id);

  if (!company) {
    return <div className="p-8 text-center text-lg">Company not found. <Link to="/companies" className="text-teal-600 font-semibold hover:underline">Back to list</Link></div>;
  }

  // Calculate pagination
  const totalPages = Math.ceil(allReviews.length / ITEMS_PER_PAGE);
  const currentReviews = allReviews.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // Formatting currency
  const formatSalary = (amount: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumSignificantDigits: 3 }).format(amount);
  };

  return (
    <div className="min-h-screen pb-12">
      {/* Header */}
      <div className="glass-card border-b border-slate-200/50 shadow-sm pt-8 animate-fade-in rounded-b-3xl mb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-0">
          <div className="flex flex-col md:flex-row gap-8 mb-10">
            <div className="flex-shrink-0">
              {company.logo ? (
                <img src={company.logo} alt={company.name} className="w-24 h-24 md:w-32 md:h-32 rounded-2xl border border-slate-200 bg-white p-2 shadow-sm object-cover" />
              ) : (
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl border border-slate-200 bg-white flex items-center justify-center text-slate-300 shadow-sm">
                  <Building2 className="w-12 h-12" />
                </div>
              )}
            </div>
            <div className="flex-1">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">{company.name}</h1>
                  <div className="flex flex-wrap items-center gap-6 text-sm text-slate-600 font-medium">
                    <StarRating rating={company.rating} size={5} />
                    <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-slate-400" /> {company.location}</span>
                    <span className="flex items-center gap-1.5"><Globe className="w-4 h-4 text-slate-400" /> <a href={company.website} target="_blank" rel="noreferrer" className="text-teal-600 hover:underline">Website</a></span>
                    <span className="bg-slate-100 px-2 py-0.5 rounded text-slate-500">{company.size}</span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button className="px-5 py-2.5 border border-slate-300 rounded-lg font-semibold text-slate-700 hover:bg-slate-50 transition-colors shadow-sm bg-white/50">Follow</button>
                  <button className="px-5 py-2.5 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 shadow-md hover:shadow-lg transition-all transform active:scale-95">+ Add Review</button>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex space-x-10 border-b border-transparent overflow-x-auto">
            {['overview', 'reviews', 'salaries', 'jobs'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={`pb-4 px-1 text-sm font-bold capitalize border-b-2 transition-all whitespace-nowrap ${
                  activeTab === tab
                    ? 'border-teal-600 text-teal-600'
                    : 'border-transparent text-slate-500 hover:text-slate-800 hover:border-slate-300'
                }`}
              >
                {tab} <span className="ml-1 text-xs font-normal text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded-full">{tab === 'reviews' ? allReviews.length : tab === 'salaries' ? salaries.length : tab === 'jobs' ? jobs.length : ''}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* OVERVIEW TAB */}
            {activeTab === 'overview' && (
              <div className="animate-fade-in space-y-8">
                <div className="glass-card rounded-2xl p-8 mb-8">
                  <h2 className="text-xl font-bold text-slate-900 mb-5">About {company.name}</h2>
                  <p className="text-slate-600 leading-relaxed mb-8 text-lg">{company.description}</p>
                  
                  <div className="grid grid-cols-2 gap-6">
                    <div className="p-5 bg-white/50 rounded-xl border border-slate-100">
                      <div className="text-sm text-slate-500 mb-1 font-medium">Headquarters</div>
                      <div className="font-bold text-slate-900">{company.location}</div>
                    </div>
                    <div className="p-5 bg-white/50 rounded-xl border border-slate-100">
                      <div className="text-sm text-slate-500 mb-1 font-medium">Founded</div>
                      <div className="font-bold text-slate-900">{company.founded}</div>
                    </div>
                    <div className="p-5 bg-white/50 rounded-xl border border-slate-100">
                      <div className="text-sm text-slate-500 mb-1 font-medium">Industry</div>
                      <div className="font-bold text-slate-900">{company.industry}</div>
                    </div>
                    <div className="p-5 bg-white/50 rounded-xl border border-slate-100">
                      <div className="text-sm text-slate-500 mb-1 font-medium">Type</div>
                      <div className="font-bold text-slate-900">Private Company</div>
                    </div>
                  </div>
                </div>

                <div className="glass-card rounded-2xl p-8">
                   <h2 className="text-xl font-bold text-slate-900 mb-5">Key Benefits</h2>
                   <div className="grid sm:grid-cols-2 gap-4">
                     {company.benefits.map((benefit, idx) => (
                       <div key={idx} className="flex items-center gap-3 text-slate-700 bg-teal-50/50 p-3 rounded-lg border border-teal-100">
                         <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0" />
                         <span className="font-medium">{benefit}</span>
                       </div>
                     ))}
                   </div>
                </div>
              </div>
            )}

            {/* REVIEWS TAB */}
            {activeTab === 'reviews' && (
              <div className="space-y-6 animate-fade-in">
                <div className="flex flex-wrap justify-between items-center gap-4 mb-2">
                  <h2 className="text-2xl font-bold text-slate-900">Employee Reviews</h2>
                  <div className="flex gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 border border-slate-300 rounded-lg text-sm font-medium text-slate-700 bg-white/50 hover:bg-white">
                      <Filter className="w-4 h-4" /> Filter
                    </button>
                    <select className="border border-slate-300 rounded-lg text-sm px-3 py-2 bg-white/50 text-slate-700 focus:ring-teal-500 outline-none">
                      <option>Most Helpful</option>
                      <option>Most Recent</option>
                      <option>Highest Rating</option>
                      <option>Lowest Rating</option>
                    </select>
                  </div>
                </div>
                
                {allReviews.length === 0 ? (
                  <div className="text-center py-16 glass-card rounded-2xl">
                    <p className="text-slate-500 text-lg">No reviews yet. Be the first!</p>
                  </div>
                ) : (
                  <>
                    {currentReviews.map((review, index) => (
                      <div key={review.id} className="glass-card rounded-2xl p-8 animate-slide-up" style={{ animationDelay: `${index * 50}ms` }}>
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="font-bold text-xl text-slate-900">{review.title}</h3>
                            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mt-2 text-sm text-slate-500">
                              <StarRating rating={review.rating} size={4} />
                              <span className="text-slate-300">|</span>
                              <span className="font-semibold text-slate-700">{review.role}</span>
                              {review.author && (
                                <>
                                  <span className="text-slate-300">|</span>
                                  <span className="text-teal-700 font-medium">{review.author}</span>
                                </>
                              )}
                              {review.tenure && (
                                <>
                                  <span className="text-slate-300">|</span>
                                  <span className="text-slate-500 italic">{review.tenure}</span>
                                </>
                              )}
                              <span className="text-slate-300">|</span>
                              <span>{review.date}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-6 mb-6 mt-6">
                          <div className="bg-teal-50/40 p-4 rounded-xl border border-teal-100/50">
                            <span className="font-bold text-teal-700 text-xs uppercase tracking-wide block mb-2">Pros</span>
                            <p className="text-slate-700 text-sm leading-relaxed">{review.pros}</p>
                          </div>
                          <div className="bg-red-50/40 p-4 rounded-xl border border-red-100/50">
                            <span className="font-bold text-red-600 text-xs uppercase tracking-wide block mb-2">Cons</span>
                            <p className="text-slate-700 text-sm leading-relaxed">{review.cons}</p>
                          </div>
                        </div>
                        
                        <div className="text-sm text-slate-400 flex items-center gap-6 pt-2">
                          <button className="flex items-center gap-1.5 hover:text-teal-600 transition-colors font-medium"><ThumbsUp className="w-4 h-4" /> Helpful ({review.helpfulCount})</button>
                          <button className="flex items-center gap-1.5 hover:text-red-500 transition-colors font-medium"><ThumbsDown className="w-4 h-4" /> Not Helpful</button>
                        </div>
                      </div>
                    ))}
                    
                    {/* Pagination Controls */}
                    {totalPages > 1 && (
                      <div className="flex justify-center items-center gap-4 pt-8">
                        <button 
                          onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                          disabled={currentPage === 1}
                          className="p-3 border border-slate-300 rounded-full disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white hover:shadow-sm transition-all bg-white"
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </button>
                        <span className="text-sm font-bold text-slate-600 bg-white px-4 py-2 rounded-full border border-slate-200">
                          Page {currentPage} of {totalPages}
                        </span>
                        <button 
                           onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                           disabled={currentPage === totalPages}
                           className="p-3 border border-slate-300 rounded-full disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white hover:shadow-sm transition-all bg-white"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </button>
                      </div>
                    )}
                  </>
                )}
              </div>
            )}

            {/* SALARIES TAB */}
            {activeTab === 'salaries' && (
              <div className="space-y-6 animate-fade-in">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Salaries at {company.name}</h2>
                <div className="grid gap-5">
                  {salaries.map((salary, index) => (
                    <div key={salary.id} className="glass-card rounded-2xl p-6 transition-all animate-slide-up" style={{ animationDelay: `${index * 50}ms` }}>
                      <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-5">
                        <h3 className="font-bold text-lg text-slate-900">{salary.role}</h3>
                        <span className="text-teal-700 text-xs font-bold uppercase tracking-wider bg-teal-50 px-2.5 py-1 rounded border border-teal-100">{salary.period === 'hourly' ? 'Hourly' : 'Yearly'}</span>
                      </div>
                      
                      <div className="mb-2">
                        <div className="flex justify-between text-sm text-slate-500 mb-3 font-medium">
                          <span>Min: {salary.period === 'hourly' ? `$${salary.min}/hr` : formatSalary(salary.min)}</span>
                          <span className="font-bold text-slate-900 text-lg">Avg: {salary.period === 'hourly' ? `$${salary.avg}/hr` : formatSalary(salary.avg)}</span>
                          <span>Max: {salary.period === 'hourly' ? `$${salary.max}/hr` : formatSalary(salary.max)}</span>
                        </div>
                        {/* Visual Range Bar */}
                        <div className="h-4 bg-slate-100 rounded-full overflow-hidden relative">
                          <div className="absolute top-0 bottom-0 bg-teal-200 left-[15%] right-[15%] rounded-full opacity-60"></div>
                          <div className="absolute top-0 bottom-0 w-1.5 bg-teal-600 left-[50%] transform -translate-x-1/2 rounded-full h-full"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {salaries.length > 0 && (
                  <div className="glass-card rounded-2xl p-8 mt-8">
                    <h3 className="font-bold text-lg text-slate-900 mb-6">Salary Distribution by Role</h3>
                    <div className="h-96 w-full">
                       <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={salaries.slice(0, 10)} layout="vertical" margin={{ left: 120 }}>
                            <XAxis type="number" hide />
                            <YAxis dataKey="role" type="category" width={150} tick={{fontSize: 12, fill: '#475569', fontWeight: 500}} />
                            <Tooltip 
                              cursor={{fill: '#f1f5f9', radius: 4}}
                              contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', padding: '12px'}}
                              formatter={(value: number) => [`$${value.toLocaleString()}`, 'Avg Salary']}
                            />
                            <Bar dataKey="avg" barSize={24} radius={[0, 6, 6, 0]}>
                              {salaries.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill="#1A73E8" />
                              ))}
                            </Bar>
                          </BarChart>
                       </ResponsiveContainer>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* JOBS TAB */}
            {activeTab === 'jobs' && (
              <div className="space-y-5 animate-fade-in">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Open Positions</h2>
                {jobs.length === 0 ? (
                   <div className="text-center py-20 glass-card rounded-2xl">
                    <Briefcase className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                    <p className="text-slate-500 font-medium">No open positions listed at the moment.</p>
                  </div>
                ) : (
                  jobs.map((job, index) => (
                    <div key={job.id} className="glass-card rounded-2xl p-7 transition-all cursor-pointer group animate-slide-up" style={{ animationDelay: `${index * 50}ms` }}>
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-bold text-xl text-teal-700 group-hover:underline">{job.title}</h3>
                          <div className="flex items-center gap-4 text-sm text-slate-500 mt-3 font-medium">
                            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-slate-400" /> {job.location}</span>
                            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-slate-400" /> {job.postedDate}</span>
                            <span className="bg-slate-100 px-3 py-1 rounded-md text-slate-600 text-xs font-bold border border-slate-200">{job.type}</span>
                          </div>
                        </div>
                        <button className="px-6 py-2 border-2 border-teal-600 text-teal-600 rounded-lg text-sm font-bold hover:bg-teal-600 hover:text-white transition-all">Apply</button>
                      </div>
                      {job.salaryRange && (
                        <div className="mt-4 text-sm text-slate-800 flex items-center gap-1.5 font-bold bg-slate-50 w-fit px-3 py-1.5 rounded-lg">
                          <DollarSign className="w-4 h-4 text-teal-600" /> {job.salaryRange} <span className="text-slate-400 font-normal ml-1">(Est.)</span>
                        </div>
                      )}
                    </div>
                  ))
                )}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="glass-card rounded-2xl p-7 sticky top-24">
              <h3 className="font-bold text-slate-900 mb-6 text-lg">Rating Breakdown</h3>
              <div className="space-y-5">
                {[
                  { label: 'Work/Life Balance', score: (Math.random() * (4.8 - 3.5) + 3.5).toFixed(1) },
                  { label: 'Compensation', score: (Math.random() * (4.8 - 3.5) + 3.5).toFixed(1) },
                  { label: 'Job Security', score: (Math.random() * (4.8 - 3.5) + 3.5).toFixed(1) },
                  { label: 'Management', score: (Math.random() * (4.5 - 2.5) + 2.5).toFixed(1) },
                  { label: 'Culture', score: (Math.random() * (4.8 - 3.5) + 3.5).toFixed(1) },
                ].map((metric) => (
                  <div key={metric.label}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-slate-600 font-medium">{metric.label}</span>
                      <span className="font-bold text-slate-900">{metric.score}</span>
                    </div>
                    <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-teal-500 rounded-full transition-all duration-1000 ease-out" 
                        style={{ width: `${(parseFloat(metric.score as string) / 5) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-slate-100">
                <button className="w-full bg-teal-600 text-white font-bold py-3.5 rounded-xl hover:bg-teal-700 transition-colors shadow-md hover:shadow-lg transform active:scale-95">
                   Write a Review
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetail;