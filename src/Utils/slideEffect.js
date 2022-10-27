import { useEffect } from 'react';

const slideEffect = (heroRef) =>
  useEffect(() => {
    let scrollRightInterval;
    let scrollLeftInterval;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          clearInterval(scrollRightInterval);
          scrollLeftInterval = setInterval(() => {
            heroRef.current.scrollBy({
              top: 0,
              left: heroRef.current.children[0].clientWidth,
              behavior: 'smooth',
            });
          }, 2500);
        }
      },
      {
        threshold: 0.9,
        root: heroRef.current,
      }
    );

    const lastChildObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          clearInterval(scrollLeftInterval);
          scrollRightInterval = setInterval(() => {
            heroRef.current.scrollBy({
              top: 0,
              left: -heroRef.current.children[0].clientWidth,
              behavior: 'smooth',
            });
          }, 2500);
        }
      },
      {
        root: heroRef.current,
        threshold: 0.9,
      }
    );
    const lastChild = heroRef.current.children.length - 1;
    const firstChild = heroRef.current.children[0];

    const mainContainerObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          observer.observe(firstChild);
          lastChildObserver.observe(heroRef.current.children[lastChild]);
        } else {
          observer.unobserve(firstChild);
          lastChildObserver.unobserve(heroRef.current.children[lastChild]);
        }
      },
      {
        threshold: 0.8,
      }
    );

    mainContainerObserver.observe(heroRef.current);
  }, []);

export default slideEffect;
