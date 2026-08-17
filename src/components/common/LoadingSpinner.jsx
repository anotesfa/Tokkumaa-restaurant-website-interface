import React from 'react';

const LoadingSpinner = ({ size = 'md', text = 'Loading...', className = '' }) => {
  const getSizeClass = () => {
    switch (size) {
      case 'sm': return 'spinner-border-sm';
      case 'lg': return 'spinner-border-lg';
      default: return '';
    }
  };

  return (
    <div className={`d-flex flex-column align-items-center justify-content-center py-5 ${className}`}>
      <div className={`spinner-border text-primary ${getSizeClass()}`} role="status">
        <span className="visually-hidden">{text}</span>
      </div>
      {text && (
        <p className="mt-3 text-muted mb-0">{text}</p>
      )}
    </div>
  );
};

export default LoadingSpinner;