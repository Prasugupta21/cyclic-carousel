import React from 'react';
import { FaArrowRight } from "react-icons/fa6";
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
        
        <div className="absolute bottom-0 left-0 p-2 w-full">
          <p className="text-white font-bold text-2xl tracking-wide   translate-x-0 translate-y-10 opacity-0 group-hover:translate-x-6 group-hover:-translate-y-6 group-hover:opacity-100 transition-all duration-1000">
            Pants
          </p>
        </div>
        <div className="absolute bottom-0 right-0 p-2">
          <FaArrowRight className="text-white text-xl font-semibold translate-x-0 translate-y-10 opacity-0 group-hover:-translate-x-6 group-hover:-translate-y-6 group-hover:opacity-100 transition-all duration-1000"/>
            
         
          
        </div>
      </div>
    </div>
  );
};

export default CarouselCard;