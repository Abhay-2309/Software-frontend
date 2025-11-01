import React from 'react';
import { Sparkles, Search, ChevronDown, Plus } from 'lucide-react';
import { motion } from 'framer-motion';

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
    <div className='min-h-screen'>
      {/* Hero Section */}
      <section className='bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='text-center'
          >
            <motion.img
              src='/Logo.png'
              alt='Hackathon 2026 Logo'
              className='w-32 h-32 mx-auto mb-8'
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            />
            <h1 className='text-4xl md:text-6xl font-bold mb-6'>
              Hackathon 2026
            </h1>
            <p className='mt-6 text-lg text-gray-400'>
              Explore opportunities from across the globe to grow, showcase
              skills, gain CV points & get hired by your dream company.
            </p>
            <a
              href='/register'
              className='bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors'
            >
              Register Now
            </a>
          </motion.div>
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
            imageSrc='https.placehold.co/100x100/FEF9C3/854D0E?text=College'
          />
        </div>
      </section>
    </div>
  );
};

export default App;
