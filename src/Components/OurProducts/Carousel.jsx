import React from 'react';
import CarouselImage from '../../Assets/images/carousel-image-01.png';

const Carousel = () => {
  return (
    <div className="flex flex-col lg:min-w-[620px] min-w-[300px] snap-center p-8 rounded-[10px] border border-slate-200 gap-8">
      <img
        src={CarouselImage}
        className="w-full object-contain"
        alt="Carousel"
      />
      <p className="font-[500] text-[20px]">
        Integration with patients Electronic medical record (EMR) using Fast
        Healthcare Interoperability Resources (FHIR).
      </p>
    </div>
  );
};

export default Carousel;
