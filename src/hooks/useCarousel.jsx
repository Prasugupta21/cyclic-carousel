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

  const handleScroll = () => {
    if (!scrollRef.current || isScrolling) return;
    
    const scrollContainer = scrollRef.current;
    const scrollLeft = scrollContainer.scrollLeft;
    const containerWidth = scrollContainer.clientWidth;
    const itemWidth = 360 + 192; // card width + gap
    const threshold = baseItems.length * itemWidth;

    // Handle scroll near start
    if (scrollLeft < threshold - containerWidth) {
      setIsScrolling(true);
      scrollContainer.style.scrollBehavior = 'auto';
      scrollContainer.scrollLeft += threshold;
      setTimeout(() => {
        scrollContainer.style.scrollBehavior = 'smooth';
        setIsScrolling(false);
      }, 50);
    }
    // Handle scroll near end
    else if (scrollLeft > threshold * 2 - containerWidth) {
      setIsScrolling(true);
      scrollContainer.style.scrollBehavior = 'auto';
      scrollContainer.scrollLeft -= threshold;
      setTimeout(() => {
        scrollContainer.style.scrollBehavior = 'smooth';
        setIsScrolling(false);
      }, 50);
    }
  };

  const handleCardClick = (index) => {
    // Toggle active card state
    setActiveCard(activeCard === index ? null : index);
    
    if (scrollRef.current) {
      const container = scrollRef.current;
      const card = container.children[index + 1]; // +1 for padding div
      if (!card) return;

      // Calculate center position
      const containerWidth = container.offsetWidth;
      const cardWidth = card.offsetWidth;
      const scrollTo = card.offsetLeft - (containerWidth / 2) + (cardWidth / 2);
      
      // Smoothly scroll to center the card
      container.scrollTo({
        left: scrollTo,
        behavior: 'smooth'
      });
    }
  };

  return {
    scrollRef,
    activeCard,
    items,
    handleScroll,
    handleCardClick
  };
};