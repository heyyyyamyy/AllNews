import React, { useState } from 'react';
import { ArrowLeft, Check, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const PostJob = () => {
  const [step, setStep] = useState(1);

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-8 flex items-center gap-4">
           <Link to="/employers" className="text-slate-500 hover:text-slate-700 transition-colors">
             <ArrowLeft className="w-6 h-6" />
           </Link>
           <h1 className="text-3xl font-bold text-slate-900">Post a Job</h1>
        </div>

        {/* Progress Bar */}
        <div className="flex items-center mb-8 text-sm font-medium">
           <div className={`flex items-center gap-2 ${step >= 1 ? 'text-teal-600' : 'text-slate-400'}`}>
             <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${step >= 1 ? 'border-teal-600 bg-teal-50' : 'border-slate-300'}`}>1</div>
             Job Details
           </div>
           <div className="w-12 h-0.5 bg-slate-200 mx-4"></div>
           <div className={`flex items-center gap-2 ${step >= 2 ? 'text-teal-600' : 'text-slate-400'}`}>
             <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${step >= 2 ? 'border-teal-600 bg-teal-50' : 'border-slate-300'}`}>2</div>
             Review
           </div>
           <div className="w-12 h-0.5 bg-slate-200 mx-4"></div>
           <div className={`flex items-center gap-2 ${step >= 3 ? 'text-teal-600' : 'text-slate-400'}`}>
             <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${step >= 3 ? 'border-teal-600 bg-teal-50' : 'border-slate-300'}`}>3</div>
             Payment
           </div>
        </div>

        <div className="glass-card bg-white p-8 rounded-2xl shadow-sm">
          {step === 1 && (
            <div className="space-y-6">
               <div>
                 <label className="block text-sm font-bold text-slate-900 mb-2">Job Title</label>
                 <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none" placeholder="e.g. Senior Software Engineer" />
               </div>
               
               <div>
                 <label className="block text-sm font-bold text-slate-900 mb-2">Company</label>
                 <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none" placeholder="Your Company Name" />
               </div>

               <div className="grid md:grid-cols-2 gap-6">
                 <div>
                   <label className="block text-sm font-bold text-slate-900 mb-2">Location</label>
                   <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none" placeholder="e.g. Remote, New York" />
                 </div>
                 <div>
                   <label className="block text-sm font-bold text-slate-900 mb-2">Employment Type</label>
                   <select className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none">
                     <option>Full-time</option>
                     <option>Part-time</option>
                     <option>Contract</option>
                     <option>Internship</option>
                   </select>
                 </div>
               </div>

               <div>
                 <label className="block text-sm font-bold text-slate-900 mb-2">Job Description</label>
                 <textarea rows={6} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none" placeholder="Describe the role, responsibilities, and requirements..."></textarea>
               </div>
               
               <div className="pt-4 flex justify-end">
                 <button onClick={() => setStep(2)} className="bg-teal-600 text-white font-bold px-8 py-3 rounded-xl hover:bg-teal-700 transition-colors">
                   Continue
                 </button>
               </div>
            </div>
          )}

          {step === 2 && (
            <div className="text-center py-10">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6 text-teal-600">
                <Check className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Looks good!</h2>
              <p className="text-slate-600 mb-8">This is a demo, so we'll skip the actual posting process.</p>
              
              <div className="flex justify-center gap-4">
                <button onClick={() => setStep(1)} className="px-6 py-3 border border-slate-300 rounded-xl font-bold text-slate-700 hover:bg-slate-50">
                  Back
                </button>
                <button onClick={() => setStep(3)} className="bg-teal-600 text-white font-bold px-8 py-3 rounded-xl hover:bg-teal-700 transition-colors">
                  Post Job Now
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
             <div className="text-center py-10">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Job Posted Successfully!</h2>
                <p className="text-slate-600 mb-8">Your listing is now live and visible to thousands of candidates.</p>
                <Link to="/employers" className="bg-teal-600 text-white font-bold px-8 py-3 rounded-xl hover:bg-teal-700 transition-colors">
                  Return to Dashboard
                </Link>
             </div>
          )}
        </div>
        
        <div className="mt-8 flex items-start gap-3 p-4 bg-blue-50 border border-blue-100 rounded-xl text-blue-800 text-sm">
           <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
           <p>
             <strong>Pro Tip:</strong> Job posts with salary ranges receive 2x more applicants on average. We recommend being transparent about compensation.
           </p>
        </div>
      </div>
    </div>
  );
};

export default PostJob;