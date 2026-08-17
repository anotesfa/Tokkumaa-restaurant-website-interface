import React, { useEffect, useRef, useState } from 'react';

const AnimateOnScroll = ({ 
  children, 
  animation = 'fade-in', 
  delay = 0, 
  threshold = 0.1,
  rootMargin = '0px 0px -50px 0px'
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

  return (
    <div
      ref={elementRef}
      className={`${isVisible ? animation : ''}`}
      style={{
        animationDelay: `${delay}ms`,
        opacity: isVisible ? 1 : 0
      }}
    >
      {children}
    </div>
  );
};

export default AnimateOnScroll;