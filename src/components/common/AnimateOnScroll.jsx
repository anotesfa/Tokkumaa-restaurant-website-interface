import React, { useEffect, useRef, useState } from 'react';

const AnimateOnScroll = ({ 
  children, 
  animation = 'fade-in', 
  delay = 0, 
  threshold = 0.1,
  rootMargin = '0px 0px -50px 0px',
  className = ''
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold,
        rootMargin
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold, rootMargin]);

  // Animation mapping for consistent naming
  const animationClass = isVisible ? animation : '';
  
  // Calculate stagger class if delay is provided
  const staggerClass = delay > 0 ? `stagger-${Math.ceil(delay / 100)}` : '';
  
  return (
    <div
      ref={elementRef}
      className={`${animationClass} ${staggerClass} ${className}`.trim()}
      style={{
        animationDelay: `${delay}ms`,
        opacity: isVisible ? 1 : 0,
        transition: isVisible ? 'none' : 'opacity 0.3s ease'
      }}
    >
      {children}
    </div>
  );
};

export default AnimateOnScroll;