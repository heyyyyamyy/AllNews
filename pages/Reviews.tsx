import React, { useState } from 'react';
import { Search, ThumbsUp, ThumbsDown, Building2, Filter, Star, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { REVIEWS, COMPANIES } from '../data';
import { StarRating } from './Companies';

const Reviews = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [limit, setLimit] = useState(20);
  const [showFiltersMobile, setShowFiltersMobile] = useState(false);

  const filteredReviews = REVIEWS.filter(review => {
    const company = COMPANIES.find(c => c.id === review.companyId);
    const companyName = company ? company.name.toLowerCase() : '';
    const term = searchTerm.toLowerCase();
    
    const matchesSearch = companyName.includes(term) ||
                          review.title.toLowerCase().includes(term) ||
                          review.role.toLowerCase().includes(term);
    const matchesRating = selectedRating ? Math.round(review.rating) === selectedRating : true;

    return matchesSearch && matchesRating;
  });

  const displayReviews = filteredReviews.slice(0, limit);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Header */}
      <div className="mb-10 animate-fade-in">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Latest Company Reviews</h1>
        <p className="text-slate-600 max-w-2xl mb-8 text-lg">
          See what employees are saying about their workplaces. Honest feedback on culture, management, and more.
        </p>
        
        <div className="max-w-3xl relative">
          <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
          <input 
            type="text" 
            placeholder="Search reviews by company or job title..." 
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

        {/* Filters Sidebar */}
        <div className={`lg:w-72 flex-shrink-0 animate-fade-in ${showFiltersMobile ? 'block' : 'hidden lg:block'}`}>
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm sticky top-24">
            <h3 className="font-bold text-slate-900 mb-6 flex items-center gap-2 pb-4 border-b border-slate-100">
              <Filter className="w-5 h-5" /> Filters
            </h3>
            
            <div className="mb-8">
              <label className="block text-sm font-bold text-slate-800 mb-3">Rating</label>
              <div className="space-y-2">
                {[5, 4, 3, 2, 1].map(star => (
                  <button 
                    key={star}
                    onClick={() => setSelectedRating(selectedRating === star ? null : star)}
                    className={`flex items-center justify-between w-full px-3 py-2.5 rounded-xl text-sm transition-all duration-200 ${selectedRating === star ? 'bg-teal-50 text-teal-800 font-bold ring-1 ring-teal-200' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}`}
                  >
                    <div className="flex items-center">
                       <span>{star} Stars</span>
                    </div>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-3.5 h-3.5 ${i < star ? 'text-yellow-400 fill-yellow-400' : 'text-slate-200'}`} />
                      ))}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <label className="block text-sm font-bold text-slate-800 mb-3">Date Posted</label>
              <select className="w-full border border-slate-300 rounded-lg p-3 text-sm text-slate-600 focus:ring-teal-500 focus:border-teal-500 outline-none">
                <option>Any Time</option>
                <option>Last Month</option>
                <option>Last 3 Months</option>
                <option>Last Year</option>
              </select>
            </div>

            <button 
              onClick={() => {setSelectedRating(null); setSearchTerm('');}}
              className="text-sm text-teal-600 font-bold hover:text-teal-800 w-full text-left px-1 hover:underline transition-all"
            >
              Clear all filters
            </button>
          </div>
        </div>

        {/* Review List */}
        <div className="flex-1 space-y-6">
          <div className="text-slate-500 text-sm font-semibold tracking-wide uppercase mb-2">
             Showing {displayReviews.length} of {filteredReviews.length} reviews
          </div>

          {displayReviews.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
                 <Filter className="w-8 h-8 text-slate-300" />
              </div>
              <p className="text-slate-900 font-medium text-lg">No reviews found matching your search.</p>
              <button onClick={() => setSearchTerm('')} className="mt-4 text-teal-600 font-bold hover:underline">Clear Search</button>
            </div>
          ) : (
            displayReviews.map((review, index) => {
              const company = COMPANIES.find(c => c.id === review.companyId);
              if (!company) return null;

              return (
                <div 
                    key={review.id} 
                    className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-teal-200 animate-slide-up"
                    style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex flex-col sm:flex-row gap-6">
                    <div className="flex-shrink-0 hidden sm:block">
                      <Link to={`/companies/${company.id}`} className="block group">
                        {company.logo ? (
                          <img src={company.logo} alt={company.name} className="w-16 h-16 rounded-xl object-cover bg-white border border-slate-100 group-hover:border-teal-200 transition-colors shadow-sm" />
                        ) : (
                           <div className="w-16 h-16 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-slate-100 group-hover:text-teal-500 transition-colors shadow-sm">
                             <Building2 className="w-8 h-8" />
                           </div>
                        )}
                      </Link>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <Link to={`/companies/${company.id}`} className="text-sm font-bold text-slate-500 hover:text-teal-600 mb-1 block transition-colors">
                            {company.name}
                          </Link>
                          <h3 className="font-bold text-xl text-slate-900 leading-tight group-hover:text-teal-700">{review.title}</h3>
                        </div>
                        <div className="bg-slate-100 px-3 py-1 rounded-full text-xs text-slate-600 font-semibold whitespace-nowrap">
                          {review.date}
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-6">
                          <StarRating rating={review.rating} size={4} />
                          <span className="text-slate-300">|</span>
                          <span className="font-medium text-slate-700 text-sm">{review.role}</span>
                          {review.author && (
                             <>
                               <span className="text-slate-300">|</span>
                               <span className="text-teal-700 font-medium text-sm">{review.author}</span>
                             </>
                           )}
                           {review.tenure && (
                             <>
                               <span className="text-slate-300">|</span>
                               <span className="text-slate-500 italic text-sm">{review.tenure}</span>
                             </>
                           )}
                      </div>

                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                          <div className="relative pl-4 border-l-4 border-teal-400 py-1">
                            <span className="font-bold text-teal-700 text-xs uppercase tracking-wide block mb-2">Pros</span>
                            <p className="text-slate-700 text-sm leading-relaxed">{review.pros}</p>
                          </div>
                          <div className="relative pl-4 border-l-4 border-red-400 py-1">
                            <span className="font-bold text-red-600 text-xs uppercase tracking-wide block mb-2">Cons</span>
                            <p className="text-slate-700 text-sm leading-relaxed">{review.cons}</p>
                          </div>
                      </div>

                      <div className="flex items-center gap-6 border-t border-slate-50 pt-4">
                          <button className="flex items-center gap-2 text-slate-500 text-sm hover:text-teal-600 transition-colors font-semibold group">
                            <ThumbsUp className="w-4 h-4 group-hover:scale-110 transition-transform" /> Helpful ({review.helpfulCount})
                          </button>
                          <button className="flex items-center gap-2 text-slate-500 text-sm hover:text-red-500 transition-colors font-semibold group">
                            <ThumbsDown className="w-4 h-4 group-hover:scale-110 transition-transform" /> Not Helpful
                          </button>
                        </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
          
          {displayReviews.length < filteredReviews.length && (
             <div className="text-center pt-8 pb-4">
               <button 
                onClick={() => setLimit(l => l + 20)}
                className="bg-white border border-slate-300 text-slate-700 font-bold px-8 py-3 rounded-full hover:bg-slate-50 hover:shadow-md transition-all active:scale-95"
               >
                 Load More Reviews
               </button>
             </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Reviews;