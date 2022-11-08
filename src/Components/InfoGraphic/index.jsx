import React from 'react';

/**
 *
 * @tagNumber - The number prefix for the title of the infographic container
 * @title - The title at the top of the infographic container
 * @imageSrc - The image source in the infographic container
 * @text - The paragraph after the image in the infographic container, could be a text or a list
 * @index - A non compulsory prop for the intents of gsap animation - helps to identify each container uniquely
 *
 */

const InfoGraphic = ({ tagNumber, title, imageSrc, text, index }) => (
  <div className={`${'infoRef' + '_' + index} flex w-full flex-col gap-4`}>
    <div className="flex gap-2 items-center">
      <span className="text-[18px] font-[600] ">{tagNumber}</span>
      <h2 className="text-[18px] font-[600] ">{title}</h2>
    </div>
    <div className="max-h-[300px] overflow-hidden">
      <img className="max-w-full h-full object-contain" src={imageSrc} alt="" />
    </div>
    {typeof text === 'string' && (
      <p className="text-base font-[400] text-[#131313CC] ">{text}</p>
    )}
    {typeof text === 'object' && (
      <ul className="prod_list w-full translate-y-10 opacity-0 px-4 list-disc text-base font-[500] mt-4 flex flex-col gap-4">
        {list.map((item, index) => {
          return (
            <li key={item + index} className="pl-3">
              {item}
            </li>
          );
        })}
      </ul>
    )}
  </div>
);

export default InfoGraphic;
