import React from 'react';

const CarouselCard = ({ item, index, isActive, handleClick }) => {
  return (
    <div
      onClick={() => handleClick(index)}
      className={`
        flex-shrink-0
        w-[400px]
        transition-all
        duration-500
        ease-in-out
        cursor-pointer
        px-4
        ${isActive ? 'scale-110 z-20' : 'scale-90'}
      `}
    >
      <div 
        className={`
          relative
          w-full 
          h-[480px] 
          rounded-2xl 
          overflow-hidden
          group
          ${isActive ? 'shadow-xl' : 'shadow-lg'}
        `}
      >
        {/* Animated border overlay */}
        <div className="absolute inset-0 w-full h-full rounded-2xl opacity-0 group-hover:opacity-100">
          <div className="absolute inset-0 w-full h-full rounded-2xl">
            {/* Top border */}
            <div className="absolute top-0 right-full w-full h-1 bg-gradient-to-r from-transparent via-gray-300 to-gray-400 group-hover:animate-border-slide-right" />
            {/* Right border */}
            <div className="absolute top-full right-0 w-1 h-full bg-gradient-to-b from-transparent via-gray-300 to-gray-400 group-hover:animate-border-slide-down" />
            {/* Bottom border */}
            <div className="absolute bottom-0 left-full w-full h-1 bg-gradient-to-l from-transparent via-gray-300 to-gray-400 group-hover:animate-border-slide-left" />
            {/* Left border */}
            <div className="absolute bottom-full left-0 w-1 h-full bg-gradient-to-t from-transparent via-gray-300 to-gray-400 group-hover:animate-border-slide-up" />
          </div>
        </div>

        <img
          src="../cardImage.png"
          alt={`Item ${item}`}
          className="w-full h-full object-cover hover:scale-110 hover:-rotate-6 transition-all duration-1000"
        />
        
       
      </div>
    </div>
  );
};

export default CarouselCard;