import React from 'react';

const ContentBox = ({ constant, index }) => {
  let flexRow;
  const evaluateStyling = () => {
    if (index % 2 === 1) {
      flexRow = 'flex-row-reverse';
    } else {
      flexRow = '';
    }
    return flexRow;
  };

  return (
    <div
      className={`flex ${evaluateStyling()} justify-between flex-wrap w-full gap-12`}
    >
      <div className="max-w-[662px] min-w-[300px] flex-1 max-h-[567px]">
        <img
          src={constant.image}
          className="object-contain"
          alt={constant.title}
        />
      </div>
      <div className="flex flex-[0.7] min-w-[300px] flex-col gap-6 justify-center">
        <div
          className={`${constant.tagColor} text-white rounded-[20px] w-[93px] py-2 flex items-center justify-center text-[20px] font-[600]`}
        >
          {constant.tag}
        </div>
        <h2 className="text-[32px] font-[700]">{constant.title}</h2>
        <p className="text-[20px] max-w-[500px] leading-9 font-[500]">
          {constant.subTitle}
        </p>
        {constant.list && (
          <ul className="pl-8">
            {constant.list.map((item) => (
              <li
                className="text-[20px] pl-4 max-w-[500px] leading-9 font-[500] list-disc"
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
