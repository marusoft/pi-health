import { useEffect } from 'react';

/**
 *
 * @param {*} heroRef - The reference to the scrolling container
 * @slideEffect - A functions that checks whether an element is intersecting another element, which is the referencing element, and then scrolls the container if isIntersecting returns true.
 *
 */

const slideEffect = (heroRef) =>
  useEffect(() => {
    let scrollRightInterval, scrollLeftInterval, timeoutOne, timeoutTwo;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          clearTimeout(timeoutTwo);
          function toLeft() {
            heroRef?.current?.scrollBy({
              top: 0,
              left: heroRef.current.children[0].clientWidth,
              behavior: 'smooth',
            });

            timeoutOne = setTimeout(() => {
              toLeft();
            }, 2500);
          }

          scrollLeftInterval = toLeft;
          setTimeout(() => {
            if (window.location.pathname === '/') scrollLeftInterval();
          }, 2500);
        }
      },
      {
        threshold: 0.8,
        root: heroRef.current,
      }
    );

    const lastChildObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          clearTimeout(timeoutOne);

          function toRight() {
            heroRef?.current?.scrollBy({
              top: 0,
              left: -heroRef.current.children[0].clientWidth,
              behavior: 'smooth',
            });

            timeoutTwo = setTimeout(() => {
              toRight();
            }, 2500);
          }

          scrollRightInterval = toRight;
          setTimeout(() => {
            if (window.location.pathname === '/') scrollRightInterval();
          }, 2500);
        }
      },
      {
        root: heroRef.current,
        threshold: 0.7,
      }
    );
    const lastChild = heroRef.current.children.length - 1;
    const firstChild = heroRef.current.children[0];

    const mainContainerObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          observer?.observe(firstChild);
          lastChildObserver?.observe(heroRef?.current?.children[lastChild]);
        } else {
          observer?.unobserve(firstChild);
          heroRef.current &&
            lastChildObserver?.unobserve(heroRef?.current?.children[lastChild]);
        }
      },
      {
        threshold: 0.7,
      }
    );

    mainContainerObserver?.observe(heroRef.current);
  }, []);

export default slideEffect;
