'use client';
import React, { useState } from 'react'
import { cn } from '@/app/utils/cn';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const statsContent = [
  {
    title: "Years of Experience", 
    value: 25,
    suffix: '+'
  },
  {
    title: "Clients Served", 
    value: 1500,
    suffix: '+'
  },
  {
    title: "Cases Won", 
    value: 95,
    suffix: '%'
  },
  {
    title: "Team Members", 
    value: 50,
    suffix: '+'
  }
]

const Stats = ({classNames}) => {
  const data = statsContent;

  const [hasStarted, setHasStarted] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5 // Trigger when 50% of the section is visible
  })

  // Start the animation when in view
  if (inView && !hasStarted) {
    setHasStarted(true);
  }

  if (!data) return;

  return (
    <div className={`${cn(classNames)} py-16 md:pb-32 relative z-[1]`} ref={ref}>

      <div className='max-w-[1200px] mx-auto px-5'>
        <div className='bg-secondary py-20 rounded-3xl'>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center'>
            {hasStarted && (
              <>
                {data.map((stat, index) => (
                  <div key={index} className='flex flex-col items-center'>
                    <h2 className='text-5xl font-bold text-dark'>
                      <CountUp end={stat.value} duration={3} />
                      <span>{ stat.suffix }</span>
                    </h2>
                    <p className='text-lg text-gray mt-2'>{ stat.title }</p>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Stats