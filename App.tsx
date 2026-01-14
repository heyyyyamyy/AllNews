import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Search, Briefcase, DollarSign, Building2, User, ChevronRight, Star } from 'lucide-react';

// Pages
import Home from './pages/Home';
import Companies from './pages/Companies';
import CompanyDetail from './pages/CompanyDetail';
import Reviews from './pages/Reviews';
import Salaries from './pages/Salaries';
import Jobs from './pages/Jobs';
import SimplePage from './pages/SimplePage';
import Careers from './pages/Careers';
import Employers from './pages/Employers';
import PostJob from './pages/PostJob';
import Contact from './pages/Contact';
import Press from './pages/Press';
import Legal from './pages/Legal';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path ? 'text-teal-600 font-bold after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-teal-600' : 'text-slate-600 hover:text-teal-600 font-medium';

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-xl border-b border-white/50 shadow-sm' : 'bg-transparent border-b border-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2 group">
              <div className="w-9 h-9 bg-teal-600 rounded-lg flex items-center justify-center shadow-lg shadow-teal-500/20 group-hover:bg-teal-700 transition-colors">
                <Building2 className="text-white w-5 h-5" />
              </div>
              <span className="font-extrabold text-xl tracking-tight text-slate-900 group-hover:text-teal-600 transition-colors">All<span className="text-teal-600">News</span></span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6 h-full items-center">
                <Link to="/companies" className={`relative py-5 transition-colors ${isActive('/companies')}`}>Companies</Link>
                <Link to="/reviews" className={`relative py-5 transition-colors ${isActive('/reviews')}`}>Reviews</Link>
                <Link to="/salaries" className={`relative py-5 transition-colors ${isActive('/salaries')}`}>Salaries</Link>
                <Link to="/jobs" className={`relative py-5 transition-colors ${isActive('/jobs')}`}>Jobs</Link>
            </div>
            <div className="pl-6 border-l border-slate-200/60 flex items-center gap-4">
              <Link to="/login" className="text-slate-600 hover:text-teal-600 font-semibold transition-colors">Sign In</Link>
              <Link to="/join" className="bg-teal-600 hover:bg-teal-700 text-white px-5 py-2.5 rounded-lg font-bold transition-all shadow-lg shadow-teal-500/20 hover:shadow-teal-500/30 text-sm">
                Join Now
              </Link>
            </div>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-500 hover:text-teal-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden glass-card border-t border-slate-100 absolute w-full animate-fade-in rounded-b-2xl">
          <div className="px-4 pt-2 pb-6 space-y-1">
            <Link to="/companies" onClick={() => setIsOpen(false)} className="block px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:text-teal-600 hover:bg-teal-50">Companies</Link>
            <Link to="/reviews" onClick={() => setIsOpen(false)} className="block px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:text-teal-600 hover:bg-teal-50">Reviews</Link>
            <Link to="/salaries" onClick={() => setIsOpen(false)} className="block px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:text-teal-600 hover:bg-teal-50">Salaries</Link>
            <Link to="/jobs" onClick={() => setIsOpen(false)} className="block px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:text-teal-600 hover:bg-teal-50">Jobs</Link>
            <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-3 px-3">
              <Link to="/login" className="text-center w-full py-3 text-slate-600 font-bold hover:text-teal-600">Sign In</Link>
              <Link to="/join" className="text-center w-full bg-teal-600 text-white py-3 rounded-lg font-bold shadow-md">Join Now</Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-white border-t border-slate-200 pt-16 pb-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
        <div>
          <h3 className="font-bold text-slate-900 mb-4 text-lg">AllNews</h3>
          <ul className="space-y-3 text-sm text-slate-500">
            <li><Link to="/about" className="hover:text-teal-600 transition-colors">About Us</Link></li>
            <li><Link to="/careers" className="hover:text-teal-600 transition-colors">Careers</Link></li>
            <li><Link to="/press" className="hover:text-teal-600 transition-colors">Press</Link></li>
            <li><Link to="/contact" className="hover:text-teal-600 transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-slate-900 mb-4 text-lg">Employers</h3>
          <ul className="space-y-3 text-sm text-slate-500">
            <li><Link to="/employers" className="hover:text-teal-600 transition-colors">Get a Free Employer Account</Link></li>
            <li><Link to="/employers" className="hover:text-teal-600 transition-colors">Employer Center</Link></li>
            <li><Link to="/post-job" className="hover:text-teal-600 transition-colors">Post a Job</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-slate-900 mb-4 text-lg">Community</h3>
          <ul className="space-y-3 text-sm text-slate-500">
            <li><Link to="/contact" className="hover:text-teal-600 transition-colors">Help / Contact Us</Link></li>
            <li><Link to="/guidelines" className="hover:text-teal-600 transition-colors">Guidelines</Link></li>
            <li><Link to="/terms" className="hover:text-teal-600 transition-colors">Terms of Use</Link></li>
            <li><Link to="/privacy" className="hover:text-teal-600 transition-colors">Privacy & Cookies</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-slate-900 mb-4 text-lg">Work With Us</h3>
          <p className="text-sm text-slate-500 mb-4">Join our newsletter to get the latest career insights.</p>
          <div className="flex gap-2">
            <input type="email" placeholder="Email address" className="flex-1 px-4 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 transition-shadow bg-slate-50" />
            <button className="bg-teal-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-teal-700 transition-colors shadow-sm">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
        <p>© 2024 AllNews. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-teal-600 transition-colors">Facebook</a>
          <a href="#" className="hover:text-teal-600 transition-colors">Twitter</a>
          <a href="#" className="hover:text-teal-600 transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-teal-600 transition-colors">Instagram</a>
        </div>
      </div>
    </div>
  </footer>
);

const App = () => {
  return (
    <Router>
      <div className="min-h-screen w-full flex flex-col bg-slate-50 font-sans overflow-x-hidden text-slate-900">
        <Navbar />
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/companies" element={<Companies />} />
            <Route path="/companies/:id" element={<CompanyDetail />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/salaries" element={<Salaries />} />
            <Route path="/jobs" element={<Jobs />} />
            
            {/* New Pages */}
            <Route path="/careers" element={<Careers />} />
            <Route path="/employers" element={<Employers />} />
            <Route path="/post-job" element={<PostJob />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/press" element={<Press />} />
            <Route path="/guidelines" element={<Legal type="guidelines" />} />
            <Route path="/terms" element={<Legal type="terms" />} />
            <Route path="/privacy" element={<Legal type="privacy" />} />
            <Route path="/about" element={<SimplePage type="About" />} />
            
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;