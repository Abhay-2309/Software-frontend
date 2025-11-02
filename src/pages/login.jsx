import React, { useState } from 'react';
import { Sparkles, Search, ChevronDown, Plus } from 'lucide-react';

// --- SVG Icons ---
const IconGoogle = () => (
  <svg className="w-5 h-5" viewBox="0 0 48 48">
    <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"></path>
    <path fill="#FF3D00" d="M6.306 14.691c-1.124 3.449-1.124 7.169 0 10.618C3.12 30.638 0 36.884 0 44v4h15.241c1.47 0 2.855-.205 4.162-.574C13.018 39.51 8.28 32.657 6.306 14.691z"></path>
    <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"></path>
    <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-0.792 2.237-2.231 4.166-4.087 5.571l6.19 5.238C39.99 36.196 44 30.62 44 24c0-1.341-.138-2.65-.389-3.917z"></path>
  </svg>
);

const IconFacebook = () => (
  <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.525h-1.313c-1.248 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
  </svg>
);

const IconEye = () => (
  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
  </svg>
);

const IconEyeOff = () => (
  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7 1.274 4.057 5.064 7 9.542 7 1.817 0 3.518.59 4.95 1.625M15.15 15.15A3 3 0 0112 12m0 0a3 3 0 00-3.15 3.15m3.15-3.15L18.825 8.825M4.93 4.93l14.14 14.14"></path>
  </svg>
);

// Success Modal Component
const SuccessModal = ({ message, onClose }) => (
  <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-70 backdrop-blur-sm">
    <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 max-w-md mx-4 shadow-2xl transform transition-all animate-bounce-in border border-gray-700">
      <div className="text-center">
        <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 mb-4">
          <svg className="h-8 w-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Success!</h3>
        <p className="text-gray-300 mb-6">{message}</p>
        <button
          onClick={onClose}
          className="w-full py-3 bg-gradient-to-r from-gray-700 via-gray-800 to-black text-white font-semibold rounded-lg hover:from-gray-600 hover:via-gray-700 hover:to-gray-900 transition-all transform hover:scale-105 shadow-lg"
        >
          Continue
        </button>
      </div>
    </div>
  </div>
);

