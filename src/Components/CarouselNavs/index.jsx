import { useState } from 'react';
import { TfiAngleLeft, TfiAngleRight } from 'react-icons/tfi';

export const CarouselNavs = ({ carouselRef, PRODUCTS }) => {
  const CarouselButton = ({ children, ...rest }) => (
    <button
      {...rest}
      className="flex items-center justify-center text-black text-xl w-[40px] h-[40px]"
    >
      {children}
    </button>
  );

  const Tracker = ({ trackerCounter, index }) => {
    return (
      <span
        className={`h-[15px] w-[15px] flex rounded-full ${
          trackerCounter === index ? 'bg-sky-700' : 'bg-slate-100'
        } items-center justify-center`}
      />
    );
  };

  const [trackerCounter, setCounterTracker] = useState(0);
  const [waiting, setWaiting] = useState(false);

  const handleNext = (carouselRef, PRODUCTS) => {
    setWaiting(true);
    carouselRef.current.scrollBy({ left: 400, top: 0, behavior: 'smooth' });

    setCounterTracker((prev) => {
      if (prev === PRODUCTS.length - 1) {
        prev = PRODUCTS.length - 1;
        return prev;
      } else return prev + 1;
    });
  };

  const handlePrev = (carouselRef) => {
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
    <div className="flex justify-between w-full items-center gap-4 mt-8">
      <CarouselButton
        onClick={() => {
          handlePrev(carouselRef);
          setTimeout(() => {
            setWaiting(false);
          }, 1000);
        }}
        disabled={waiting}
      >
        <TfiAngleLeft className="cursor-pointer" />
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
        onClick={() => {
          handleNext(carouselRef, PRODUCTS);
          setTimeout(() => {
            setWaiting(false);
          }, 1000);
        }}
        disabled={waiting}
      >
        <TfiAngleRight className="cursor-pointer" />
      </CarouselButton>
    </div>
  );
};
