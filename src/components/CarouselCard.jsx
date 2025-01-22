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
        ${isActive 
          ? 'scale-110 z-20 ' 
          : 'scale-90 opacity-70 ' 
        }
      `}
    >
      <div 
        className={`
          w-full 
          h-[480px] 
          rounded-2xl 
          overflow-hidden
          transition-opacity
          duration-500
          ${isActive ? 'shadow-2xl' : 'shadow-lg'}
        `}
      >
        <img
          src="../cardImage.png"
          alt={`Item ${item}`}
          className="w-full h-full object-cover hover:scale-110 hover:-rotate-6 transition-all duration-1000 "
        />
        <div 
          className={`
            absolute 
            bottom-0 
            left-0 
            right-0 
            p-6 
           
            transition-opacity
            duration-500
            ${isActive ? 'opacity-100' : 'opacity-80'}
          `}
        >
          {/* <p className="text-white text-xl font-semibold">
            Item {item}
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default CarouselCard;