// Home Page Component
const HomePage = ({ onLogout }) => {
  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="bg-gradient-to-r from-gray-900 to-black shadow-lg border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-8 h-8 text-gray-400" />
              <h1 className="text-2xl font-bold text-white">Hackathon 2026</h1>
            </div>
            <button
              onClick={onLogout}
              className="px-6 py-2 bg-gradient-to-r from-gray-700 to-gray-800 text-white rounded-lg hover:from-gray-600 hover:to-gray-700 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-20 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center shadow-2xl border border-gray-700">
              <Sparkles className="w-16 h-16 text-gray-400" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
              Hackathon 2026
            </h1>
            <p className="mt-6 text-lg text-gray-400 max-w-3xl mx-auto">
              Explore opportunities from across the globe to grow, showcase skills, gain CV points & get hired by your dream company.
            </p>
            <button className="mt-8 bg-gradient-to-r from-gray-700 via-gray-800 to-black text-white px-8 py-3 rounded-full text-lg font-semibold hover:from-gray-600 hover:via-gray-700 hover:to-gray-900 transition-all transform hover:scale-105 shadow-lg border border-gray-700">
              Explore Opportunities
            </button>
          </div>
        </div>
      </section>

      {/* Who's using section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-white mb-8">Who's using HireEZ?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <UserCard
            title="Students and Professionals"
            description="Unlock Your Potential: Compete, Build Resume, Grow and get Hired!"
            bgColor="bg-gradient-to-br from-gray-800 to-gray-900"
            icon="👨‍🎓"
          />
          <UserCard
            title="Companies and Recruiters"
            description="Discover Right Talent: Hire, Engage, and Brand Like Never Before!"
            bgColor="bg-gradient-to-br from-gray-900 to-black"
            icon="🏢"
          />
          <UserCard
            title="Colleges"
            description="Bridge Academia and Industry: Empower Students with Ideal World Opportunities!"
            bgColor="bg-gradient-to-br from-gray-800 to-black"
            icon="🎓"
          />
        </div>
      </section>
    </div>
  );
};

const UserCard = ({ title, description, bgColor, icon }) => (
  <div className={`${bgColor} p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 cursor-pointer border border-gray-700`}>
    <div className="text-5xl mb-4">{icon}</div>
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-gray-400 text-sm">{description}</p>
  </div>
);

// Main App Component
export default function App() {
  const [currentPage, setCurrentPage] = useState('auth');
  const [isLogin, setIsLogin] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  // Removed isTransitioning state
  // const [isTransitioning, setIsTransitioning] = useState(false);

  const handleSignupSuccess = () => {
    setSuccessMessage('Account created successfully! Please log in.');
    setShowSuccessModal(true);
  };

  const handleLoginSuccess = () => {
    setSuccessMessage('Login successful! Redirecting to home...');
    setShowSuccessModal(true);
  };

  const handleModalClose = () => {
    setShowSuccessModal(false);
    if (successMessage.includes('Login successful')) {
      setTimeout(() => setCurrentPage('home'), 300);
    } else {
      // Simplified: Just set isLogin to true
      setIsLogin(true);
    }
  };

  const handleToggleForm = () => {
    // Simplified: Just toggle isLogin
    setIsLogin(!isLogin);
  };

  const handleLogout = () => {
    setCurrentPage('auth');
    setIsLogin(false);
  };

  if (currentPage === 'home') {
    return <HomePage onLogout={handleLogout} />;
  }

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-black via-gray-900 to-black font-sans relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-gray-700 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob top-0 -left-4"></div>
          <div className="absolute w-96 h-96 bg-gray-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000 top-0 -right-4"></div>
          <div className="absolute w-96 h-96 bg-gray-800 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000 bottom-0 left-20"></div>
        </div>

        {/* Corrected: Main container now just handles overflow */}
        <div className="relative w-full max-w-6xl overflow-hidden bg-gradient-to-br from-gray-900 to-black backdrop-blur-lg rounded-3xl shadow-2xl m-4 border border-gray-700">
          
          {/* Corrected: This is the sliding container. Removed md: prefixes for w- and translate- */}
          <div className={`flex w-[200%] transition-transform duration-700 ease-in-out ${isLogin ? '-translate-x-1/2' : 'translate-x-0'}`}>
            
            {/* Page 1: Register View */}
            {/* Corrected: Changed w-full md:w-1/2 to w-1/2 */}
            <div className="flex flex-col md:flex-row w-1/2 flex-shrink-0">
              <LeftPanel isLogin={false} /> {/* Always show non-flipped image */}
              <RightPanel 
                isLogin={false} // Always show Register form
                onToggleForm={handleToggleForm}
                onSignupSuccess={handleSignupSuccess}
                onLoginSuccess={handleLoginSuccess}
              />
            </div>

            {/* Page 2: Login View */}
            {/* Corrected: Changed w-full md:w-1/2 to w-1/2 */}
            <div className="flex flex-col md:flex-row w-1/2 flex-shrink-0">
              <RightPanel 
                isLogin={true} // Always show Login form
                onToggleForm={handleToggleForm}
                onSignupSuccess={handleSignupSuccess}
                onLoginSuccess={handleLoginSuccess}
              />
              <LeftPanel isLogin={true} /> {/* Always show flipped image */}
            </div>

          </div>
        </div>
      </div>
      
      {showSuccessModal && (
        <SuccessModal message={successMessage} onClose={handleModalClose} />
      )}

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        @keyframes bounce-in {
          0% { transform: scale(0.3); opacity: 0; }
          50% { transform: scale(1.05); }
          70% { transform: scale(0.9); }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-bounce-in {
          animation: bounce-in 0.5s ease-out;
        }
      `}</style>
    </>
  );
}

// Left Panel Component
const LeftPanel = ({ isLogin }) => (
  // Corrected: Use w-full md:w-1/2 to fit inside the parent
  <div className={`relative flex flex-col justify-between w-full md:w-1/2 h-full p-12 transition-all duration-700 ${isLogin ? 'md:rounded-r-3xl' : 'md:rounded-l-3xl'}`}>
    {/* Corrected: Use one image and flip it with scale-x-[-1] */}
    <img 
      src="https://res.cloudinary.com/dy8vdilqu/image/upload/v1761993893/image3_xlyeyf.jpg" 
      alt="3D Illustration" 
      className={`absolute inset-0 w-full h-full object-cover z-0 opacity-70 transition-transform duration-700 ease-in-out ${isLogin ? 'scale-x-[-1]' : 'scale-x-1'}`}
    />
    
    <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-gray-900/50 to-black/70 z-0"></div>

    <div className="relative z-10 flex flex-col justify-between h-full text-white">
      <div>
        <div className="flex items-center space-x-3">
          <Sparkles className="w-10 h-10 text-gray-400" />
          <h2 className="text-2xl font-bold">HireEZ</h2>
        </div>
        <h1 className="mt-12 text-4xl font-bold leading-tight drop-shadow-lg">
          Find 3D Objects, Mock-ups, and Illustrations here.
        </h1>
        <p className="mt-6 text-lg text-gray-300">
          Join thousands of creative professionals and unlock your potential.
        </p>
      </div>
      
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg flex items-center justify-center border border-gray-600">
            <Search className="w-6 h-6 text-gray-300" />
          </div>
          <div>
            <h3 className="font-semibold">Discover Resources</h3>
            <p className="text-sm text-gray-400">Access premium design assets</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg flex items-center justify-center border border-gray-600">
            <Plus className="w-6 h-6 text-gray-300" />
          </div>
          <div>
            <h3 className="font-semibold">Build Your Portfolio</h3>
            <p className="text-sm text-gray-400">Showcase your best work</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Right Panel Component
const RightPanel = ({ isLogin, onToggleForm, onSignupSuccess, onLoginSuccess }) => (
  // Corrected: Use w-full md:w-1/2 to fit inside the parent
  <div className={`relative w-full md:w-1/2 h-full p-12 bg-white transition-all duration-700 ${isLogin ? 'md:rounded-l-3xl' : 'md:rounded-r-3xl'}`}>
    <div className="text-right mb-6">
      <span className="text-sm text-gray-600 cursor-pointer hover:text-gray-900 flex items-center justify-end space-x-1">
        <span>English (UK)</span>
        <ChevronDown className="w-4 h-4" />
      </span>
    </div>

    {/* Corrected: Removed the internal sliding logic. Just show the correct form. */}
    <div>
      {isLogin ? (
        <LoginForm onToggleForm={onToggleForm} onLoginSuccess={onLoginSuccess} />
      ) : (
        <RegisterForm onToggleForm={onToggleForm} onSignupSuccess={onSignupSuccess} />
      )}
    </div>

  </div>
);

// Registration Form Component
const RegisterForm = ({ onToggleForm, onSignupSuccess }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.password) {
      onSignupSuccess();
    }
  };

  return (
    <div>
      <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-800 via-black to-gray-700 bg-clip-text text-transparent">
        Create Account
      </h2>
      <p className="mt-2 text-gray-600">Join us and start your journey</p>

      <SocialLogins actionText="Sign Up" />

      <div className="flex items-center my-8">
        <hr className="flex-grow border-gray-300" />
        <span className="px-4 text-sm font-medium text-gray-500">OR</span>
        <hr className="flex-grow border-gray-300" />
      </div>

      <div className="space-y-6">
        <FormInput 
          type="text" 
          placeholder="Full name" 
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
        />
        <FormInput 
          type="email" 
          placeholder="Email Address" 
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
        />
        <PasswordInput 
          visible={passwordVisible} 
          setVisible={setPasswordVisible}
          value={formData.password}
          onChange={(e) => setFormData({...formData, password: e.target.value})}
        />

        <button
          onClick={handleSubmit}
          className="w-full py-3 text-white font-semibold bg-gradient-to-r from-gray-800 via-black to-gray-800 rounded-lg hover:from-gray-700 hover:via-gray-900 hover:to-gray-700 transition-all transform hover:scale-105 shadow-lg"
        >
          Create Account
        </button>
      </div>

      <p className="mt-6 text-sm text-center text-gray-600">
        Already have an account?{' '}
        <button 
          onClick={onToggleForm} 
          className="font-semibold bg-gradient-to-r from-gray-800 to-black bg-clip-text text-transparent hover:underline bg-transparent border-none p-0 cursor-pointer"
        >
          Log In
        </button>
      </p>
    </div>
  );
};

// Login Form Component
const LoginForm = ({ onToggleForm, onLoginSuccess }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.email && formData.password) {
      onLoginSuccess();
    }
  };

  return (
    <div>
      <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-800 via-black to-gray-700 bg-clip-text text-transparent">
        Welcome Back
      </h2>
      <p className="mt-2 text-gray-600">Please log in to your account</p>

      <SocialLogins actionText="Log In" />

      <div className="flex items-center my-8">
        <hr className="flex-grow border-gray-300" />
        <span className="px-4 text-sm font-medium text-gray-500">OR</span>
        <hr className="flex-grow border-gray-300" />
      </div>

      <div className="space-y-6">
        <FormInput 
          type="email" 
          placeholder="Email Address"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
        />
        <PasswordInput 
          visible={passwordVisible} 
          setVisible={setPasswordVisible}
          value={formData.password}
          onChange={(e) => setFormData({...formData, password: e.target.value})}
        />

        <div className="flex justify-end">
          <span className="text-sm font-medium text-gray-800 hover:underline cursor-pointer">
            Forgot password?
          </span>
        </div>

        <button
          onClick={handleSubmit}
          className="w-full py-3 text-white font-semibold bg-gradient-to-r from-gray-800 via-black to-gray-800 rounded-lg hover:from-gray-700 hover:via-gray-900 hover:to-gray-700 transition-all transform hover:scale-105 shadow-lg"
        >
          Log In
        </button>
      </div>

      <p className="mt-6 text-sm text-center text-gray-600">
        Don't have an account?{' '}
        <button 
          onClick={onToggleForm} 
          className="font-semibold bg-gradient-to-r from-gray-800 to-black bg-clip-text text-transparent hover:underline bg-transparent border-none p-0 cursor-pointer"
        >
          Create Account
        </button>
      </p>
    </div>
  );
};

// Reusable UI Components
const SocialLogins = ({ actionText }) => (
  <div className="flex flex-col sm:flex-row gap-4 mt-8">
    <SocialButton icon={<IconGoogle />} text={`${actionText} with Google`} />
    <SocialButton icon={<IconFacebook />} text={`${actionText} with Facebook`} />
  </div>
);

const SocialButton = ({ icon, text }) => (
  <button className="relative w-full py-3 border-2 border-gray-300 rounded-lg hover:border-gray-800 hover:bg-gray-50 transition-all text-center pl-14 sm:pl-16 transform hover:scale-105">
    <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
      {icon}
    </div>
    <span className="font-medium text-gray-700">{text}</span>
  </button>
);

const FormInput = ({ type, placeholder, value, onChange }) => (
  <div>
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full py-3 px-4 bg-gray-50 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-gray-800 focus:bg-white transition-all"
    />
  </div>
);

const PasswordInput = ({ visible, setVisible, value, onChange }) => (
  <div className="relative">
    <input
      type={visible ? 'text' : 'password'}
      placeholder="Password"
      value={value}
      onChange={onChange}
      className="w-full py-3 px-4 bg-gray-50 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-gray-800 focus:bg-white transition-all"
    />
    <button
      type="button"
      className="absolute inset-y-0 right-0 flex items-center pr-4 hover:opacity-70 transition-opacity"
      onClick={() => setVisible(!visible)}
    >
      {visible ? <IconEyeOff /> : <IconEye />}
    </button>
  </div>
);

