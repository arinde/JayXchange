import { useEffect, useRef, useState } from "react";

const Counter = ({ target = 90, duration = 3000 }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          animateCount();
          setHasAnimated(true);
          observer.disconnect(); // Stop observing after animation starts
        }
      },
      { threshold: 0.5 } // Start when 50% of element is visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [hasAnimated]);

  const animateCount = () => {
    const startTime = performance.now();

    const step = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const currentCount = Math.floor(progress * target);
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(target); // Ensure final value
      }
    };

    requestAnimationFrame(step);
  };


  return (
        <div ref={ref}>
            {count}
        </div>
      
      
  );
};

export default Counter;
