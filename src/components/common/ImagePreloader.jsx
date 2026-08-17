import { useEffect } from 'react';

const ImagePreloader = ({ images = [] }) => {
  useEffect(() => {
    // Preload critical images
    const preloadImages = (imageUrls) => {
      imageUrls.forEach(url => {
        if (url && typeof url === 'string') {
          const img = new Image();
          img.src = url;
          // Add to browser cache
          img.onload = () => {
            console.log(`Preloaded: ${url}`);
          };
          img.onerror = () => {
            console.warn(`Failed to preload: ${url}`);
          };
        }
      });
    };

    if (images.length > 0) {
      preloadImages(images);
    }
  }, [images]);

  return null; // This component doesn't render anything
};

export default ImagePreloader;