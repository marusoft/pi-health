import React from 'react';
import Stars from '../../Assets/images/stars.png';
import ReviewImage from '../../Assets/images/review-image-01.png';
import Quote from '../../Assets/svg/quotes.svg';
import Container from '../Container';
import TitleWithBg from '../TitleWithBg';

const Review = () => {
  return (
    <>
      <div className="w-full flex justify-between items-center">
        <img src={Stars} alt="Stars" className="w-[120px]" />
        <img src={Quote} alt="Quote" className="w-[20px]" />
      </div>
      <h2 className="text-[28px] font-[700] text-[white]">Best Experience</h2>
      <p className="text-[16px] font-Nunito font-[400] text-white">
        A friend introduced me to Pi-Health, now i am able to effectively
        monitor the health progress of every one i care about. thanks to
        Pi-Health
      </p>
      <div className="flex flex-row gap-4">
        <div className="h-[112px] w-[117px]">
          <img src={ReviewImage} className="object-contain" alt="Review" />
        </div>
        <div className="flex flex-col justify-center text-white">
          <h3 className="font-[700] font-Nunito text-[18px]">Sarah Grace</h3>
          <p className="text-[16px] font-Nunito font-[400]">Business Analyst</p>
        </div>
      </div>
    </>
  );
};

const ReviewContainer = () => {
  return (
    <div className="flex flex-1 lg:min-w-[280px] rounded-[5px] bg-blue lg:max-w-[554px] p-12 box-border mb-8 gap-8 flex-col">
      <Review />
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
          <div className="flex gap-8 flex-wrap w-full">
            <ReviewContainer />
            <ReviewContainer />
            <ReviewContainer />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CustomerReview;
