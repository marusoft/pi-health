import React from 'react';
import Container from '../Container';
import TitleWithBg from '../TitleWithBg';
import constants from './constants';
import ContentBox from './ContentBox';

const HowItWorks = () => {
  return (
    <section className="w-screen h-max">
      <Container>
        <>
          <TitleWithBg>How it Works</TitleWithBg>
          <div className="my-16 flex w-full mx-auto items-center lg:items-center flex-col flex-wrap gap-[140px]">
            {constants.map((constant, index) => {
              return (
                <ContentBox
                  key={constant.tag}
                  constant={constant}
                  index={index}
                />
              );
            })}
          </div>
        </>
      </Container>
    </section>
  );
};

export default HowItWorks;
