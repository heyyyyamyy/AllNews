import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, BarChart3, Users, Search, Briefcase } from 'lucide-react';

const Employers = () => {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-slate-900 pt-24 pb-32 text-white relative overflow-hidden">
         <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-teal-900/40 to-transparent"></div>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <div className="max-w-2xl">
             <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
               Hire the best talent <br/>
               <span className="text-teal-400">faster than ever</span>.
             </h1>
             <p className="text-xl text-slate-300 mb-8 leading-relaxed">
               Join over 10,000 companies using AllNews to build their brand, attract top candidates, and make data-driven hiring decisions.
             </p>
             <div className="flex flex-col sm:flex-row gap-4">
               <button className="bg-teal-500 hover:bg-teal-400 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg hover:shadow-teal-500/30 text-lg">
                 Get a Free Employer Account
               </button>
               <button className="bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-xl transition-all backdrop-blur-sm border border-white/20">
                 Contact Sales
               </button>
             </div>
             <p className="mt-4 text-sm text-slate-400 font-medium">No credit card required for basic accounts.</p>
           </div>
         </div>
      </section>

      {/* Stats / Trust */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <p className="text-center text-slate-500 font-semibold mb-6 text-sm uppercase tracking-widest">Trusted by industry leaders</p>
          <div className="flex flex-wrap justify-center gap-12 grayscale opacity-60">
             {/* Placeholders for logos */}
             <div className="text-2xl font-bold text-slate-400">TechCorp</div>
             <div className="text-2xl font-bold text-slate-400">GlobalBank</div>
             <div className="text-2xl font-bold text-slate-400">HealthPlus</div>
             <div className="text-2xl font-bold text-slate-400">EduSystems</div>
             <div className="text-2xl font-bold text-slate-400">LogistiCo</div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Everything you need to recruit</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">From branding to sourcing, our employer center has the tools to help you succeed.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card p-8 rounded-2xl">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                <Briefcase className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Employer Branding</h3>
              <p className="text-slate-600 leading-relaxed">
                Showcase your culture, benefits, and values. Claim your company page and respond to reviews to build trust with candidates.
              </p>
            </div>
            <div className="glass-card p-8 rounded-2xl">
              <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center text-teal-600 mb-6">
                <Search className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Targeted Sourcing</h3>
              <p className="text-slate-600 leading-relaxed">
                Use advanced filters to find candidates that match your exact requirements. Reach out directly to top talent.
              </p>
            </div>
            <div className="glass-card p-8 rounded-2xl">
              <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 mb-6">
                <BarChart3 className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Analytics & Insights</h3>
              <p className="text-slate-600 leading-relaxed">
                Track the performance of your job postings and brand page. Compare your salary data against competitors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing / CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <h2 className="text-3xl font-bold text-slate-900 mb-6">Ready to grow your team?</h2>
           <div className="glass-card bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-3xl p-10 md:p-14 shadow-xl relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">Start with a Free Account</h3>
                <ul className="text-left max-w-md mx-auto space-y-3 mb-8 text-slate-300">
                  <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-teal-400" /> Claim your company profile</li>
                  <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-teal-400" /> Respond to employee reviews</li>
                  <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-teal-400" /> Post up to 1 job for free</li>
                </ul>
                <button className="bg-teal-500 hover:bg-teal-400 text-white font-bold px-10 py-4 rounded-xl transition-all shadow-lg transform hover:-translate-y-1">
                  Create Employer Account
                </button>
              </div>
              
              {/* Decorative circles */}
              <div className="absolute top-[-50px] right-[-50px] w-64 h-64 bg-teal-600/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-[-50px] left-[-50px] w-64 h-64 bg-purple-600/20 rounded-full blur-3xl"></div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Employers;