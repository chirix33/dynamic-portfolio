import { useState, useEffect } from 'react';

const defaultImages = [
  '/images/background_1.jpg',
  '/images/background_2.jpg',
  '/images/background_3.jpg',
];

export function useParallaxImages() {
  const [images, setImages] = useState(defaultImages);

  useEffect(() => {
    const loadImages = async () => {
      const apiKey = import.meta.env.VITE_UNSPLASH_API_KEY;
      
      if (!apiKey) {
        console.warn('Unsplash API key not found. Using default images.');
        return;
      }

      const baseUrl = 'https://api.unsplash.com/photos/random';
      const query = '3d+landscape';
      const perPage = 3;
      const contentFilter = 'high';
      const size = 'landscape';

      try {
        const response = await fetch(
          `${baseUrl}?query=${query}&count=${perPage}&content_filter=${contentFilter}&orientation=${size}&client_id=${apiKey}`
        );
        
        if (!response.ok) {
          throw new Error('Failed to fetch images');
        }

        const result = await response.json();
        const imageUrls = result.map((photo) => photo.urls.raw);
        setImages(imageUrls);
      } catch (error) {
        console.error('Error fetching images from Unsplash API. Using default images instead.', error);
        setImages(defaultImages);
      }
    };

    loadImages();
  }, []);

  return images;
}

