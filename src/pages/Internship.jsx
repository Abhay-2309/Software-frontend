import React, { useState } from 'react';
import { 
  Search, Bell, User, Plus, ArrowRight, ChevronLeft, ChevronRight, 
  Users, Briefcase, Megaphone, Settings, Banknote, MapPin, Users2,
  Quote, Star, Building, Code, Brain, PieChart, PenTool
} from 'lucide-react';

// --- Mock Data (based on your screenshots) ---

const mockInternships = [
  {
    title: 'Full-Stack Development',
    company: 'AKH labs Ltd.',
    location: 'Pune',
    applied: 288,
    tags: ['In Office', 'Actively Hiring'],
    logo: 'https://placehold.co/40x40/222/fff?text=AKH',
    color: 'from-blue-500/20 to-blue-900/10'
  },
  {
    title: 'Web Development',
    company: 'Fluxian Pvt. Ltd.',
    location: 'Chandigarh',
    applied: 54,
    tags: ['WFH'],
    logo: 'https://placehold.co/40x40/222/fff?text=FPL',
    color: 'from-pink-500/20 to-pink-900/10'
  },
  {
    title: 'Business Development',
    company: 'Nexus Void AI',
    location: 'New Delhi',
    applied: 6,
    tags: ['WFH'],
    logo: 'https://placehold.co/40x40/222/fff?text=NVA',
    color: 'from-purple-500/20 to-purple-900/10'
  },
  {
    title: 'Campus Engagement',
    company: 'Naviotech Solution Pvt. Ltd.',
    location: 'Not Disclosed',
    applied: 23,
    tags: ['WFH', 'Actively Hiring'],
    logo: 'https://placehold.co/40x40/222/fff?text=NS',
    color: 'from-yellow-500/20 to-yellow-900/10'
  }
];

const mockChallenges = [
  {
    title: 'Code Event',
    company: 'E-Cell',
    location: 'Online',
    applied: 1200,
    tags: ['Online', 'Free'],
    logo: 'https://placehold.co/40x40/222/fff?text=EC',
    color: 'from-blue-500/20 to-blue-900/10'
  },
  {
    title: 'Relinothon M.O.S',
    company: 'Manibon',
    location: 'Online',
    applied: 800,
    tags: ['Online', 'Paid'],
    logo: 'https://placehold.co/40x40/222/fff?text=M',
    color: 'from-pink-500/20 to-pink-900/10'
  },
  {
    title: 'Sparkplug Series',
    company: 'Sparkplug',
    location: 'Online',
    applied: 500,
    tags: ['Online', 'Free'],
    logo: 'https://placehold.co/40x40/222/fff?text=SS',
    color: 'from-purple-500/20 to-purple-900/10'
  },
  {
    title: 'Technica 2.0',
    company: 'Code Wizards',
    location: 'Offline',
    applied: 250,
    tags: ['Offline', 'Free'],
    logo: 'https://placehold.co/40x40/222/fff?text=CW',
    color: 'from-yellow-500/20 to-yellow-900/10'
  }
];

const mockCategories = [
  { name: 'Human Resources', icon: <Users className="h-5 w-5" /> },
  { name: 'Software Development' },  
  { name: 'Marketing', icon: <Megaphone className="h-5 w-5" /> },
  { name: 'Operations', icon: <Settings className="h-5 w-5" /> },
  { name: 'Finance', icon: <Banknote className="h-5 w-5" /> },
  { name: 'Design', icon: <PenTool className="h-5 w-5" /> },
];

