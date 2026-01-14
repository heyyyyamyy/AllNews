import React from 'react';
import { Download, ExternalLink } from 'lucide-react';

const Press = () => {
  const news = [
    { date: "Oct 12, 2024", title: "AllNews Raises Series B to Revolutionize Hiring Transparency", source: "TechCrunch" },
    { date: "Sep 05, 2024", title: "The Future of Work: Interview with CEO Jane Doe", source: "Forbes" },
    { date: "Aug 22, 2024", title: "New Salary Transparency Tools Launched by AllNews", source: "Business Insider" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Newsroom</h1>
          <p className="text-xl text-slate-600">Latest news, updates, and resources from AllNews.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
           <div className="lg:col-span-2">
             <h2 className="text-2xl font-bold text-slate-900 mb-8 border-b border-slate-200 pb-4">In the News</h2>
             <div className="space-y-8">
               {news.map((item, idx) => (
                 <div key={idx} className="group cursor-pointer">
                   <div className="text-sm text-teal-600 font-bold mb-2">{item.date} — {item.source}</div>
                   <h3 className="text-2xl font-bold text-slate-900 group-hover:text-teal-700 transition-colors mb-2">
                     {item.title}
                   </h3>
                   <div className="flex items-center text-slate-500 text-sm font-medium">
                     Read Article <ExternalLink className="w-4 h-4 ml-1" />
                   </div>
                 </div>
               ))}
             </div>
           </div>

           <div>
              <div className="glass-card p-8 rounded-2xl sticky top-24">
                 <h2 className="text-xl font-bold text-slate-900 mb-6">Media Resources</h2>
                 <p className="text-slate-600 mb-6 text-sm">
                   Download official logos, photos of our leadership team, and brand guidelines for media use.
                 </p>
                 <div className="space-y-4">
                   <button className="w-full flex items-center justify-between p-4 bg-white border border-slate-200 rounded-xl hover:border-teal-300 transition-colors group">
                     <span className="font-bold text-slate-700 group-hover:text-teal-700">Brand Assets Kit</span>
                     <Download className="w-5 h-5 text-slate-400 group-hover:text-teal-600" />
                   </button>
                   <button className="w-full flex items-center justify-between p-4 bg-white border border-slate-200 rounded-xl hover:border-teal-300 transition-colors group">
                     <span className="font-bold text-slate-700 group-hover:text-teal-700">Leadership Photos</span>
                     <Download className="w-5 h-5 text-slate-400 group-hover:text-teal-600" />
                   </button>
                 </div>
                 <div className="mt-8 pt-6 border-t border-slate-200">
                   <h4 className="font-bold text-slate-900 mb-2">Press Contact</h4>
                   <a href="mailto:press@allnews.com" className="text-teal-600 hover:underline">press@allnews.com</a>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Press;