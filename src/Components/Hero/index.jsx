import React, { useRef } from 'react';
import Button from '../Buttton';
import routes from '../../Routes/routes.const';
import Container from '../Container';
import StatsBar from '../StatBar';
import HeroImageOne from '../../Assets/images/HeroImage.png';
import HeroImageTwo from '../../Assets/images/hero-image-02.png';
import HeroImageThree from '../../Assets/images/hero-image-03.png';
import HeroImageFour from '../../Assets/images/hero-image-04.png';
import slideEffect from '../../Utils/slideEffect';

const IMAGES = [
  {
    image: HeroImageOne,
    alt: 'elderly',
  },
  {
    image: HeroImageTwo,
    alt: 'sports',
  },
  {
    image: HeroImageThree,
    alt: 'kids',
  },
  {
    image: HeroImageFour,
    alt: 'animal',
  },
];

const Hero = () => {
  const heroRef = useRef();
  slideEffect(heroRef);

  return (
    <section className="relative min-h-[1024px] w-screen">
      <div
        ref={heroRef}
        className="h-full flex w-full z-[-1] display overflow-x-scroll absolute"
      >
        {IMAGES.map((image) => {
          return (
            <img
              key={image.alt}
              className="min-w-[100vw] object-contain lg:object-cover h-full"
              src={image.image}
              alt={image.alt}
            />
          );
        })}
      </div>
      <div className="h-full flex  w-full linear-gradient z-[-1] absolute"></div>
      <Container>
        <div className="flex flex-col gap-10 justify-center">
          <div className="lg:mt-40 mt-24" />
          <h2 className="text-white text-[28px] leading-9 capitalize font-[700] max-w-[320px] lg:max-w-[550px] lg:leading-[45px] lg:text-[35px]">
            AI powered remote monitoring tool for complex patients.
          </h2>
          <p className="text-[18px] text-white font-Nunito font-[300] leading-[28px] tracking-tight w-[90%] lg:max-w-[560px]">
            PI-Health is a remote monitoring tool that provides risk stratified
            information enabling it to become a decision intelligence tool that
            allows clinicians make faster and better decisons concerning
            patients health.
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