const mockRoles = [
  { name: 'Data Analyst', openings: 370, logos: ['https://placehold.co/24x24/333/fff?text=D', 'https://placehold.co/24x24/333/fff?text=U', 'https://placehold.co/24x24/333/fff?text=N', 'https://placehold.co/24x24/333/fff?text=B'] },
  { name: 'Product Management', openings: 246, logos: ['https://placehold.co/24x24/333/fff?text=D', 'https://placehold.co/24x24/333/fff?text=G', 'https://placehold.co/24x24/333/fff?text=T', 'https://placehold.co/24x24/333/fff?text=P'] },
  { name: 'Design', openings: 300, logos: ['https://placehold.co/24x24/333/fff?text=H', 'https://placehold.co/24x24/333/fff?text=F', 'https://placehold.co/24x24/333/fff?text=S', 'https://placehold.co/24x24/333/fff?text=L'] },
  { name: 'Business Development', openings: 200, logos: ['https://placehold.co/24x24/333/fff?text=G', 'https://placehold.co/24x24/333/fff?text=I', 'https://placehold.co/24x24/333/fff?text=Z', 'https://placehold.co/24x24/333/fff?text=W'] },
];

const mockTests = [
  { name: 'AI Engineer', company: 'Google', logo: 'https://placehold.co/56x56/333/fff?text=G' },
  { name: 'Machine Learning Engineer', company: 'OpenAI', logo: 'https://placehold.co/56x56/333/fff?text=O' },
  { name: 'iOS Developer', company: 'Uber', logo: 'https://placehold.co/56x56/333/fff?text=U' },
  { name: 'Blockchain Engineer', company: 'StarkWare', logo: 'https://placehold.co/56x56/333/fff?text=S' },
];

const mockCompanies = ['PepsiCo', 'Coca-Cola', 'Kenvue', 'Samsung', 'Flipkart', 'Amazon', 'Snapdeal'];

const mockTestimonials = [
  {
    quote: "While browsing competitions on Unstop, I discovered their hiring page—and it completely shifted my perspective. Unstop has evolved beyond just hosting competitions.",
    name: 'Ishita Dutta',
    role: 'Beyond Careers',
    avatar: 'https://placehold.co/40x40/333/fff?text=ID'
  },
  {
    quote: "I'm excited to begin a 3-month Full Stack Web Development Internship at Guhaar Foundation, starting May 2025. As a final-year B.Tech ECE student, this is a valuable opportunity.",
    name: 'Simran Kapoor',
    role: 'Student',
    avatar: 'https://placehold.co/40x40/333/fff?text=SK'
  },
  {
    quote: "Thanks to Unstop, I secured a 3-month Business Strategy Internship at Beyond Career. The experience was truly transformative—ranging from market research to competitor analysis.",
    name: 'Devendra Vishwakarma',
    role: 'Student',
    avatar: 'https://placehold.co/40x40/333/fff?text=DV'
  },
];


// --- Reusable Components ---

// Section: A wrapper for each homepage section
const Section = ({ title, viewAllLink = "#", children, titleClassName = "" }) => (
  <section className="container mx-auto max-w-7xl px-4 py-12">
    <div className="mb-6 flex items-center justify-between">
      <h2 className={`text-3xl font-bold text-white ${titleClassName}`}>{title}</h2>
      <a href={viewAllLink} className="group flex items-center text-sm font-semibold text-blue-400 hover:text-blue-300">
        View all
        <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </a>
    </div>
    {children}
  </section>
);

// HorizontalScrollContainer: A container for horizontally scrolling cards
const HorizontalScrollContainer = ({ children }) => (
  <div className="relative">
    <div className="no-scrollbar -mx-4 flex space-x-6 overflow-x-auto px-4 py-2">
      {children}
    </div>
    {/* Note: Scroll buttons could be added here for desktop */}
  </div>
);

