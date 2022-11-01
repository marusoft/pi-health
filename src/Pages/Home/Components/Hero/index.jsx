import React, { useEffect, useRef } from 'react';
import { Button, Container } from '../../../../Components';
import routes from '../../../../Routes/routes.const';
import HeroImageOne from '../../../../Assets/images/HeroImage.jpg';
import HeroImageTwo from '../../../../Assets/images/hero-image-02.jpg';
import HeroImageThree from '../../../../Assets/images/hero-image-03.jpg';
import HeroImageFour from '../../../../Assets/images/hero-image-04.jpg';
import HeroImageFive from '../../../../Assets/images/hero-image-05.jpg';
import slideEffect from '../../../../Utils/slideEffect';
import gsap, { Elastic } from 'gsap';

const IMAGES = [
  {
    image: HeroImageFive,
    alt: 'dog',
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
    alt: 'horse',
  },
  {
    image: HeroImageOne,
    alt: 'elderly',
  },
];

const Hero = () => {
  const heroRef = useRef();
  const textRef = useRef();

  slideEffect(heroRef);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('h2', {
        opacity: 0,
        y: 100,
        ease: Elastic.easeOut.config(1, 0.3),
        duration: 2,
      });
      gsap.from('p', {
        opacity: 0,
        y: 100,
        delay: 1,
        ease: Elastic.easeOut.config(1, 0.3),
        duration: 2,
      });
      gsap.from('.button', {
        opacity: 0,
        y: 100,
        delay: 1.5,
        ease: Elastic.easeOut.config(1, 0.3),
        duration: 2,
      });
    }, textRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative md:max-h-[1024px] h-screen w-screen">
      <div
        ref={heroRef}
        className="lg:h-full flex w-full min-h-full z-[-1] display overflow-x-scroll absolute"
      >
        {IMAGES.map((image) => {
          return (
            <img
              loading="lazy"
              key={image.alt}
              className="min-w-[100vw] object-cover min-h-full"
              src={image.image}
              alt={image.alt}
            />
          );
        })}
      </div>
      <div className="h-full flex  w-full linear-gradient z-[-1] absolute"></div>
      <Container>
        <div
          ref={textRef}
          className="flex flex-col gap-10 h-screen justify-center"
        >
          <h2 className="box text-white text-[28px] leading-10 capitalize font-[700] max-w-[680px] lg:max-w-[650px] lg:leading-[45px] lg:text-[35px]">
            AI powered remote monitoring tool for complex patients.
          </h2>
          <p className="circle text-[18px] text-white font-Nunito font-[300] leading-[28px] tracking-wide w-[90%] lg:max-w-[560px]">
            PI-Health is a remote monitoring tool that provides risk stratified
            information enabling it to become a decision intelligence tool that
            allows clinicians make faster and better decisons concerning
            patients health.
          </p>
          <div className="button flex gap-8 mt-3 items-center">
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
    </section>
  );
};

export default Hero;
