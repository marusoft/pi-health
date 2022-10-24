import React from 'react';

const Carousel = ({ product }) => {
  return (
    <div className="flex flex-col lg:min-w-[620px] min-w-[340px] snap-center rounded-[10px] gap-8">
      <img
        src={product?.image}
        className="w-full object-contain"
        alt="Carousel"
      />
      <p className="font-[400] font-Nunito text-[16px]">{product?.subtitle}</p>
    </div>
  );
};

export default Carousel;
