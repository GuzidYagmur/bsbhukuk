"use client";
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const PostCard = ({ attorney, index }) => {
  index *= 0.05;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { delay: index, duration: 0.3 }
      }}
      viewport={{ once: true }}
      className='text-center h-full'
      key={attorney.name}
    >
      <Link href={attorney.url} className='block p-5 rounded-lg duration-300 ease-in-out transition-all bg-[#01312B] group relative top-0 hover:-top-1 hover:bg-white h-full'>
        <Image
          src={attorney.image}
          width= {1000}
          height={1000}
          alt="Attorney image"
          className='rounded-full w-28 mx-auto mb-4'
        />
        <div className='mb-4'>
          <h3 className='font-serif font-bold text-xl duration-300 ease-in-out transition-all text-white group-hover:text-darl'>{attorney.name}</h3>
          <strong className='font-sans font-normal  duration-300 ease-in-out transition-all text-darkGreen group-hover:text-dark'>{ attorney.expertise} </strong>
        </div>
      </Link>

    </motion.div>
  )
}

export default PostCard