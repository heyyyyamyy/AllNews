import React from 'react';
import { Mail, MessageSquare, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Get in touch</h1>
          <p className="text-xl text-slate-600">We are here to help. Chat with our team.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Info Cards */}
          <div className="space-y-6">
             <div className="glass-card p-6 rounded-2xl">
               <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center text-teal-600 mb-4">
                 <MessageSquare className="w-5 h-5" />
               </div>
               <h3 className="font-bold text-slate-900 mb-2">Chat with support</h3>
               <p className="text-slate-600 text-sm mb-4">We are here to help with any questions about your account.</p>
               <a href="#" className="text-teal-600 font-bold text-sm hover:underline">Start a chat &rarr;</a>
             </div>

             <div className="glass-card p-6 rounded-2xl">
               <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                 <Mail className="w-5 h-5" />
               </div>
               <h3 className="font-bold text-slate-900 mb-2">Email</h3>
               <p className="text-slate-600 text-sm mb-4">Drop us a line and we will get back to you within 24 hours.</p>
               <a href="mailto:support@allnews.com" className="text-teal-600 font-bold text-sm hover:underline">support@allnews.com</a>
             </div>

             <div className="glass-card p-6 rounded-2xl">
               <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mb-4">
                 <MapPin className="w-5 h-5" />
               </div>
               <h3 className="font-bold text-slate-900 mb-2">Office</h3>
               <p className="text-slate-600 text-sm mb-4">
                 123 Innovation Drive<br/>
                 San Francisco, CA 94103
               </p>
               <a href="#" className="text-teal-600 font-bold text-sm hover:underline">View on map &rarr;</a>
             </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <div className="glass-card bg-white p-8 md:p-10 rounded-2xl">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Send us a message</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                   <div>
                     <label className="block text-sm font-bold text-slate-900 mb-2">First name</label>
                     <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none bg-slate-50" />
                   </div>
                   <div>
                     <label className="block text-sm font-bold text-slate-900 mb-2">Last name</label>
                     <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none bg-slate-50" />
                   </div>
                </div>
                <div>
                   <label className="block text-sm font-bold text-slate-900 mb-2">Email</label>
                   <input type="email" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none bg-slate-50" />
                </div>
                <div>
                   <label className="block text-sm font-bold text-slate-900 mb-2">Message</label>
                   <textarea rows={5} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none bg-slate-50"></textarea>
                </div>
                <button type="submit" className="w-full bg-teal-600 text-white font-bold py-4 rounded-xl hover:bg-teal-700 transition-colors shadow-lg">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;