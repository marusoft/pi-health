import { useEffect, useState } from 'react';

const windowResizerListener = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', () => setWindowWidth(window.innerWidth));
  }, [windowWidth]);

  return { windowWidth };
};

export default windowResizerListener;
