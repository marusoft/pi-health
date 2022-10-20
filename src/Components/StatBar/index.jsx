import React from 'react';
import windowResizerListener from '../../Utils/helper';

export const content = [
  { title: '17M', subTitle: 'People over 60 with co-morbidities.' },
  { title: '800K', subTitle: 'Children with  special needs.' },
  {
    title: '80K',
    subTitle: 'Number of vulnerable people who use remote healthcare',
  },
  {
    title: '1',
    subTitle:
      'Number of products that provide complete clinical flow for patients, carers, and clinicians.',
  },
];

export const StatsBarContent = ({ subTitle, title }) => (
  <div className="flex flex-col items-center min-w-[250px] h-max justify-center text-[rgba(0,0,0,0.85)] flex-1">
    <h2 className="font-[700] text-center text-[60px] font-sans tracking-[0.4px] ">
      {title}
    </h2>
    <p className="font-[500] h-[80px] text-center max-w-[350px] text-[16px] leading-6">
      {subTitle}
    </p>
  </div>
);

const StatsBar = () => {
  const { windowWidth } = windowResizerListener();

  return (
    <div
      className={`flex h-max flex-wrap justify-center border ${
        windowWidth > 1289
          ? 'absolute -translate-x-[50%]  bottom-0  left-[50%] -translate-y-[-50%]'
          : 'mb-8'
      } items-center z-10 lg:w-[1291px] md:max-w-full mx-auto rounded-[20px] gap-4 px-12 py-8 box-border bg-white [box-shadow:_0px_4px_4px_4px_rgba(193,_183,_183,_0.13)]`}
    >
      {content.map((item) => (
        <StatsBarContent
          key={item.title}
          title={item.title}
          subTitle={item.subTitle}
        />
      ))}
    </div>
  );
};

export default StatsBar;
