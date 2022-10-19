import React from 'react';
import Stars from '../../Assets/images/stars.png';
import ReviewImage from '../../Assets/images/review-image-01.png';
import Quote from '../../Assets/svg/quotes.svg';
import Container from '../Container';

const Review = () => {
  return (
    <>
      <div className="w-full flex justify-between items-center">
        <img src={Stars} alt="Stars" className="w-[150px]" />
        <img src={Quote} alt="Quote" />
      </div>
      <h2 className="text-[30px] font-Lora font-[700] text-[white]">
        Best Experience
      </h2>
      <p className="text-[18px] font-[500] text-white">
        A friend introduced me to Pi-Health, now i am able to effectively
        monitor the health progress of every one i care about. thanks to
        Pi-Health
      </p>
      <div className="flex flex-row gap-4">
        <div className="h-[112px] w-[117px]">
          <img src={ReviewImage} className="object-contain" alt="Review" />
        </div>
        <div className="flex flex-col justify-center text-white">
          <h3 className="font-[700] font-Lora text-[21px]">Sarah Grace</h3>
          <p className="text-[20px] font-[600]">Business Analyst</p>
        </div>
      </div>
    </>
  );
};

const ReviewContainer = () => {
  return (
    <div className="flex flex-1 min-w-[320px] bg-blue max-w-[554px] p-12 box-border mb-8 gap-8 flex-col">
      <Review />
    </div>
  );
};

const ReviewInfo = () => {
  return (
    <div className="flex p-8 lg:-translate-y-[20px] flex-col max-w-[621px] min-w-[320px] flex-1 gap-8">
      <h2 className="text-Pired text-[20px] font-Lora font-[700]">
        CUSTOMER REVIEW
      </h2>
      <p className="text-[36px] font-[700] leading-10 text-blue">
        Our Customers know how dedicated we are
      </p>
      <p className="text-[25px] font-[500]">
        Pi-Health has been touching lives over the years while delivering
        satisfaction and achieving clients goals
      </p>
    </div>
  );
};

const CustomerReview = () => {
  return (
    <section className="w-full py-16">
      <Container>
        <div className="flex w-full items-center flex-wrap justify-between">
          <ReviewContainer />
          <ReviewInfo />
        </div>
      </Container>
    </section>
  );
};

export default CustomerReview;
