

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
        className="
          relative
          w-full 
          h-[480px] 
          rounded-2xl 
          overflow-hidden
          group
          bg-white
          shadow-lg
        "
      >
        {/* Triple diagonal shine effect */}
        <div className="
          absolute 
          inset-0 
          w-full 
          h-full 
          opacity-0 
          group-hover:opacity-100 
          z-20 
          overflow-hidden
          pointer-events-none
          before:absolute
          before:content-['']
          before:top-0
          before:left-[-75%]
          before:w-[200%]
          before:h-[200%]
          before:bg-[linear-gradient(135deg,transparent_10%,rgba(255,255,255,0)_20%,rgba(255,255,255,0.9)_25%,transparent_30%,transparent_35%,rgba(255,255,255,0.9)_40%,transparent_45%,transparent_50%,rgba(255,255,255,0.9)_55%,transparent_60%)]
          before:group-hover:animate-shine
          before:-skew-x-45
        "/>

        {/* Animated borders */}
        <div className="absolute inset-0 w-full h-full rounded-2xl opacity-0 group-hover:opacity-100 z-10">
          <div className="absolute inset-0 w-full h-full rounded-2xl">
            <div className="absolute top-0 left-0 w-full h-[5px] bg-gradient-to-r from-transparent via-white to-transparent group-hover:animate-border-slide-right" />
            <div className="absolute top-0 right-0 w-[5px] h-full bg-gradient-to-b from-transparent via-white to-transparent group-hover:animate-border-slide-down" />
            <div className="absolute bottom-0 left-0 w-full h-[5px] bg-gradient-to-l from-transparent via-white to-transparent group-hover:animate-border-slide-left" />
            <div className="absolute top-0 left-0 w-[5px] h-full bg-gradient-to-t from-transparent via-white to-transparent group-hover:animate-border-slide-up" />
          </div>
        </div>

        {/* Image container with hover effect */}
        <div className="w-full h-full overflow-hidden">
          <img
            src="../cardImage.png"
            alt="Card"
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:-rotate-6"
          />
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 p-2 w-full">
          <p className="text-white font-bold text-2xl tracking-wide translate-x-0 translate-y-10 opacity-0 group-hover:translate-x-6 group-hover:-translate-y-6 group-hover:opacity-100 transition-all duration-1000">
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