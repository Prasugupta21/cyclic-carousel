

const CarouselContainer = ({ children, scrollRef, handleScroll }) => {
    return (
      <div className="w-full overflow-hidden bg-gray-50">
        <div 
          ref={scrollRef}
          className="flex overflow-x-scroll no-scrollbar py-12 gap-x-40"
          onScroll={handleScroll}
          style={{ scrollBehavior: 'smooth' }}
        >
          <div className="flex-shrink-0 w-[calc(50vw-180px)]" />
          {children}
          <div className="flex-shrink-0 w-[calc(50vw-180px)]" />
        </div>
  
        <style jsx>{`
          .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </div>
    );
  };

  export default CarouselContainer;