import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Search, MapPin, Building, ArrowRight, TrendingUp, Users, DollarSign, Building2 } from 'lucide-react';
import { COMPANIES } from '../data';

const Home = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/companies?search=${encodeURIComponent(searchTerm)}`);
  };

  const trendingCompanies = COMPANIES.slice(0, 3);

  const industries = ["Technology", "Finance", "Healthcare", "Construction", "Retail", "Energy", "Media", "Transportation"];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-24 pb-28 lg:pt-36 lg:pb-48 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-8 animate-slide-up">
            Find the job that <br className="hidden md:block"/>
            <span className="text-teal-600 relative inline-block">
              fits your life
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-accent-500 opacity-50 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                 <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
              </svg>
            </span>.
          </h1>
          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto animate-slide-up animate-delay-100 leading-relaxed font-medium">
            Get the inside scoop on companies with honest reviews, salary data, and interview insights from real employees.
          </p>

          <div className="max-w-3xl mx-auto animate-slide-up animate-delay-200">
            <div className="glass-card p-2 rounded-2xl transition-all duration-300 transform hover:scale-[1.01]">
              <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-2">
                <div className="flex-1 relative flex items-center px-4 border-b md:border-b-0 md:border-r border-slate-200 py-3 md:py-0">
                  <Search className="w-6 h-6 text-slate-400 mr-3" />
                  <input 
                    type="text" 
                    placeholder="Job title, keywords, or company" 
                    className="w-full outline-none bg-transparent text-slate-900 placeholder-slate-400 text-lg font-medium"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <div className="flex-1 relative flex items-center px-4 border-b md:border-b-0 py-3 md:py-0">
                  <MapPin className="w-6 h-6 text-slate-400 mr-3" />
                  <input type="text" placeholder="Location" className="w-full outline-none bg-transparent text-slate-900 placeholder-slate-400 text-lg font-medium" />
                </div>
                <button type="submit" className="bg-teal-600 hover:bg-teal-700 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-teal-500/30">
                  Search
                </button>
              </form>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3 animate-fade-in animate-delay-300">
            <span className="text-sm font-semibold text-slate-500 py-1.5">Popular:</span>
            {['Remote', 'Software Engineer', 'Project Manager', 'New York'].map(tag => (
              <button key={tag} className="text-sm bg-white/60 hover:bg-white text-slate-700 px-4 py-1.5 rounded-full transition-all border border-white/50 hover:border-teal-200 font-medium shadow-sm" onClick={() => navigate('/companies')}>
                {tag}
              </button>
            ))}
          </div>
        </div>
        
        {/* Abstract background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
             <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-accent-100/40 rounded-full blur-[120px] animate-pulse-slow"></div>
             <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-teal-100/40 rounded-full blur-[120px] animate-pulse-slow"></div>
             <div className="absolute top-[40%] left-[20%] w-[20%] h-[20%] bg-secondary-100/30 rounded-full blur-[80px]"></div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-white/50 backdrop-blur-sm py-24 border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Career confidence starts here</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Join millions of professionals who use AllNews every month to navigate their careers.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            <div className="glass-card p-10 rounded-2xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-20 h-20 bg-secondary-50 text-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-secondary-500 group-hover:text-white transition-colors duration-300 shadow-sm">
                <Users className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 text-center">Read Reviews</h3>
              <p className="text-slate-600 leading-relaxed text-center">See what employees say about company culture, management, and work-life balance.</p>
            </div>
            <div className="glass-card p-10 rounded-2xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-20 h-20 bg-accent-50 text-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-accent-500 group-hover:text-white transition-colors duration-300 shadow-sm">
                <DollarSign className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 text-center">Compare Salaries</h3>
              <p className="text-slate-600 leading-relaxed text-center">Get the pay you deserve. Explore salaries by job title, company, and location.</p>
            </div>
            <div className="glass-card p-10 rounded-2xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-20 h-20 bg-teal-50 text-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                <Building className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 text-center">Find Companies</h3>
              <p className="text-slate-600 leading-relaxed text-center">Discover companies that align with your values and are hiring right now.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Companies */}
      <section className="py-24 border-t border-slate-200/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 flex items-center gap-3">
                <TrendingUp className="text-teal-600 w-8 h-8" /> Trending Companies
              </h2>
              <p className="mt-3 text-lg text-slate-600">Companies people are researching right now.</p>
            </div>
            <Link to="/companies" className="hidden md:flex items-center text-teal-600 font-bold hover:text-teal-800 transition-colors">
              View all companies <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {trendingCompanies.map((company, index) => (
              <Link to={`/companies/${company.id}`} key={company.id} className="group block glass-card rounded-2xl p-8 hover:border-teal-300 transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center gap-5 mb-6">
                  {company.logo ? (
                    <img src={company.logo} alt={company.name} className="w-16 h-16 rounded-xl object-cover bg-white shadow-sm" />
                  ) : (
                    <div className="w-16 h-16 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-teal-50 group-hover:text-teal-600 transition-colors">
                      <Building2 className="w-8 h-8" />
                    </div>
                  )}
                  <div>
                    <h3 className="font-bold text-xl text-slate-900 group-hover:text-teal-700 transition-colors">{company.name}</h3>
                    <div className="flex items-center text-sm text-slate-500 mt-1">
                      <span className="flex items-center text-yellow-500 font-bold mr-2">
                        ★ {company.rating}
                      </span>
                      <span>{company.location}</span>
                    </div>
                  </div>
                </div>
                <p className="text-slate-600 text-sm line-clamp-2 mb-6 leading-relaxed">
                  {company.shortDescription}
                </p>
                {company.isHiring && (
                  <span className="inline-flex items-center bg-teal-50 text-teal-700 text-xs font-bold px-3 py-1.5 rounded-lg border border-teal-100 group-hover:bg-teal-600 group-hover:text-white group-hover:border-transparent transition-all">
                    Hiring Now
                  </span>
                )}
              </Link>
            ))}
          </div>
          
          <div className="mt-10 md:hidden text-center">
            <Link to="/companies" className="text-teal-600 font-bold hover:text-teal-800">View all companies &rarr;</Link>
          </div>
        </div>
      </section>

      {/* Industry Pills */}
      <section className="bg-white/40 py-20 border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-10">Browse by Industry</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map(ind => (
              <Link to={`/companies?industry=${ind}`} key={ind} className="glass-card text-slate-700 px-6 py-3 rounded-full font-medium hover:border-teal-500 hover:text-teal-700 transition-all">
                {ind}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Newsletter */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-600 rounded-full mix-blend-overlay filter blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-600 rounded-full mix-blend-overlay filter blur-3xl opacity-30 translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to find your dream job?</h2>
          <p className="text-slate-300 mb-10 text-xl max-w-2xl mx-auto">Join AllNews to get personalized job recommendations and salary insights delivered to your inbox.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-lg mx-auto">
            <input type="email" placeholder="Enter your email" className="px-6 py-4 rounded-xl flex-1 outline-none focus:ring-4 focus:ring-teal-500/50 text-slate-900 placeholder-slate-400 bg-white/95 backdrop-blur" />
            <button className="bg-teal-500 hover:bg-teal-400 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Get Started
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;