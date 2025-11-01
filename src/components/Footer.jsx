// Add these imports at the top of the file
import {
  Mail,
  Phone,
  Instagram,
  Linkedin,
  Facebook,
  Twitter,
  Send,
  Youtube,
} from 'react-feather';
import { Sparkles } from 'heroicons-react';
import Navbar from './Navbar';
import FeatureCard from './FeatureCard';
import UserTypeCard from './UserTypeCard';

// --- Footer Component ---
const Footer = () => {
  return (
    <footer className='bg-[#0F172A] text-gray-400 py-12'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          {/* Column 1: Contact & Socials */}
          <div className='md:col-span-1 space-y-6'>
            <h3 className='text-3xl font-bold text-blue-500'>HireEZ</h3>
            <p className='text-sm'>Built with ❤️ in India for the world</p>

            <div>
              <h4 className='font-semibold text-white mb-2'>Stay Connected</h4>
              <p className='text-sm font-medium'>Sales Inquiries</p>
              <a
                href='mailto:sales@HireEZ.com'
                className='flex items-center space-x-2 text-sm hover:text-white'
              >
                <Mail size={16} /> <span>sales@HireEZ.com</span>
              </a>
              <a
                href='tel:+919311777388'
                className='flex items-center space-x-2 text-sm mt-2 hover:text-white'
              >
                <Phone size={16} /> <span>+91-9311777388</span>
              </a>
              <p className='text-xs mt-1'>(Mon to Fri, 9:30 AM to 6:30 PM)</p>
            </div>

            <div>
              <h4 className='font-semibold text-white mb-2'>
                Support Inquiries
              </h4>
              <a
                href='mailto:support@HireEZ.com'
                className='flex items-center space-x-2 text-sm hover:text-white'
              >
                <Mail size={16} /> <span>support@HireEZ.com</span>
              </a>
            </div>

            <div className='flex space-x-4'>
              <a href='#' className='hover:text-white'>
                <Instagram size={20} />
              </a>
              <a href='#' className='hover:text-white'>
                <Linkedin size={20} />
              </a>
              <a href='#' className='hover:text-white'>
                <Facebook size={20} />
              </a>
              <a href='#' className='hover:text-white'>
                <Twitter size={20} />
              </a>
              <a href='#' className='hover:text-white'>
                <Send size={20} />
              </a>{' '}
              {/* Telegram */}
              <a href='#' className='hover:text-white'>
                <Youtube size={20} />
              </a>
            </div>

            <div>
              <h4 className='font-semibold text-white mb-2'>Stay Updated</h4>
              <p className='text-sm mb-2'>
                We'll send you updates on the latest opportunities.
              </p>
              <div className='flex'>
                <input
                  type='email'
                  placeholder='Subscribe to our newsletter!'
                  className='bg-gray-800 text-white px-4 py-2 rounded-l-md text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
                <button className='bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-r-md'>
                  <Send size={20} />
                </button>
              </div>
            </div>
          </div>
{/* Column 2: Links (Products, Mentorship, Quick Links) */}
<div className='space-y-6'>
  <div>
    <h4 className='font-semibold text-white mb-3'>Products</h4>
    <ul className='space-y-2 text-sm'>
      <li>
        <a href='#' className='hover:text-white'>
          Brand & Engage
        </a>
      </li>
      <li>
        <a href='#' className='hover:text-white'>
          Source
        </a>
      </li>
      <li>
        <a href='#' className='hover:text-white'>
          Screen
        </a>
      </li>
      <li>
        <a href='#' className='hover:text-white'>
          Assess
        </a>
      </li>
      <li>
        <a href='#' className='hover:text-white'>
          Interview
        </a>
      </li>
      <li>
        <a href='#' className='hover:text-white'>
          Hiring Automation
        </a>
      </li>
    </ul>
  </div>
  <div>
    <h4 className='font-semibold text-white mb-3'>Mentorship</h4>
    <ul className='space-y-2 text-sm'>
      <li>
        <a href='#' className='hover:text-white'>
          Be a Mentor
        </a>
      </li>
      <li>
        <a href='#' className='hover:text-white'>
          Explore Mentors
        </a>
      </li>
      <li>
        <a href='#' className='hover:text-white'>
          Mentorship FAQs
        </a>
      </li>
      <li>
        <a href='#' className='hover:text-white'>
          Mentorship Blogs
        </a>
      </li>
    </ul>
  </div>
  <div>
    <h3 className='text-lg font-semibold mb-4'>Quick Links</h3>
    <ul className='space-y-2 text-sm'>
      <li>
        <a href='/app/about' className='text-gray-400 hover:text-white'>About</a>
      </li>
      <li>
        <a href='/app/schedule' className='text-gray-400 hover:text-white'>Schedule</a>
      </li>
      <li>
        <a href='/app/register' className='text-gray-400 hover:text-white'>Register</a>
      </li>
    </ul>
  </div>
</div>

          {/* Column 3: Links (Participate, Apply) */}
          <div className='space-y-6'>
            <div>
              <h4 className='font-semibold text-white mb-3'>Participate</h4>
              <ul className='space-y-2 text-sm'>
                <li>
                  <a href='#' className='hover:text-white'>
                    Competitions & Challenges
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-white'>
                    Assessments
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-white'>
                    Hackathons
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-white'>
                    Workshops & Webinars
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-white'>
                    Conferences
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-white'>
                    Cultural Events
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-white'>
                    College Festivals
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className='font-semibold text-white mb-3'>Apply</h4>
              <ul className='space-y-2 text-sm'>
                <li>
                  <a href='#' className='hover:text-white'>
                    Internships
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-white'>
                    Jobs
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-white'>
                    Scholarships
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 4: Links (Learn, Practice) */}
          <div className='space-y-6'>
            <div>
              <h4 className='font-semibold text-white mb-3'>Learn</h4>
              <ul className='space-y-2 text-sm'>
                <li>
                  <a href='#' className='hover:text-white'>
                    Courses
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-white'>
                    Articles
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-white'>
                    Blog Series
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-white'>
                    Workshops
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className='font-semibold text-white mb-3'>Practice</h4>
              <ul className='space-y-2 text-sm'>
                <li>
                  <a href='#' className='hover:text-white'>
                    5 Days Interview Prep
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-white'>
                    Code & Ace Hiring
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-white'>
                    Assessments
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-white'>
                    100-Day of Coding
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-white'>
                    Sprint
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='mt-10 pt-8 border-t border-gray-700'>
          <div className='flex flex-wrap justify-between items-center text-sm'>
            <div className='mb-4 md:mb-0'>
              <h4 className='font-semibold text-white mb-2'>Our Properties</h4>
              <a href='#' className='hover:text-white'>
                HireEZ Talent Awards 2025
              </a>
            </div>
            <div className='flex flex-wrap gap-x-6 gap-y-2'>
              <a href='#' className='hover:text-white'>
                About Us
              </a>
              <a href='#' className='hover:text-white'>
                Contact Us
              </a>
              <a href='#' className='hover:text-white flex items-center'>
                Careers{' '}
                <span className='ml-2 bg-green-500 text-green-900 text-xs font-bold px-2 py-0.5 rounded-full'>
                  We're hiring
                </span>
              </a>
              <a href='#' className='hover:text-white'>
                Life at HireEZ
              </a>
              <a href='#' className='hover:text-white'>
                Clientele
              </a>
              <a href='#' className='hover:text-white'>
                Partner With Us
              </a>
            </div>
          </div>
          <div className='mt-8 text-center text-xs'>
            <p>
              &copy; {new Date().getFullYear()} HireEZ. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main Home Component ---
export const HomePage = () => {
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
            <FeatureCard
              title='Internships'
              // title='Internships
              subtitle='Gain Practical Experience'
              bgColor='bg-gradient-to-br from-gray-800 to-green-900'
              imageSrc='https://placehold.co/150x100/A7F3D0/166534?text=Interns'
            />
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
              imageSrc='https://placehold.co/150x100/FEF9C3/854D0E?text=Trophy'
            />
            <FeatureCard
              title='More'
              subtitle='Explore More'
              bgColor='bg-gradient-to-br from-gray-800 to-pink-900'
              imageSrc='https://placehold.co/150x100/FFC0CB/831843?text=More'
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
      {/* Footer */}
      <Footer />
    </div>
  );
};

// Export HomePage as the default export so other files import the correct component
export default HomePage;
