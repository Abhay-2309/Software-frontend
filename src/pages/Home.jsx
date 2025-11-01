import React from 'react';
import { Sparkles, Search, ChevronDown, Plus } from 'lucide-react';



// --- Hero Section Feature Card ---
const FeatureCard = ({ title, subtitle, icon, bgColor, imageSrc }) => {
  return (
    <div className={`relative ${bgColor} p-6 rounded-xl overflow-hidden flex flex-col justify-between h-full`}>
      <div>
        <h3 className="text-2xl font-bold text-white">{title}</h3>
        <p className="text-gray-300 mt-1">{subtitle}</p>
      </div>
      <div className="flex justify-end mt-4">
        <img 
          src={imageSrc} 
          alt={title} 
          className="h-24 w-auto object-contain" 
          onError={(e) => { e.target.src = 'https://placehold.co/150x100/CCCCCC/333333?text=Image'; e.target.onerror = null; }}
        />
      </div>
    </div>
  );
};

// --- "Who's using" Card ---
const UserTypeCard = ({ title, description, imageSrc, bgColor }) => {
  return (
    <div className={`flex justify-between items-center ${bgColor} p-6 rounded-xl`}>
      <div className="flex-1 pr-4">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="text-gray-300 mt-2 text-sm">{description}</p>
      </div>
      <img 
        src={imageSrc} 
        alt={title} 
        className="w-24 h-24 rounded-full object-cover" 
        onError={(e) => { e.target.src = 'https://placehold.co/100x100/CCCCCC/333333?text=Person'; e.target.onerror = null; }}
      />
    </div>
  );
};

// --- Main Home Component ---
const App = () => {
  return (
    <div className="min-h-screen bg-black text-white font-inter">

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Hero Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <div className="flex flex-col justify-center">
            <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">
              Unlock Your Career
            </h1>
            <p className="mt-6 text-lg text-gray-400">
              Explore opportunities from across the globe to grow, showcase skills, gain CV points & get hired by your dream company.
            </p>
            <div className="mt-8 bg-gray-800 p-4 rounded-xl shadow-md border border-gray-700 flex items-center space-x-3 max-w-sm">
              <div className="bg-purple-900 p-2 rounded-full">
                <Sparkles className="h-5 w-5 text-purple-300" />
              </div>
              <div>
                <span className="font-semibold text-white">Kenya</span>
                <span className="text-gray-400"> Just Went HireEZ Pro!</span>
              </div>
            </div>
          </div>
          
          {/* Right Side (Feature Grid) */}
          <div className="grid grid-cols-2 gap-4">
            <FeatureCard 
              title="Internships" 
              subtitle="Gain Practical Experience" 
              bgColor="bg-gradient-to-br from-gray-800 to-green-900"
              imageSrc="https://placehold.co/150x100/A7F3D0/166534?text=Interns"
            />
            <FeatureCard 
              title="Mentorships" 
              subtitle="Guidance From Top Mentors" 
              bgColor="bg-gradient-to-br from-gray-800 to-orange-900"
              imageSrc="https://placehold.co/150x100/FFEDD5/9A3412?text=Mentor"
            />
            <FeatureCard 
              title="Jobs" 
              subtitle="Explore Diverse Careers" 
              bgColor="bg-gradient-to-br from-gray-800 to-blue-900"
              imageSrc="https://placehold.co/150x100/DBEAFE/1E40AF?text=Jobs"
            />
            <FeatureCard 
              title="Practice" 
              subtitle="Refine Skills Daily" 
              bgColor="bg-gradient-to-br from-gray-800 to-purple-900"
              imageSrc="https://placehold.co/150x100/E9D5FF/5B21B6?text=Practice"
            />
            <FeatureCard 
              title="Competitions" 
              subtitle="Battle For Excellence" 
              bgColor="bg-gradient-to-br from-gray-800 to-yellow-900"
              imageSrc="https.placehold.co/150x100/FEF9C3/854D0E?text=Trophy"
            />
            <FeatureCard 
              title="More" 
              subtitle="Explore More" 
              bgColor="bg-gradient-to-br from-gray-800 to-pink-900"
              imageSrc="https://placehold.co/150x100/FCE7F3/9D174D?text=More"
            />
          </div>
        </section>

        {/* Who's using HireEZ? Section */}
        <section className="mt-24">
          <h2 className="text-3xl font-bold text-white mb-8">
            Who's using HireEZ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <UserTypeCard
              title="Students and Professionals"
              description="Unlock Your Potential: Compete, Build Resume, Grow and get Hired!"
              bgColor="bg-gray-800"
              imageSrc="https://placehold.co/100x100/DBEAFE/1E40AF?text=Student"
            />
            <UserTypeCard
              title="Companies and Recruiters"
              description="Discover Right Talent: Hire, Engage, and Brand Like Never Before!"
              bgColor="bg-gray-800"
              imageSrc="https://placehold.co/100x100/E9D5FF/5B21B6?text=Recruiter"
            />
            <UserTypeCard
              title="Colleges"
              description="Bridge Academia and Industry: Empower Students with Ideal World Opportunities!"
              bgColor="bg-gray-800"
              imageSrc="https.placehold.co/100x100/FEF9C3/854D0E?text=College"
            />
          </div>
        </section>
        
      </main>
    </div>
  );
};

export default App;





