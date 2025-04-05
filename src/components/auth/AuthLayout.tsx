
import React from 'react';
import { Link } from 'react-router-dom';

interface AuthLayoutProps {
  children: React.ReactNode;
  title: 'Login' | 'Sign Up';
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children, title }) => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md bg-white p-8 rounded-md shadow-md">
        <div className="flex flex-col items-center mb-6">
          <div className="w-12 h-12 bg-indigo-500 rounded-md flex items-center justify-center mb-2">
            <span className="text-white font-bold">LS</span>
          </div>
          <p className="text-gray-600 text-sm">Sustainable Notebooks for a Better Future</p>
        </div>
        
        <div className="flex border-b mb-6">
          <Link 
            to="/login" 
            className={`pb-2 px-6 ${title === 'Login' ? 'border-b-2 border-green-500 text-green-500' : 'text-gray-500'}`}
          >
            Login
          </Link>
          <Link 
            to="/signup" 
            className={`pb-2 px-6 ${title === 'Sign Up' ? 'border-b-2 border-green-500 text-green-500' : 'text-gray-500'}`}
          >
            Sign Up
          </Link>
        </div>
        
        {children}
        
        <div className="mt-6 text-center text-sm text-gray-500">
          <p>By signing up, you agree to our <Link to="/terms" className="text-green-500 hover:underline">Terms & Conditions</Link> and <Link to="/privacy" className="text-green-500 hover:underline">Privacy Policy</Link></p>
          <p className="mt-4">
            Need help? <Link to="/support" className="text-green-500 hover:underline">Contact Support</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
