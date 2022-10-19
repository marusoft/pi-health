import React from 'react';
import Container from '../Container';
import TitleWithBg from '../TitleWithBg';
import constants from './constants';
import ContentBox from './ContentBox';

const HowItWorks = () => {
  return (
    <section className="w-screen h-max">
      <Container>
        <div>
          <TitleWithBg>How it Works</TitleWithBg>
          <div className="my-16 flex w-[90%] mx-auto flex-col flex-wrap gap-40">
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
        </div>
      </Container>
    </section>
  );
};

export default HowItWorks;
