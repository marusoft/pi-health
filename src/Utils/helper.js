import { useEffect, useState } from 'react';

/**
 * @windowResizerListener - A function used to get the current viewport width of the browser
 *
 */

const windowResizerListener = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', () => setWindowWidth(window.innerWidth));
  }, [windowWidth]);

  return { windowWidth };
};

export default windowResizerListener;