// InternshipCard: Card for Internships and Hiring Challenges
const InternshipCard = ({ item }) => (
  <div className="relative h-full w-72 flex-shrink-0 overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900 p-5 shadow-lg transition-transform hover:scale-[1.02] hover:shadow-blue-500/10">
    {/* Card background gradient */}
    <div className={`absolute inset-0 opacity-30 bg-gradient-to-br ${item.color} -z-10`}></div>
    
    <div className="flex items-start justify-between">
      <div>
        <div className="flex flex-wrap gap-2">
          {item.tags.map(tag => (
            <span
              key={tag}
              className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                tag === 'Actively Hiring' ? 'bg-green-700/50 text-green-300' : 'bg-neutral-700/50 text-neutral-300'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <img src={item.logo} alt={`${item.company} logo`} className="h-12 w-12 rounded-lg border border-neutral-700" />
    </div>
    <div className="mt-12">
      <h3 className="text-lg font-semibold text-white">{item.title}</h3>
      <p className="text-sm text-neutral-400">{item.company}</p>
    </div>
    <div className="mt-4 flex items-center justify-between border-t border-neutral-800 pt-4">
      <div className="flex items-center space-x-4 text-sm text-neutral-400">
        <div className="flex items-center">
          <Users2 className="mr-1.5 h-4 w-4" />
          <span>{item.applied} Applied</span>
        </div>
        <div className="flex items-center">
          <MapPin className="mr-1.5 h-4 w-4" />
          <span>{item.location}</span>
        </div>
      </div>
      <a href="#" className="text-neutral-500 hover:text-blue-400">
        <ArrowRight className="h-5 w-5" />
      </a>
    </div>
  </div>
);

// RoleCard: Card for "Find The Right Role"
const RoleCard = ({ role }) => (
  <div className="group rounded-2xl border border-neutral-800 bg-neutral-900 p-5 transition-all hover:border-blue-700/50 hover:bg-neutral-800/50">
    <div className="flex items-center justify-between">
      <div>
        <h3 className="text-lg font-semibold text-white">{role.name}</h3>
        <p className="text-sm text-neutral-400">{role.openings}+ Openings</p>
      </div>
      <ArrowRight className="h-5 w-5 text-neutral-600 transition-transform group-hover:translate-x-1 group-hover:text-blue-400" />
    </div>
    <div className="mt-6 flex space-x-2">
      {role.logos.map((logo, index) => (
        <img key={index} src={logo} alt="company logo" className="h-8 w-8 rounded-full border-2 border-neutral-700" />
      ))}
    </div>
  </div>
);

// MockTestCard: Card for "Company Mock Tests"
const MockTestCard = ({ test }) => (
  <div className="group w-64 flex-shrink-0 rounded-2xl border border-neutral-800 bg-neutral-900 transition-all hover:border-blue-700/50 hover:bg-neutral-800/50">
    <div className="flex h-32 items-center justify-center rounded-t-2xl bg-neutral-800/50">
      <img src={test.logo} alt={`${test.company} logo`} className="h-16 w-16 rounded-xl" />
    </div>
    <div className="p-5">
      <h3 className="font-semibold text-white">{test.name}</h3>
      <p className="text-sm text-neutral-400">{test.company}</p>
      <a href="#" className="group mt-4 flex items-center text-sm font-semibold text-blue-400">
        Start Test
        <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </a>
    </div>
  </div>
);

// --- Page Sections (as Components) ---

const Header = () => (
  <header className="container mx-auto max-w-7xl px-4 pt-6">
    <div className="flex h-16 items-center justify-between">
      {/* Left Side: Logo & Nav */}
      <div className="flex items-center space-x-8">
        <a href="#" className="text-2xl font-bold text-white">unstop</a>
        {/* Navigation Links - can be hidden on mobile */}
        <nav className="hidden items-center space-x-6 md:flex">
          <a href="#" className="text-sm font-medium text-blue-400 ring-1 ring-blue-400/50 rounded-md px-3 py-1 bg-blue-500/10">Internships</a>
          <a href="#" className="text-sm font-medium text-neutral-300 hover:text-white">Jobs</a>
          <a href="#" className="text-sm font-medium text-neutral-300 hover:text-white">Competitions</a>
          <a href="#" className="text-sm font-medium text-neutral-300 hover:text-white">Mentorship</a>
          <a href="#" className="text-sm font-medium text-neutral-300 hover:text-white">Practice</a>
        </nav>
      </div>

      {/* Right Side: Search, Actions, Profile */}
      <div className="flex items-center space-x-4">
        <button className="hidden rounded-lg border border-blue-500/50 bg-blue-600/20 px-3 py-1.5 text-sm font-medium text-blue-300 transition-colors hover:bg-blue-600/30 sm:flex">
          <Plus className="-ml-1 mr-1.5 h-4 w-4" />
          Host
        </button>
        <button className="rounded-lg border border-neutral-700 bg-neutral-800 px-3 py-1.5 text-sm font-medium text-neutral-300 hover:bg-neutral-700">
          For Business
        </button>
        <button className="text-neutral-400 hover:text-white">
          <Bell className="h-5 w-5" />
        </button>
        <button className="text-neutral-400 hover:text-white">
          <User className="h-5 w-5" />
        </button>
      </div>
    </div>
  </header>
);

const Hero = () => (
  <section className="container mx-auto max-w-7xl px-4 py-16 sm:py-24">
    <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
      {/* Left Side: Text Content */}
      <div className="text-center lg:text-left">
        <h1 className="text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl">
          Your <span className="text-blue-400">future</span> starts here
        </h1>
        <p className="mt-6 text-lg text-neutral-300 sm:text-xl">
          25k+ Internships for freshers, students & graduates!
        </p>
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
          <a
            href="#"
            className="group inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-lg transition-colors hover:bg-blue-500"
          >
            Find Internships
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#"
            className="group inline-flex items-center justify-center rounded-lg border border-neutral-700 bg-neutral-800/50 px-6 py-3 text-base font-semibold text-white shadow-lg transition-colors hover:bg-neutral-800"
          >
            <Plus className="mr-2 h-5 w-5" />
            Post Internships
          </a>
        </div>
      </div>
      
      {/* Right Side: Image Placeholder */}
      <div className="hidden lg:block">
        <div className="relative h-[450px] w-full rounded-3xl border border-neutral-800 bg-neutral-900/50 p-6">
          <p className="flex h-full items-center justify-center text-neutral-600">
            {/* Image elements would go here */}
          </p>
          {/* Floating elements from screenshot */}
          <div className="absolute -left-12 top-20 rounded-lg border border-neutral-700 bg-neutral-800 p-3 shadow-lg">
            <p className="text-sm">🌟 Top Companies</p>
          </div>
          <div className="absolute -right-10 top-32 rounded-lg border border-neutral-700 bg-neutral-800 p-3 shadow-lg">
            <p className="text-sm">✅ Certification</p>
          </div>
          <div className="absolute -bottom-8 left-1/3 rounded-lg border border-neutral-700 bg-neutral-800 p-3 shadow-lg">
            <p className="text-sm">🚀 11M+ Got hiring opportunities</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Categories = () => (
  <section className="container mx-auto max-w-7xl px-4 py-8">
    <h2 className="mb-6 text-xl font-bold text-white">Internships Category</h2>
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
      {mockCategories.map((category) => (
        <a
          key={category.name}
          href="#"
          className="flex items-center space-x-3 rounded-lg border border-neutral-800 bg-neutral-900 p-4 transition-colors hover:border-blue-700/50 hover:bg-neutral-800/50"
        >
          <span className="rounded-lg bg-neutral-800 p-2 text-blue-400">{category.icon}</span>
          <span className="text-sm font-medium text-white">{category.name}</span>
        </a>
      ))}
    </div>
  </section>
);

const Internships = () => (
  <Section title="Internships">
    <p className="mb-6 -mt-4 text-neutral-400">Find the internships that fit your career aspirations.</p>
    <HorizontalScrollContainer>
      {mockInternships.map((item, index) => (
        <InternshipCard key={index} item={item} />
      ))}
    </HorizontalScrollContainer>
  </Section>
);

const HiringChallenges = () => (
  <Section title="Hiring Challenges">
    <p className="mb-6 -mt-4 text-neutral-400">Find the Hiring Challenges that fit your career aspirations.</p>
    <HorizontalScrollContainer>
      {mockChallenges.map((item, index) => (
        <InternshipCard key={index} item={item} />
      ))}
    </HorizontalScrollContainer>
  </Section>
);

const Roles = () => (
  <Section title="Find The Right Role For You">
    <p className="mb-6 -mt-4 text-neutral-400">Apply to roles matching your skills from 500+ trending options.</p>
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {mockRoles.map((role) => (
        <RoleCard key={role.name} role={role} />
      ))}
    </div>
  </Section>
);

const MockTests = () => {
  const [activeTab, setActiveTab] = useState('Tech');
  
  return (
    <Section title="Company Mock Tests">
      <p className="mb-6 -mt-4 text-neutral-400">Master your concepts with AI-Powered full-length mock tests for 360° preparation!</p>
      
      {/* Tabs */}
      <div className="mb-6 flex space-x-2">
        {['Tech', 'Management', 'General'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
              activeTab === tab 
                ? 'bg-neutral-800 text-white' 
                : 'bg-neutral-900 text-neutral-400 hover:bg-neutral-800/50'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      
      {/* Cards */}
      <HorizontalScrollContainer>
        {mockTests.map((test) => (
          <MockTestCard key={test.name} test={test} />
        ))}
      </HorizontalScrollContainer>
    </Section>
  );
};

const Companies = () => (
  <section className="container mx-auto max-w-7xl px-4 py-12">
    <h2 className="mb-4 text-center text-2xl font-bold text-white">Top Companies Listing on Unstop</h2>
    <p className="mb-8 text-center text-neutral-400">Find jobs that fit your career aspirations.</p>
    <div className="relative">
      <div className="no-scrollbar flex items-center justify-center space-x-6 overflow-x-auto p-4 md:space-x-12">
        {mockCompanies.map((company) => (
          <span key={company} className="flex-shrink-0 text-xl font-medium text-neutral-500">{company}</span>
        ))}
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <Section title="How HireEZ helps Job seekers" titleClassName="text-center">
    <p className="mb-8 -mt-4 text-center text-neutral-400">Participate in these exceptional opportunities curated for the exceptional you!</p>
    <div className="relative">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {mockTestimonials.map((testimonial, index) => (
          <div key={index} className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6">
            <Quote className="h-10 w-10 text-yellow-500" fill="currentColor" />
            <p className="mt-4 text-neutral-300">{testimonial.quote}</p>
            <div className="mt-6 flex items-center space-x-3 border-t border-neutral-800 pt-6">
              <img src={testimonial.avatar} alt={testimonial.name} className="h-10 w-10 rounded-full" />
              <div>
                <p className="font-semibold text-white">{testimonial.name}</p>
                <p className="text-sm text-neutral-400">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Navigation Buttons */}
      <button className="absolute -left-4 top-1/2 -translate-y-1/2 rounded-full border border-neutral-700 bg-neutral-800 p-2 text-white hover:bg-neutral-700 disabled:opacity-50">
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button className="absolute -right-4 top-1/2 -translate-y-1/2 rounded-full border border-neutral-700 bg-neutral-800 p-2 text-white hover:bg-neutral-700">
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  </Section>
);

const Stats = () => (
  <section className="container mx-auto max-w-7xl px-4 py-16">
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {/* Stat Card 1 */}
      <div className="relative overflow-hidden rounded-2xl border border-neutral-800 bg-pink-500/10 p-8">
        <h3 className="text-6xl font-bold text-white">25k+</h3>
        <p className="mt-2 text-lg text-neutral-300">Listed Jobs & Internships</p>
        <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-pink-500/20"></div>
      </div>
      {/* Stat Card 2 */}
      <div className="relative overflow-hidden rounded-2xl border border-neutral-800 bg-blue-500/10 p-8">
        <h3 className="text-6xl font-bold text-white">30K+</h3>
        <p className="mt-2 text-lg text-neutral-300">Verified Recruiters</p>
        <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-blue-500/20"></div>
      </div>
      {/* Stat Card 3 */}
      <div className="relative overflow-hidden rounded-2xl border border-neutral-800 bg-yellow-500/10 p-8">
        <h3 className="text-6xl font-bold text-white">6.6M+</h3>
        <p className="mt-2 text-lg text-neutral-300">Applications</p>
        <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-yellow-500/20"></div>
      </div>
    </div>
  </section>
);

const PostInternshipsBanner = () => (
  <section className="container mx-auto max-w-7xl px-4 py-16">
    <div className="relative grid grid-cols-1 items-center gap-8 overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900 p-8 md:grid-cols-2 lg:p-12">
      {/* Background shapes */}
      <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-blue-500/10 blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-yellow-500/10 blur-3xl"></div>
      
      {/* Left Content */}
      <div className="relative z-10">
        <h2 className="text-4xl font-bold text-white">Post Your Internships</h2>
        <p className="mt-4 text-lg text-neutral-300">Find the right candidate from a diverse talent pool for your role.</p>
        <a
          href="#"
          className="group mt-8 inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-lg transition-colors hover:bg-blue-500"
        >
          Post Internships Now
          <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
      
      {/* Right Content (Image placeholder) */}
      <div className="relative z-10 h-64 w-full rounded-xl border border-neutral-700 bg-neutral-800/50 p-4 lg:h-80">
        <p className="flex h-full items-center justify-center text-neutral-500">[Banner Graphic]</p>
        <div className="absolute -top-8 right-8 rounded-lg border border-yellow-700 bg-yellow-500/20 p-3 shadow-lg">
          <p className="text-sm text-yellow-200">✨ 354,543 Candidate Registered</p>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="mt-16 border-t border-neutral-800 bg-neutral-950 py-16">
    <div className="container mx-auto max-w-7xl px-4">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-5">
        {/* Column 1: Logo & Info */}
        <div className="md:col-span-2">
          <a href="#" className="text-3xl font-bold text-white">HireEZ</a>
          <p className="mt-4 text-neutral-400">Built with ❤ in India for the world</p>
        </div>
        
        {/* Column 2: Products */}
        <div>
          <h4 className="mb-4 font-semibold text-white">Products</h4>
          <ul className="space-y-3">
            <li><a href="#" className="text-neutral-400 hover:text-white">Brand & Engage</a></li>
            <li><a href="#" className="text-neutral-400 hover:text-white">Source</a></li>
            <li><a href="#" className="text-neutral-400 hover:text-white">Assess</a></li>
            <li><a href="#" className="text-neutral-400 hover:text-white">Hire</a></li>
          </ul>
        </div>
        
        {/* Column 3: Participate */}
        <div>
          <h4 className="mb-4 font-semibold text-white">Participate</h4>
          <ul className="space-y-3">
            <li><a href="#" className="text-neutral-400 hover:text-white">Competitions & Challenges</a></li>
            <li><a href="#" className="text-neutral-400 hover:text-white">Assessments</a></li>
            <li><a href="#" className="text-neutral-400 hover:text-white">Hackathons</a></li>
            <li><a href="#" className="text-neutral-400 hover:text-white">Quizzes</a></li>
          </ul>
        </div>
        
        {/* Column 4: Learn */}
        <div>
          <h4 className="mb-4 font-semibold text-white">Learn</h4>
          <ul className="space-y-3">
            <li><a href="#" className="text-neutral-400 hover:text-white">Courses</a></li>
            <li><a href="#" className="text-neutral-400 hover:text-white">Articles</a></li>
            <li><a href="#" className="text-neutral-400 hover:text-white">Playbooks</a></li>
            <li><a href="#" className="text-neutral-400 hover:text-white">Blog</a></li>
          </ul>
        </div>
      </div>
      
      <div className="mt-16 border-t border-neutral-800 pt-8 text-center text-sm text-neutral-500">
        <p>&copy; {new Date().getFullYear()} Unstop. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

// --- Internship Page Component ---

export default function InternshipPage() {
   return (
     <div className="min-h-screen w-full bg-gradient-to-b from-black via-neutral-950 to-black text-white antialiased">
       
       <main>
         <Header />
         <Hero />
         <Categories />
         <Internships />
         <HiringChallenges />
         <Roles />
         <MockTests />
         <Companies />
         <Testimonials />
         <Stats />
         <PostInternshipsBanner />
       </main>
       
       <Footer />
     </div>
   );
 }