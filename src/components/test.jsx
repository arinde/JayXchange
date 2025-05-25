import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const Test = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div className='flex '>
        <div ref={ref} className="text-4xl font-bold text-green-600">
            {inView && (
                <CountUp end={5} duration={1} suffix="" />
            )}
            <p className="text-sm font-normal text-gray-600">Ratings</p>
        </div>
        <div ref={ref} className="text-4xl font-bold text-green-600">
            {inView && (
                <CountUp end={50} duration={1} prefix="$" suffix="+" />
            )}
            <p className="text-sm font-normal text-gray-600">Success rate</p>
        </div>
        <div ref={ref} className="text-4xl font-bold text-green-600">
            {inView && (
                <CountUp end={90} duration={1} suffix="%" />
            )}
            <p className="text-sm font-normal text-gray-600">Success rate</p>
        </div>
    </div>
    
  );
};

export default Test;
