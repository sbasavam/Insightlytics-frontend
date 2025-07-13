import React from 'react';

const Button = ({ children, type = 'button', className = '', isLoading = false, ...props }) => {
  return (
    <button
      type={type}
      className={`px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors ${className}`}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? 'Loading...' : children}
    </button>
  );
};

export default Button;