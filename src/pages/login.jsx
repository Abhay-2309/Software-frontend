import React, { useState } from 'react';

// --- SVG Icons ---

// Google Icon
const IconGoogle = () => (
  <svg className="w-5 h-5" viewBox="0 0 48 48">
    <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"></path>
    <path fill="#FF3D00" d="M6.306 14.691c-1.124 3.449-1.124 7.169 0 10.618C3.12 30.638 0 36.884 0 44v4h15.241c1.47 0 2.855-.205 4.162-.574C13.018 39.51 8.28 32.657 6.306 14.691z"></path>
    <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"></path>
    <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-0.792 2.237-2.231 4.166-4.087 5.571l6.19 5.238C39.99 36.196 44 30.62 44 24c0-1.341-.138-2.65-.389-3.917z"></path>
  </svg>
);

// Facebook Icon
const IconFacebook = () => (
  <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.525h-1.313c-1.248 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
  </svg>
);

// Eye Open Icon
const IconEye = () => (
  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
  </svg>
);

// Eye Closed Icon
const IconEyeOff = () => (
  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7 1.274 4.057 5.064 7 9.542 7 1.817 0 3.518.59 4.95 1.625M15.15 15.15A3 3 0 0112 12m0 0a3 3 0 00-3.15 3.15m3.15-3.15L18.825 8.825M4.93 4.93l14.14 14.14"></path>
  </svg>
);


// --- Main App Component ---
// This component holds the state for toggling between Login and Register forms
export default function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    // Background color for the whole page (dark charcoal)
    <div className="flex items-center justify-center min-h-screen bg-gray-900 font-sans">
      {/* Main container with gradient background for the left side and shadow */}
      <div className="relative flex w-full max-w-6xl overflow-hidden bg-gradient-to-r from-gray-950 to-black rounded-3xl shadow-2xl m-4">
        
        {/* --- Left Panel (Illustration & Info) --- */}
        <LeftPanel />
        
        {/* --- Right Panel (Form) --- */}
        <RightPanel isLogin={isLogin} setIsLogin={setIsLogin} />
        
      </div>
    </div>
  );
}

// --- Left Panel Component ---
const LeftPanel = () => (
  // The left panel itself is now a positioned container for the image and text
  <div className="relative hidden md:flex flex-col justify-between w-1/2 p-12">
    {/* Background image for the left panel */}
    {/* Corrected: Added absolute positioning and object-cover to make the image fill and clip */}
    <img 
      src="https://res.cloudinary.com/dy8vdilqu/image/upload/v1761993893/image3_xlyeyf.jpg" 
      alt="3D Illustration" 
      className="absolute inset-0 w-full h-full object-cover z-0 opacity-70" // opacity added to soften image for text
    />

    {/* Content overlay on top of the image */}
    <div className="relative z-10 flex flex-col justify-between h-full text-white"> {/* Text color set to white */}
      <div>
        {/* Logo - ensure it's visible on a dark background */}
        <svg className="w-auto h-8 fill-current text-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0L23.26 21H.74L12 0z" />
        </svg>
        {/* Heading - ensure it's visible and stands out
        <h1 className="mt-8 text-3xl font-bold text-white tracking-tight drop-shadow-lg">
          Find 3D Objects, Mock-ups, and Illustrations here.
        </h1> */}
      </div>
      
      {/* Placeholder for additional content if needed, adjusted for dark background */}
      {/* <div className="mt-8 text-gray-300">
        <p className="text-center font-medium">[Additional text or elements]</p>
      </div> */}
    </div>
  </div>
);

// --- Right Panel Component ---
// Handles the form container and language selector
const RightPanel = ({ isLogin, setIsLogin }) => (
  // Right panel is white with a rounded top-left corner
  <div className="w-full md:w-1/2 p-12 bg-white rounded-tl-3xl">
    <div className="text-right">
      {/* Language selector */}
      <span className="text-sm text-gray-600 cursor-pointer hover:text-gray-900">English (UK) ▼</span>
    </div>

    {/* Conditional Rendering: Show Login or Register form */}
    {isLogin ? (
      <LoginForm setIsLogin={setIsLogin} />
    ) : (
      <RegisterForm setIsLogin={setIsLogin} />
    )}
  </div>
);

