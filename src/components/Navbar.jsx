import React, { useState } from 'react';
import { Sparkles, Search, ChevronDown, Plus, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

// --- Header Navigation ---
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='bg-black border-b border-gray-700 w-full'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          {/* Left Side: Logo, Search, Links */}
          <div className='flex items-center space-x-6'>
            {/* Logo */}
            <Link to='/' className='text-3xl font-bold text-blue-600'>
              HireEZ
            </Link>

            {/* Search Bar (Desktop) */}
            <div className='relative hidden md:block'>
              <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                <Search className='h-5 w-5 text-gray-400' />
              </div>
              <input
                type='text'
                placeholder='Search Opportunities'
                className='bg-gray-800 border border-gray-600 text-white rounded-lg pl-10 pr-4 py-2 text-sm focus:ring-blue-500 focus:border-blue-500'
              />
            </div>

            {/* Nav Links (Desktop) */}
            <div className='hidden lg:flex items-center space-x-6'>
              <Link
                to='/internships'
                className='text-gray-300 hover:text-white'
              >
                Internships
              </Link>
              <Link to='/jobs' className='text-gray-300 hover:text-white'>
                Jobs
              </Link>
              <Link
                to='/competitions'
                className='text-gray-300 hover:text-white'
              >
                Competitions
              </Link>
              <Link
                to='/mentorships'
                className='text-gray-300 hover:text-white'
              >
                Mentorships
              </Link>
              <Link to='/practice' className='text-gray-300 hover:text-white'>
                Practice
              </Link>
              <Link
                to='/more'
                className='flex items-center text-gray-300 hover:text-white'
              >
                More <ChevronDown className='h-4 w-4 ml-1' />
              </Link>
            </div>
          </div>

          {/* Right Side: Buttons (Desktop) */}
          <div className='hidden md:flex items-center space-x-4'>
            <Link
              to='/host'
              className='flex items-center text-gray-300 hover:text-white'
            >
              <Plus className='h-4 w-4 mr-1' /> Host
            </Link>
            <Link
              to='/business'
              className='text-gray-300 bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg text-sm font-medium'
            >
              For Business
            </Link>
            <Link
              to='/login'
              className='text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm font-medium'
            >
              Login
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className='md:hidden flex items-center'>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='text-gray-400 hover:text-white focus:outline-none'
            >
              <span className='sr-only'>Open main menu</span>
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className='md:hidden'>
          <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
            {/* Mobile Search */}
            <div className='relative mb-2'>
              <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                <Search className='h-5 w-5 text-gray-400' />
              </div>
              <input
                type='text'
                placeholder='Search Opportunities'
                className='w-full bg-gray-800 border border-gray-600 text-white rounded-lg pl-10 pr-4 py-2 text-sm focus:ring-blue-500 focus:border-blue-500'
              />
            </div>

            <Link
              to='/internships'
              className='text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
            >
              Internships
            </Link>
            <Link
              to='/jobs'
              className='text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
            >
              Jobs
            </Link>
            <Link
              to='/competitions'
              className='text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
            >
              Competitions
            </Link>
            <Link
              to='/mentorships'
              className='text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
            >
              Mentorships
            </Link>
            <Link
              to='/practice'
              className='text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
            >
              Practice
            </Link>
            <Link
              to='/more'
              className='text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
            >
              More
            </Link>

            <div className='border-t border-gray-700 pt-4 mt-4 space-y-2'>
              <Link
                to='/host'
                className='flex items-center text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
              >
                <Plus className='h-4 w-4 mr-1' /> Host
              </Link>
              <Link
                to='/business'
                className='text-gray-300 bg-gray-700 hover:bg-gray-600 block px-3 py-2 rounded-md text-base font-medium text-center'
              >
                For Business
              </Link>
              <Link
                to='/login'
                className='text-white bg-blue-600 hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium text-center'
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

// --- Hero Section Feature Card ---
const FeatureCard = ({ title, subtitle, icon, bgColor, imageSrc }) => {
  return (
    <div
      className={`relative ${bgColor} p-6 rounded-xl overflow-hidden flex flex-col justify-between h-full`}
    >
      <div>
        <h3 className='text-2xl font-bold text-white'>{title}</h3>
        <p className='text-gray-300 mt-1'>{subtitle}</p>
      </div>
      <div className='flex justify-end mt-4'>
        <img
          src={imageSrc}
          alt={title}
          className='h-24 w-auto object-contain'
          onError={(e) => {
            e.target.src =
              'https://placehold.co/150x100/CCCCCC/333333?text=Image';
            e.target.onerror = null;
          }}
        />
      </div>
    </div>
  );
};

// --- "Who's using" Card ---
const UserTypeCard = ({ title, description, imageSrc, bgColor }) => {
  return (
    <div
      className={`flex justify-between items-center ${bgColor} p-6 rounded-xl`}
    >
      <div className='flex-1 pr-4'>
        <h3 className='text-xl font-bold text-white'>{title}</h3>
        <p className='text-gray-300 mt-2 text-sm'>{description}</p>
      </div>
      <img
        src={imageSrc}
        alt={title}
        className='w-24 h-24 rounded-full object-cover'
        onError={(e) => {
          e.target.src =
            'https://placehold.co/100x100/CCCCCC/333333?text=Person';
          e.target.onerror = null;
        }}
      />
    </div>
  );
};

// --- Main Home Component ---
const App = () => {
  return (
    <div className='min-h-screen bg-black text-white font-inter'>
      {/* Header */}
      <Navbar />

      {/* Main Content Area */}
      <main className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        {/* Hero Section */}
        <section className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          {/* Left Side */}
          <div className='flex flex-col justify-center'>
            <h1 className='text-5xl md:text-6xl font-extrabold text-white leading-tight'>
              Unlock Your Career
            </h1>
            <p className='mt-6 text-lg text-gray-400'>
              Explore opportunities from across the globe to grow, showcase
              skills, gain CV points & get hired by your dream company.
            </p>
            <div className='mt-8 bg-gray-800 p-4 rounded-xl shadow-md border border-gray-700 flex items-center space-x-3 max-w-sm'>
              <div className='bg-purple-900 p-2 rounded-full'>
                <Sparkles className='h-5 w-5 text-purple-300' />
              </div>
              <div>
                <span className='font-semibold text-white'>Kenya</span>
                <span className='text-gray-400'> Just Went HireEZ Pro!</span>
              </div>
            </div>
          </div>

          {/* Right Side (Feature Grid) */}
          <div className='grid grid-cols-2 gap-4'>
            <Link to='/internships' className='block'>
              <FeatureCard
                title='Internships'
                subtitle='Gain Practical Experience'
                bgColor='bg-gradient-to-br from-gray-800 to-green-900'
                imageSrc='https://placehold.co/150x100/A7F3D0/166534?text=Interns'
              />
            </Link>
            <FeatureCard
              title='Mentorships'
              subtitle='Guidance From Top Mentors'
              bgColor='bg-gradient-to-br from-gray-800 to-orange-900'
              imageSrc='https://placehold.co/150x100/FFEDD5/9A3412?text=Mentor'
            />
            <FeatureCard
              title='Jobs'
              subtitle='Explore Diverse Careers'
              bgColor='bg-gradient-to-br from-gray-800 to-blue-900'
              imageSrc='https://placehold.co/150x100/DBEAFE/1E40AF?text=Jobs'
            />
            <FeatureCard
              title='Practice'
              subtitle='Refine Skills Daily'
              bgColor='bg-gradient-to-br from-gray-800 to-purple-900'
              imageSrc='https://placehold.co/150x100/E9D5FF/5B21B6?text=Practice'
            />
            <FeatureCard
              title='Competitions'
              subtitle='Battle For Excellence'
              bgColor='bg-gradient-to-br from-gray-800 to-yellow-900'
              imageSrc='https.placehold.co/150x100/FEF9C3/854D0E?text=Trophy'
            />
            <FeatureCard
              title='More'
              subtitle='Explore More'
              bgColor='bg-gradient-to-br from-gray-800 to-pink-900'
              imageSrc='https://placehold.co/150x100/FCE7F3/9D174D?text=More'
            />
          </div>
        </section>

        {/* Who's using HireEZ? Section */}
        <section className='mt-24'>
          <h2 className='text-3xl font-bold text-white mb-8'>
            Who's using HireEZ?
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <UserTypeCard
              title='Students and Professionals'
              description='Unlock Your Potential: Compete, Build Resume, Grow and get Hired!'
              bgColor='bg-gray-800'
              imageSrc='https://placehold.co/100x100/DBEAFE/1E40AF?text=Student'
            />
            <UserTypeCard
              title='Companies and Recruiters'
              description='Discover Right Talent: Hire, Engage, and Brand Like Never Before!'
              bgColor='bg-gray-800'
              imageSrc='https://placehold.co/100x100/E9D5FF/5B21B6?text=Recruiter'
            />
            <UserTypeCard
              title='Colleges'
              description='Bridge Academia and Industry: Empower Students with Ideal World Opportunities!'
              bgColor='bg-gray-800'
              imageSrc='https://placehold.co/100x100/FEF9C3/854D0E?text=College'
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
