import React from 'react'
import CountUp from 'react-countup'
import count from '../css/count.module.css'

const Counter = () => {
  return (
   <div className={`${count.count} px-40 py-12`}>
    <div className='grid grid-cols-4 text-center px-10'>
        <div>
            <h1 className='text-6xl font-bold text-white'><CountUp start={0} end={95} duration={2.7}></CountUp>%</h1>
            <p className='py-2 font-medium'>Satisfied Users</p>
        </div>
        <div>
            <h1  className='text-6xl font-bold text-white'><CountUp start={0} end={70} duration={2.7}></CountUp>%</h1>
            <p className='py-2 font-medium'>Achivements</p>
        </div>
        <div>
            <h1 className='text-6xl font-bold text-white'><CountUp start={0} end={55} duration={2.7}></CountUp>%</h1>
            <p className='py-2 font-medium'>Progress Rate</p>
        </div>
        <div>
            <h1 className='text-6xl font-bold text-white'><CountUp start={0} end={5} duration={2.7}></CountUp>+</h1>
            <p className='py-2 font-medium'>Years of Experience</p>
        </div>
    </div>
   </div>
  )
}

export default Counter