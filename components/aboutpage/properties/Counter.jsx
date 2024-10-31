import React from 'react';
import CountUp from 'react-countup';
import count from '../css/count.module.css';

const Counter = () => {
  return (
    <div className={`${count.count} px-6 py-12 md:px-16 lg:px-40`}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        <div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
            <CountUp start={0} end={95} duration={2.7} />%
          </h1>
          <p className="py-2 font-medium text-gray-300">Satisfied Users</p>
        </div>
        <div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
            <CountUp start={0} end={70} duration={2.7} />%
          </h1>
          <p className="py-2 font-medium text-gray-300">Achievements</p>
        </div>
        <div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
            <CountUp start={0} end={55} duration={2.7} />%
          </h1>
          <p className="py-2 font-medium text-gray-300">Progress Rate</p>
        </div>
        <div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
            <CountUp start={0} end={5} duration={2.7} />+
          </h1>
          <p className="py-2 font-medium text-gray-300">Years of Experience</p>
        </div>
      </div>
    </div>
  );
};

export default Counter;
