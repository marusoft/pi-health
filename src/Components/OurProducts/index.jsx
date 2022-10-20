import React, { useRef, useState } from 'react';
import Container from '../Container';
import TitleWithBg from '../TitleWithBg';
import Carousel from './Carousel';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

const CarouselButton = ({ children, ...rest }) => (
  <button
    {...rest}
    className="bg-[rgba(0,0,0,0.3)] rounded-full flex items-center justify-center text-white text-xl w-[40px] h-[40px]"
  >
    {children}
  </button>
);

const OurProducts = () => {
  const carouselRef = useRef();
  const [trackerCounter, setCounterTracker] = useState(1);

  const handleNext = () => {
    carouselRef.current.scrollBy({ left: 400, top: 0, behavior: 'smooth' });
    setTimeout(() => {
      setCounterTracker((prev) => {
        if (prev === 3) {
          prev = 3;
          return prev;
        } else return prev + 1;
      });
    }, 200);
  };

  const handlePrev = () => {
    carouselRef.current.scrollBy({ left: -400, top: 0, behavior: 'smooth' });
    setTimeout(() => {
      setCounterTracker((prev) => {
        if (prev === 1) {
          prev = 1;
          return prev;
        } else return prev - 1;
      });
    }, 200);
  };

  return (
    <section className="w-screen h-max">
      <Container>
        <div>
          <TitleWithBg>Our Products</TitleWithBg>
          <div className="my-16 flex flex-col w-full ">
            <div
              ref={carouselRef}
              className=" w-full flex scrollbar overflow-x-hidden snap-x mx-auto gap-20"
            >
              <Carousel />
              <Carousel />
              <Carousel />
            </div>
            <div className="flex justify-between items-center gap-4 mt-8">
              <CarouselButton onClick={handlePrev}>
                <BsArrowLeft />
              </CarouselButton>

              <div className="flex flex-row gap-3">
                <span
                  className={`h-[25px] w-[25px] flex rounded-full ${
                    trackerCounter === 1 && 'bg-[#313131D9]'
                  } items-center border-2 border-[#0000004D] justify-center`}
                />
                <span
                  className={`h-[25px] w-[25px] flex rounded-full ${
                    trackerCounter === 2 && 'bg-[#313131D9]'
                  } items-center border-2 border-[#0000004D] justify-center`}
                />
                <span
                  className={`h-[25px] w-[25px] flex rounded-full ${
                    trackerCounter === 3 && 'bg-[#313131D9]'
                  } items-center border-2 border-[#0000004D] justify-center`}
                />
              </div>

              <CarouselButton onClick={handleNext}>
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