// --- Registration Form Component ---
const RegisterForm = ({ setIsLogin }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <div>
      <h2 className="mt-6 text-3xl font-bold text-gray-900">Create Account</h2>

      {/* Social Logins */}
      <SocialLogins actionText="Sign Up" />

      <div className="flex items-center my-8">
        <hr className="flex-grow border-gray-300" />
        <span className="px-4 text-sm font-medium text-gray-500">-OR-</span>
        <hr className="flex-grow border-gray-300" />
      </div>

      {/* Form */}
      <form className="space-y-6">
        <FormInput type="text" placeholder="Full name" />
        <FormInput type="email" placeholder="Email Address" />
        <PasswordInput 
          visible={passwordVisible} 
          setVisible={setPasswordVisible} 
        />

        {/* Submit button with dark styling */}
        <button
          type="submit"
          className="w-full py-3 text-white font-semibold bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors"
        >
          Create Account
        </button>
      </form>

      <p className="mt-6 text-sm text-center text-gray-600">
        Already have an account?{' '}
        {/* Link to switch to login form */}
        <button 
          onClick={() => setIsLogin(true)} 
          className="font-semibold text-gray-800 hover:underline bg-transparent border-none p-0 cursor-pointer"
        >
          Log In
        </button>
      </p>
    </div>
  );
};

// --- Login Form Component ---
const LoginForm = ({ setIsLogin }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <div>
      <h2 className="mt-6 text-3xl font-bold text-gray-900">Welcome Back</h2>
      <p className="mt-2 text-gray-600">Please log in to your account.</p>

      {/* Social Logins */}
      <SocialLogins actionText="Log In" />

      <div className="flex items-center my-8">
        <hr className="flex-grow border-gray-300" />
        <span className="px-4 text-sm font-medium text-gray-500">-OR-</span>
        <hr className="flex-grow border-gray-300" />
      </div>

      {/* Form */}
      <form className="space-y-6">
        <FormInput type="email" placeholder="Email Address" />
        <PasswordInput 
          visible={passwordVisible} 
          setVisible={setPasswordVisible} 
        />

        <div className="flex justify-end">
          {/* Forgot password link */}
          <a href="#" className="text-sm font-medium text-gray-800 hover:underline">
            Forgot password?
          </a>
        </div>

        {/* Submit button with dark styling */}
        <button
          type="submit"
          className="w-full py-3 text-white font-semibold bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors"
        >
          Log In
        </button>
      </form>

      <p className="mt-6 text-sm text-center text-gray-600">
        Don't have an account?{' '}
        {/* Link to switch to registration form */}
        <button 
          onClick={() => setIsLogin(false)} 
          className="font-semibold text-gray-800 hover:underline bg-transparent border-none p-0 cursor-pointer"
        >
          Create Account
        </button>
      </p>
    </div>
  );
};


// --- Reusable UI Components ---

// Social Login Buttons
const SocialLogins = ({ actionText }) => (
  <div className="flex flex-col sm:flex-row gap-4 mt-8">
    <SocialButton icon={<IconGoogle />} text={`${actionText} with Google`} />
    <SocialButton icon={<IconFacebook />} text={`${actionText} with Facebook`} />
  </div>
);

// Social Button
const SocialButton = ({ icon, text }) => (
  // Use relative positioning to place icon; add left padding so text doesn't overlap
  <button className="relative w-full py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-center pl-14 sm:pl-16">
    {/* Absolutely position the icon on the left and vertically center it */}
    <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
      {icon}
    </div>
    {/* The text will be centered by default */}
    <span className="font-medium text-gray-700">{text}</span>
  </button>
);

// Standard Form Input
const FormInput = ({ type, placeholder }) => (
  <div>
    <input
      type={type}
      placeholder={placeholder}
      // Focus color changed to dark gray
      className="w-full py-3 bg-transparent border-b border-gray-300 focus:outline-none focus:border-gray-800"
    />
  </div>
);

// Password Input with Visibility Toggle
const PasswordInput = ({ visible, setVisible }) => (
  <div className="relative">
    <input
      type={visible ? 'text' : 'password'}
      placeholder="Password"
      // Focus color changed to dark gray
      className="w-full py-3 bg-transparent border-b border-gray-300 focus:outline-none focus:border-gray-800"
    />
    <button
      type="button"
      className="absolute inset-y-0 right-0 flex items-center pr-3"
      onClick={() => setVisible(!visible)}
    >
      {visible ? (
        <IconEyeOff />
      ) : (
        <IconEye />
      )}
    </button>
  </div>
);

