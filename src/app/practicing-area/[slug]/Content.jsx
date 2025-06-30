"use client";
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { allPracticings } from 'contentlayer/generated';
import { compareDesc, format, parseISO } from 'date-fns';
import { FaPhone } from 'react-icons/fa6';
import { MdCall, MdEmail } from 'react-icons/md';

import { motion } from 'framer-motion';
import { getMDXComponent } from "next-contentlayer2/hooks";
import PostCard from '@/components/practicing-area/PostCard';


const Content = ({ practicing }) => {
  const practicings = allPracticings.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

  let MDXContent;
  if (!practicings) return null;

  if (!practicing) {
    console.log('Post not found');
  } else {
    MDXContent = getMDXComponent(practicing.body.code);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { delay: 0.2, duration: 0.5 }
      }}
      viewport={{ once: true }}
      className='md:pt-20 container px-4 mx-auto'
    >
      <div className='px-5 max-w-[960px] w-full mx-auto relative z-[10] md:flex justify-between'>
        <div className='md:flex justify-between'>
          <div className='md:w-3/12 md:pr-20'>
            
            <Image
              src={practicing.image}
              width={1065}
              height={644}
              className='object-cover relative -mt-16 md:mt-0'
              alt={practicing.title}
            />
            
          </div>

          <div className='md:w-9/12'>
            <h1 className='text-2xl sm:text-[3rem] leading-[1.3] text-white mb-2 font-bold font-serif text-left'>
              {practicing.title}
            </h1>
            <p className='text-darkGreen mb-10'>{practicing.expertise} </p>
            <div className='prose mb-10 text-white'>
              <Image
                src={practicing.image}
                width={1065}
                height={644}
                className='object-cover absolute -z-[1] opacity-5 top-20 -translate-y-1/2'
                alt={practicing.title}
              
              />
              <MDXContent />
            </div>

            
            <div>
              <Link href="/practicing-area" className='inline-flex mb-2 text-center text-white border-b border-b-transparent transition-all duration-300 ease-in-out hover:border-b-white hover:text-opacity-70'>Back to List of Practicing</Link>
            </div>
          </div>
        </div>
      </div>

      {/* More Attorneys */}
      <div className='max-w-[960px] mx-auto mt-20 lg:mt-32'>
        <h2 className='text-3xl font-serif mb-10 text-center text-white'>More Practicing</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch'>
          {practicings.filter((a) => practicing.title !== a.title).map((item, idx) => {
            if (idx > 5) return null;
            return <PostCard key={idx} index={idx} attorney={item} />
          }) }
        </div>
        <div className='flex justify-center mt-10'>
          <Link href="/practicing-area" className='mb-5 sm:mb-0 text-center w-full sm:w-auto inline-block py-4 px-5 rounded-[30px] bg-secondary text-dark border border-transparent transition-all duration-300 ease-in-out hover:border-white hover:bg-transparent hover:text-white'>View All Practicing</Link>
        </div>
      </div>
    </motion.div>
  )
}

export default Content