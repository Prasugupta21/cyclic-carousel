import React from 'react';

const CarouselCard = ({ item, index, isActive, handleClick }) => {
  return (
    <div
      onClick={() => handleClick(index)}
      className={`
        flex-shrink-0
        w-[360px]
        transition-all
        duration-500
        ease-in-out
        cursor-pointer
        px-4
        ${isActive 
          ? 'scale-110 z-20' 
          : 'scale-90 opacity-70' 
        }
      `}
    >
      <div 
        className={`
          w-full 
          h-[480px] 
          rounded-2xl 
          overflow-hidden
          transition-shadow
          duration-500
          ${isActive ? 'shadow-2xl' : 'shadow-lg'}
        `}
      >
        <img
          src="../background.jpeg"
          alt={`Item ${item}`}
          className="w-full h-full object-cover"
        />
        <div 
          className={`
            absolute 
            bottom-0 
            left-0 
            right-0 
            p-6 
            bg-gradient-to-t 
            from-black/60 
            to-transparent
            transition-opacity
            duration-500
            ${isActive ? 'opacity-100' : 'opacity-80'}
          `}
        >
          <p className="text-white text-xl font-semibold">
            Item {item}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CarouselCard;