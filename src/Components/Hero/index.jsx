import React from 'react';
import Button from '../Buttton';
import routes from '../../Routes/routes.const';
import Container from '../Container';
import StatsBar from '../StatBar';

const Hero = () => {
  return (
    <section className="relative linear-gradient min-h-[1024px] w-screen">
      <Container>
        <div className="flex flex-col gap-10 justify-center">
          <div className="lg:mt-40 mt-24" />
          <h2 className=" text-[28px] leading-9 capitalize font-[700] max-w-[320px] lg:max-w-[550px] lg:leading-[45px] lg:text-[35px]">
            A new AI powered remote monitoring tool for complex patients.
          </h2>
          <p className="text-[18px] font-Nunito font-[600] leading-[28px] tracking-tight w-[90%] lg:max-w-[560px]">
            Pi-Health is a suite of remote healthcare tools powered by
            Artificial Intelligence that can provide ailment-specific monitoring
            as well as a platform for complete clinical care for the most
            vulnerable patients.
          </p>
          <div className="flex gap-8 items-center">
            <Button
              type="button"
              variant="secondary"
              role="link"
              route={routes.programTwo}
            >
              Learn More
            </Button>
            <Button
              role="link"
              route={routes.programOne}
              type="button"
              variant="primary"
              border="yes"
            >
              Watch the video
            </Button>
          </div>
        </div>
      </Container>
      <StatsBar />
    </section>
  );
};

export default Hero;
