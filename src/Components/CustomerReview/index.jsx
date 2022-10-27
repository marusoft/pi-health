import React from 'react';
import Stars from '../../Assets/images/stars.png';
import ReviewImageOne from '../../Assets/images/review-image-01.png';
import ReviewImageTwo from '../../Assets/images/review-image-02.png';
import ReviewImageThree from '../../Assets/images/review-image-03.png';
import Quote from '../../Assets/svg/quotes.svg';
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
      <div className="w-full flex justify-between items-center">
        <img src={Stars} alt="Stars" className="w-[120px]" />
        <img src={Quote} alt="Quote" className="w-[20px]" />
      </div>
      <h2 className="text-[28px] font-[700] text-[white]">{review?.header}</h2>
      <p className="text-[16px] font-Nunito font-[400] text-white">
        {review?.text}
      </p>
      <div className="flex flex-row gap-4">
        <div className="h-[112px] w-[117px]">
          <img src={review?.image} className="object-contain" alt="Review" />
        </div>
        <div className="flex flex-col justify-center text-white">
          <h3 className="font-[700] font-Nunito text-[18px]">{review?.name}</h3>
          <p className="text-[16px] font-Nunito font-[400]">
            {review?.occupation}
          </p>
        </div>
      </div>
    </>
  );
};

const ReviewContainer = ({ review }) => {
  return (
    <div className="flex flex-1 snap-start lg:min-w-[540px] min-w-full rounded-[8px] bg-sky-700 py-6 px-10 box-border mb-8 gap-8 flex-col">
      <Review review={review} />
    </div>
  );
};

const ReviewInfo = () => {
  return (
    <div className="flex p-8 lg:-translate-y-[20px] flex-col max-w-[821px] min-w-[320px] gap-4 flex-1">
      <TitleWithBg>Customer Review</TitleWithBg>

      <p className="text-[16px] text-center font-[500]">
        Our Customers know how dedicated we are. Pi-Health has been touching
        lives over the years while delivering satisfaction and achieving clients
        goals
      </p>
    </div>
  );
};

const CustomerReview = () => {
  return (
    <section className="w-screen">
      <Container>
        <div className="flex w-full flex-col items-center">
          <ReviewInfo />
          <div className="flex gap-8 scrollbar snap-x w-full overflow-x-scroll">
            {REVIEWS.map((review) => {
              return <ReviewContainer key={review.header} review={review} />;
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CustomerReview;
