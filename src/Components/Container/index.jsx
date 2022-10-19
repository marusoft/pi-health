import React from 'react';

const Container = ({ children }) => {
  return (
    <div className="max-w-[1440px] w-full px-[56px] mx-auto">{children}</div>
  );
};

export default Container;
