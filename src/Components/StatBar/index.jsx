import React from 'react';
import windowResizerListener from '../../Utils/helper';
import Container from '../Container';

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

export const StatsBarContent = ({ subTitle, title, index }) => (
  <div
    className={`flex flex-col items-center lg:bg-white lg:min-w-[250px] min-w-full ${
      index === 0 && 'mt-16 lg:mt-4'
    } my-4 p-4 [box-shadow:_0px_4px_4px_4px_rgba(193,_183,_183,_0.13)] h-max justify-center text-[rgba(0,0,0,0.85)] flex-1`}
  >
    <h2 className="font-[700] text-center text-[28px] font-Nunito tracking-[0.4px] ">
      {title}
    </h2>
    <p className="font-[600] h-[80px] text-center max-w-[350px] font-Nunito text-[16px] leading-6">
      {subTitle}
    </p>
  </div>
);

const StatsBar = () => {
  const { windowWidth } = windowResizerListener();

  return (
    <section
      className={`flex h-max mt-16 bg-white lg:bg-transparent  ${
        windowWidth > 1289
          ? 'absolute -translate-x-[50%]  bottom-0 left-[50%] -translate-y-[-50%]'
          : 'mb-8'
      } items-center z-10 w-full max-w-[1440px] md:max-w-full mx-auto gap-4  py-4 box-border`}
    >
      <Container>
        <div className="flex lg:flex-row flex-col flex-wrap items-center w-full gap-8">
          {content.map((item, index) => (
            <StatsBarContent
              key={item.title}
              title={item.title}
              index={index}
              subTitle={item.subTitle}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default StatsBar;
