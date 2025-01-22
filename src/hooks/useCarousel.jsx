import { useState, useEffect, useRef } from 'react';

export const useCarousel = (baseItems) => {
  // Initialize refs and state
  const scrollRef = useRef(null);
  const [activeCard, setActiveCard] = useState(null);
  const [isScrolling, setIsScrolling] = useState(false);
  
  // Create triple array for infinite scroll effect
  const items = [...baseItems, ...baseItems, ...baseItems];
  
  return { scrollRef, activeCard, items };
};