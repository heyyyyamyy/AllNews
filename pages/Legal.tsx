import React from 'react';

interface LegalProps {
  type: 'terms' | 'privacy' | 'guidelines';
}

const Legal = ({ type }: LegalProps) => {
  const content = {
    terms: {
      title: "Terms of Use",
      lastUpdated: "January 1, 2024",
      body: (
        <>
          <p>Welcome to AllNews. By accessing our website, you agree to be bound by these Terms of Use, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.</p>
          <h3>1. Use License</h3>
          <p>Permission is granted to temporarily download one copy of the materials (information or software) on AllNews's website for personal, non-commercial transitory viewing only.</p>
          <h3>2. Disclaimer</h3>
          <p>The materials on AllNews's website are provided on an 'as is' basis. AllNews makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
        </>
      )
    },
    privacy: {
      title: "Privacy Policy",
      lastUpdated: "January 15, 2024",
      body: (
        <>
          <p>Your privacy is important to us. It is AllNews's policy to respect your privacy regarding any information we may collect from you across our website.</p>
          <h3>Information We Collect</h3>
          <p>We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent.</p>
          <h3>How We Use Your Data</h3>
          <p>We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy.</p>
        </>
      )
    },
    guidelines: {
      title: "Community Guidelines",
      lastUpdated: "February 10, 2024",
      body: (
        <>
          <p>AllNews is a community built on trust and transparency. To maintain this environment, we ask that all users adhere to the following guidelines.</p>
          <h3>Be Honest and Accurate</h3>
          <p>Your reviews should be based on your own genuine experiences. Do not post false or misleading information.</p>
          <h3>Be Respectful</h3>
          <p>We do not tolerate hate speech, harassment, or personal attacks. Constructive criticism is welcome; abuse is not.</p>
        </>
      )
    }
  };

  const data = content[type];

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card bg-white p-10 md:p-16 rounded-2xl shadow-sm">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">{data.title}</h1>
          <p className="text-slate-500 mb-10 text-sm">Last Updated: {data.lastUpdated}</p>
          
          <div className="prose prose-slate prose-lg max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-p:text-slate-600 prose-a:text-teal-600">
            {data.body}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Legal;