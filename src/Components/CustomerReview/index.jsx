import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';
import ReviewImageOne from '../../Assets/images/review-image-01.png';
import ReviewImageTwo from '../../Assets/images/review-image-02.png';
import ReviewImageThree from '../../Assets/images/review-image-03.png';
import { CarouselNavs } from '../CarouselNavs';
import Container from '../Container';
import TitleWithBg from '../TitleWithBg';

const REVIEWS = [
  {
    header: 'Best Experience',
    text: ' A friend introduced me to Pi-Health, now i am able to effectively monitor the health progress of every one i care about. thanks to Pi-Health',
    image: ReviewImageOne,
    name: 'Sarah Grace',
    occupation: 'Business Analyst',
  },
  {
    header: 'Life Changing',
    text: 'My child is Autistic and with PI health i have been able to monitor his health and every ailment that can arise in the future, he now freely plays with his friends and i now worryless, thanks to PI-health wearable for kids',
    image: ReviewImageTwo,
    name: 'Monica Juglar',
    occupation: 'Trader',
  },
  {
    header: 'I was blown away!',
    text: 'PI-Vet is the best platform i came across this year, it has helped reduced the workload i encounter at keeping my animals healthy, i can now monitor my horses injuries and the fact i can use Pi-wearbles for my other animals makes it amazing',
    image: ReviewImageThree,
    name: 'Mattew Wagner',
    occupation: 'Farmer',
  },
];

const Review = ({ review }) => {
  return (
    <>
      <h2 className="text-[28px] font-[700] z-10 text-[white]">
        {review?.header}
      </h2>
      <p className="text-[16px] z-10 font-Nunito font-[400] text-white">
        {review?.text}
      </p>
      <div className="flex flex-row gap-4">
        <div className="h-full w-full z-[-1] top-0 left-0 absolute ">
          <img
            src={review?.image}
            className="object-cover h-[110%] w-[110%] lg:h-full lg:min-w-full"
            alt="Review"
          />
        </div>
        <div className="w-full h-full top-0 left-0 opacity-70 absolute bg-black" />
        <div className="flex flex-col items-end w-full justify-center text-white">
          <h3 className="font-[700] z-10 font-Nunito text-[18px]">
            - {review?.name}
          </h3>
          <p className="text-[16px] z-10 font-Nunito font-[400]">
            {review?.occupation}
          </p>
        </div>
      </div>
    </>
  );
};

const ReviewContainer = ({ review }) => {
  return (
    <div className="flex flex-1 overflow-hidden justify-between relative snap-start md:min-w-[540px] min-w-full rounded-[16px] py-6 px-10 box-border mb-8 gap-8 flex-col">
      <Review review={review} />
    </div>
  );
};

const ReviewInfo = () => {
  return (
    <div className="flex p-8 lg:-translate-y-[20px] flex-col max-w-[821px] min-w-[320px] gap-4 flex-1">
      <TitleWithBg>Customer Review</TitleWithBg>

      <p className="para translate-x-[100vw] opacity-0 text-[16px] text-center font-[500]">
        Our Customers know how dedicated we are. Pi-Health has been touching
        lives over the years while delivering satisfaction and achieving clients
        goals
      </p>
    </div>
  );
};

const CustomerReview = () => {
  const carouselRef = useRef();
  const reviewRef = useRef();

  useEffect(() => {
    let ctx = gsap.context(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            gsap.to('.child', {
              y: 0,
              opacity: 1,
              duration: 1,
            });
            gsap.to('.para', {
              x: 0,
              opacity: 1,
              duration: 1,
            });
            setTimeout(() => {
              gsap.to('.review', {
                x: 0,
                opacity: 1,
                duration: 1,
              });
            }, 300);
          }
        },
        {
          threshold: 0.7,
        }
      );

      observer.observe(reviewRef.current);
    }, reviewRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={reviewRef} className="w-screen">
      <Container>
        <div className="flex w-full flex-col items-center">
          <ReviewInfo />
          <div
            ref={carouselRef}
            className="review -translate-x-[100vw] opacity-0 flex gap-8 scrollbar snap-x w-full overflow-x-scroll"
          >
            {REVIEWS.map((review) => {
              return <ReviewContainer key={review.header} review={review} />;
            })}
          </div>
          <CarouselNavs carouselRef={carouselRef} PRODUCTS={REVIEWS} />
        </div>
      </Container>
    </section>
  );
};

export default CustomerReview;
