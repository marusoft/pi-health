import React from 'react';

const ContentBox = ({ constant, index }) => {
  let flexRow;
  const evaluateStyling = () => {
    if (index % 2 === 1) {
      flexRow = 'lg:flex-row-reverse';
    } else {
      flexRow = 'lg:flex-row';
    }
    return flexRow;
  };

  return (
    <div
      className={`work-${index} opacity-0 translate-y-[20%] flex ${evaluateStyling()} lg:w-[80%] flex-wrap flex-col-reverse gap-12`}
    >
      {constant.list && window.innerWidth <= 768 && (
        <ul className="pl-8 lg:translate-y-0 -translate-y-[40px]">
          {constant.list.map((item) => (
            <li
              className="text-[16px] font-Nunito pl-4 lg:max-w-[500px] leading-7 font-[400] list-disc"
              key={item}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
      {window.innerWidth <= 768 && (
        <p className="text-[16px] lg:translate-y-0 -translate-y-[32px]  font-Nunito max-w-[450px] leading-6 font-[500]">
          {constant.subTitle}
        </p>
      )}

      <div className="max-w-[462px] lg:translate-y-0 -translate-y-[20px] min-w-[300px] flex-1 max-h-[567px]">
        <img
          loading="lazy"
          src={constant.image}
          className={`object-contain ${index === 1 && 'rounded-2xl'}`}
          alt={constant.title}
        />
      </div>
      <div className="flex flex-1 min-w-[300px] flex-col gap-6 justify-center">
        <div
          className={`${constant.tagColor} lg:mx-0 mx-auto text-white rounded-[20px] w-[93px] py-2 flex items-center justify-center text-[16px] font-[600]`}
        >
          {constant.tag}
        </div>
        <h2 className="lg:text-[28px] text-[20px] lg:text-left text-center font-[700]">
          {constant.title}
        </h2>
        {window.innerWidth > 768 && (
          <p className="text-[16px] font-Nunito max-w-[450px] leading-6 font-[500]">
            {constant.subTitle}
          </p>
        )}
        {constant.list && window.innerWidth > 768 && (
          <ul className="pl-8">
            {constant.list.map((item) => (
              <li
                className="text-[16px] font-Nunito pl-4 lg:max-w-[500px] leading-7 font-[400] list-disc"
                key={item}
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ContentBox;
