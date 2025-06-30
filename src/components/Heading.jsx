"use client";
import React from 'react'
import { motion } from 'framer-motion';

const Heading = ({ title, description }) => {
  return (
    <div className='pt-40 pb-20 bg-primary'>
      <div className='px-5 max-w-[960px] mx-auto relative z-[10] md:flex items-start justify-between'>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.1, duration: 0.3 }
          }}
          viewport={{ once: true }}
          className='text-left md:text-left text-[2rem] sm:text-5xl md:text-6xl text-white leading-[1.2] mb-5 md:mb-0 font-serif font-bold'
        >
          {title}
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.2, duration: 0.3 }
          }}
          viewport={{ once: true }}
          className='md:w-5/12 md:mt-5'
        >
          <p className='text-white text-opacity-50'>
            {description}
          </p>

        </motion.div>
      </div>
    </div>
  )
}

export default Heading