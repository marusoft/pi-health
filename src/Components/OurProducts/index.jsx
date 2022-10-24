import React, { useRef, useState } from 'react';
import Container from '../Container';
import TitleWithBg from '../TitleWithBg';
import Carousel from './Carousel';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { PRODUCTS } from './productsData';

const CarouselButton = ({ children, ...rest }) => (
  <button
    {...rest}
    className="bg-[rgba(0,0,0,0.3)] rounded-full flex items-center justify-center text-white text-xl w-[40px] h-[40px]"
  >
    {children}
  </button>
);

const Tracker = ({ trackerCounter, index }) => {
  return (
    <span
      className={`h-[15px] w-[15px] flex rounded-full ${
        trackerCounter === index && 'bg-[#313131D9]'
      } items-center border-2 border-[#0000004D] justify-center`}
    />
  );
};

const OurProducts = () => {
  const carouselRef = useRef();
  const [trackerCounter, setCounterTracker] = useState(0);
  const [waiting, setWaiting] = useState(false);

  const handleNext = () => {
    setWaiting(true);
    carouselRef.current.scrollBy({ left: 400, top: 0, behavior: 'smooth' });

    setCounterTracker((prev) => {
      if (prev === PRODUCTS.length - 1) {
        prev = PRODUCTS.length - 1;
        return prev;
      } else return prev + 1;
    });
  };

  const handlePrev = () => {
    setWaiting(true);
    carouselRef.current.scrollBy({ left: -400, top: 0, behavior: 'smooth' });

    setCounterTracker((prev) => {
      if (prev === 0) {
        prev = 0;
        return prev;
      } else return prev - 1;
    });
  };

  return (
    <section className="w-screen h-max">
      <Container>
        <div>
          <TitleWithBg>Our Products</TitleWithBg>
          <div className="my-16 flex flex-col w-full ">
            <div
              ref={carouselRef}
              className=" w-full flex scrollbar px-8 overflow-x-hidden snap-x mx-auto gap-20"
            >
              {PRODUCTS.map((product, index) => {
                return <Carousel key={index} product={product} />;
              })}
            </div>
            <div className="flex justify-between items-center gap-4 mt-8">
              <CarouselButton
                disabled={waiting}
                onClick={() => {
                  handlePrev();
                  setTimeout(() => {
                    setWaiting(false);
                  }, 1000);
                }}
              >
                <BsArrowLeft />
              </CarouselButton>

              <div className="flex flex-row gap-3">
                {PRODUCTS.map((tracker, index) => {
                  return (
                    <Tracker
                      key={index}
                      index={index}
                      trackerCounter={trackerCounter}
                    />
                  );
                })}
              </div>

              <CarouselButton
                disabled={waiting}
                onClick={() => {
                  handleNext();
                  setTimeout(() => {
                    setWaiting(false);
                  }, 1000);
                }}
              >
                <BsArrowRight />
              </CarouselButton>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default OurProducts;
