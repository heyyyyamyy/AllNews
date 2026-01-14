import React from 'react';
import { Link } from 'react-router-dom';

const SimplePage = ({ type }: { type: string }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
      <div className="bg-white rounded-2xl p-12 shadow-sm border border-slate-200 max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">{type}</h1>
        <p className="text-slate-600 mb-8">
          This is a demonstration page for the <strong>{type}</strong> section. 
          In a full production build, this would contain specific functionality for searching and filtering {type.toLowerCase()}.
        </p>
        <Link 
          to="/" 
          className="inline-block bg-teal-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-teal-700 transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default SimplePage;