import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';
import { CarouselNavs } from '../CarouselNavs';
import Container from '../Container';
import TitleWithBg from '../TitleWithBg';
import Carousel from './Carousel';

import { PRODUCTS } from './productsData';

const OurProducts = () => {
  const carouselRef = useRef();
  const parentRef = useRef();

  useEffect(() => {
    let ctx = gsap.context(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            gsap.to('.child', {
              y: 0,
              opacity: 1,
              duration: 2,
            });
            setTimeout(() => {
              gsap.to('.main', {
                x: 0,
                opacity: 1,
                duration: 2,
              });
            }, 300);
          }
        },
        {
          threshold: 0.6,
        }
      );

      observer.observe(parentRef.current);
    }, parentRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={parentRef} className="w-screen h-max">
      <Container>
        <div>
          <TitleWithBg>Our Products</TitleWithBg>
          <div className="main translate-x-[100vw] opacity-0 mt-16 flex flex-col w-full ">
            <div
              ref={carouselRef}
              className=" w-full flex scrollbar px-8 overflow-x-hidden snap-x mx-auto gap-20"
            >
              {PRODUCTS.map((product, index) => {
                return <Carousel key={index} product={product} />;
              })}
            </div>
            <CarouselNavs carouselRef={carouselRef} PRODUCTS={PRODUCTS} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default OurProducts;
