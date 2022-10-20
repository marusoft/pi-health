import React from 'react';
import HeroImage from '../../Assets/images/HeroImage.png';
import Button from '../Buttton';
import routes from '../../Routes/routes.const';
import Container from '../Container';
import StatsBar from '../StatBar';

const Hero = () => {
  return (
    <section className="relative w-screen">
      <div className="max-h-[1074px] w-full">
        <img
          src={HeroImage}
          alt="Hero"
          className="h-full w-full object-contain"
        />
      </div>

      <div className=" h-[1074px] top-0 absolute w-full linear-gradient" />
      <Container>
        <div className="absolute top-[40%] -translate-y-[50%]  flex flex-col gap-10 justify-center">
          <h2 className="text-[35px] font-Lora font-[700] max-w-[450px] leading-[45px]">
            A new AI powered remote monitoring tool for complex patients.
          </h2>
          <p className="text-[20px] font-[500] leading-[32px] tracking-tight max-w-[560px]">
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
