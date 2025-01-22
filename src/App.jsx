import React, { useState } from 'react';
import CarouselContainer from './components/CarouselContainer';
import CarouselCard from './components/CarouselCard';
import { useCarousel } from './hooks/useCarousel';


const App = () => {
  const [baseItems] = useState([1, 2, 3, 4, 5]);
  const { 
    scrollRef, 
    activeCard, 
    items, 
    handleScroll, 
    handleCardClick 
  } = useCarousel(baseItems);

  return (
    <CarouselContainer
      scrollRef={scrollRef}
      handleScroll={handleScroll}
    >
      {items.map((item, index) => (
        <CarouselCard
          key={`${item}-${index}`}
          item={item}
          index={index}
          isActive={activeCard === index}
          handleClick={handleCardClick}
        />
      ))}
    </CarouselContainer>
  );
};

export default App;