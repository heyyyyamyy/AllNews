import React from 'react';
import { ArrowRight, CheckCircle, Heart, Zap, Coffee, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Careers = () => {
  const benefits = [
    { icon: <Heart className="w-6 h-6 text-red-500" />, title: "Health & Wellness", desc: "Comprehensive medical, dental, and vision coverage for you and your family." },
    { icon: <Zap className="w-6 h-6 text-yellow-500" />, title: "Flexible Work", desc: "Remote-first culture with flexible hours to help you balance work and life." },
    { icon: <Coffee className="w-6 h-6 text-amber-700" />, title: "Perks & Stipends", desc: "Home office stipend, learning budget, and monthly wellness allowance." },
    { icon: <Globe className="w-6 h-6 text-teal-500" />, title: "Global Team", desc: "Work with talented people from over 15 countries around the world." },
  ];

  const positions = [
    { title: "Senior Frontend Engineer", dept: "Engineering", location: "Remote (US/EU)", type: "Full-time" },
    { title: "Product Manager, Growth", dept: "Product", location: "New York, NY", type: "Full-time" },
    { title: "Customer Success Specialist", dept: "Support", location: "Remote", type: "Full-time" },
    { title: "Data Scientist", dept: "Data", location: "San Francisco, CA", type: "Full-time" },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative pt-20 pb-32 bg-slate-900 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-teal-900/20 blur-3xl rounded-full translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-full bg-secondary-900/20 blur-3xl rounded-full -translate-x-1/3"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-teal-500/10 text-teal-400 font-semibold text-sm mb-6 border border-teal-500/20">
            We are hiring!
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-8">
            Help us build the future of <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-accent-400">career transparency</span>.
          </h1>
          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join a mission-driven team dedicated to helping millions of professionals make better career decisions every day.
          </p>
          <div className="flex justify-center gap-4">
            <a href="#positions" className="bg-teal-600 hover:bg-teal-500 text-white font-bold px-8 py-3.5 rounded-xl transition-all shadow-lg hover:shadow-teal-500/20">
              View Open Roles
            </a>
          </div>
        </div>
      </section>

      {/* Values/Benefits */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why AllNews?</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">We believe that happy employees build better products. Here is how we take care of our team.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((item, idx) => (
              <div key={idx} className="glass-card p-6 rounded-2xl hover:-translate-y-1 transition-transform duration-300">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm border border-slate-100">
                  {item.icon}
                </div>
                <h3 className="font-bold text-slate-900 mb-2 text-lg">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="positions" className="py-24 bg-white relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-10">Open Positions</h2>
          
          <div className="space-y-4">
            {positions.map((job, idx) => (
              <div key={idx} className="glass-card p-6 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 group hover:border-teal-300 transition-all cursor-pointer">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-teal-600 transition-colors">{job.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-slate-500 mt-2 font-medium">
                    <span>{job.dept}</span>
                    <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                    <span>{job.location}</span>
                    <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                    <span>{job.type}</span>
                  </div>
                </div>
                <div className="flex items-center text-teal-600 font-bold text-sm">
                  Apply Now <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center p-8 bg-slate-50 rounded-2xl border border-slate-100">
            <h3 className="font-bold text-slate-900 mb-2">Don't see the right role?</h3>
            <p className="text-slate-600 mb-4">We are always looking for talent. Send us your resume.</p>
            <a href="mailto:careers@allnews.com" className="text-teal-600 font-bold hover:underline">Email us at careers@allnews.com</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;