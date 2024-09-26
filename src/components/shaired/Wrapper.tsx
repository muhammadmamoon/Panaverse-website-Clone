import React, { FC } from 'react';

interface WrapperProps {
  children: React.ReactNode;
  className?: string; 
}

const Wrapper: FC<WrapperProps> = ({ children, className = '' }) => {
  return (
    <div className={`max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 bg-white shadow-md rounded-lg ${className}`}>
      {children}
    </div>
  );
};

export default Wrapper;
