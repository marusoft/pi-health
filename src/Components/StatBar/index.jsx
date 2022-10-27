import React from 'react';
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

export const StatsBarContent = ({ subTitle, title }) => (
  <div className="flex flex-col snap-center items-center gap-4 min-w-[250px] p-4  h-max justify-center text-[#f9f9f9]">
    <span className="font-[700] flex items-center justify-center h-[100px] w-[100px] rounded-full [border:4px_solid_white] text-[28px] font-Nunito tracking-[0.4px] ">
      {title}
    </span>
    <p className="font-[400] h-[80px]  text-center max-w-[350px] font-Nunito text-[14px] tracking-wide leading-5">
      {subTitle}
    </p>
  </div>
);

const StatsBar = () => {
  return (
    <section className="flex h-max py-4 pt-12 bg-sky-700 items-center z-10 w-full gap-4 box-border">
      <Container>
        <div className="flex flex-row scrollbar snap-x overflow-x-scroll justify-between items-center w-full gap-2">
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
