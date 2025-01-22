import { useState, useEffect, useRef } from 'react';

export const useCarousel = (baseItems) => {
  // Initialize refs and state
  const scrollRef = useRef(null);
  const [activeCard, setActiveCard] = useState(null);
  const [isScrolling, setIsScrolling] = useState(false);
  
  // Create triple array for infinite scroll effect
  const items = [...baseItems, ...baseItems, ...baseItems];
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    // Set initial scroll to middle set after brief delay
    const timeoutId = setTimeout(() => {
      try {
        const itemWidth = 360 + 192; // card width + gap
        const middlePosition = baseItems.length * itemWidth;
        scrollContainer.scrollLeft = middlePosition;
      } catch (error) {
        console.error('Error setting initial scroll position:', error);
      }
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [baseItems.length]);

  return { scrollRef, activeCard, items };
};