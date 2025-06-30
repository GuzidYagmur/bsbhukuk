"use client";
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { allAttorneys } from 'contentlayer/generated';
import { compareDesc, format, parseISO } from 'date-fns';
import { FaPhone } from 'react-icons/fa6';
import { MdCall, MdEmail } from 'react-icons/md';

import { motion } from 'framer-motion';
import { getMDXComponent } from "next-contentlayer2/hooks";
import PostCard from '@/components/attorneys/PostCard';


const Content = ({ attorney }) => {
  const attorneys = allAttorneys.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

  let MDXContent;
  if (!attorneys) return null;

  if (!attorney) {
    console.log('Post not found');
  } else {
    MDXContent = getMDXComponent(attorney.body.code);
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
          <div className='md:w-5/12 mb-20 md:mb-0'>
            <div className="relative left-0 mt-20 md:mt-0 md:-left-[80px] before:content-[''] before:absolute before:rounded-tr-[300px] before:rounded-tl-[300px] before:z-[-1] before:h-full before:w-full before:-bottom-[30px] before:-left-[30px] before:border before:border-secondary after:content-[''] after:absolute after:rounded-tr-[300px] after:rounded-tl-[300px] after:z-[-1] after:w-full after:h-full after:-top-[30px] after:-right-[30px] after:border after:border-dark">
              <Image
                src={attorney.image}
                width={1065}
                height={644}
                className='object-cover object-top h-[480px] rounded-tr-[210px] rounded-tl-[210px]'
                alt={attorney.name}
              />
            </div>
          </div>

          <div className='md:w-6/12'>
            <h1 className='text-2xl sm:text-[3rem] leading-[1.3] text-white mb-2 font-bold font-serif text-left'>
              {attorney.name}
            </h1>
            <p className='text-darkGreen mb-10'>{attorney.expertise} </p>
            <div className='prose mb-10 text-white'>
              <MDXContent />
            </div>

            <div className='mb-10 justify-center text-center md:justify-start block sm:flex items-center space-x-0 sm:space-x-5'>
              <Link href="/" className='inline-flex items-center mb-5 sm:mb-0 text-center justify-center w-full sm:w-auto gap-x-2 py-3 px-5 rounded-[30px] bg-secondary text-dark border border-transparent transition-all duration-300 ease-in-out hover:border-white hover:bg-transparent hover:text-white'>
                <MdCall /> <span>Call Now</span>
              </Link>
              <span className='text-darkGreen block mb-5 md:mb-0 md:inline-block'>or</span>
              <Link href="/" className='inline-flex items-center mb-5 sm:mb-0 text-center justify-center w-full sm:w-auto gap-x-2 py-3 px-5 rounded-[30px] bg-secondary text-dark border border-transparent transition-all duration-300 ease-in-out hover:border-white hover:bg-transparent hover:text-white'>
                <MdEmail /> <span>Email</span>
              </Link>

            </div>

            <div>
              <Link href="/attorneys" className='inline-flex mb-2 text-center text-white border-b border-b-transparent transition-all duration-300 ease-in-out hover:border-b-white hover:text-opacity-70'>Back to List of Attorneys</Link>
            </div>
          </div>
        </div>
      </div>

      {/* More Attorneys */}
      <div className='max-w-[960px] mx-auto mt-20 lg:mt-32'>
        <h2 className='text-3xl font-serif mb-10 text-center text-white'>More Attorneys</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch'>
          {attorneys.filter((a) => attorney.name !== a.name).map((item, idx) => {
            if (idx > 5) return null;
            return <PostCard key={idx} index={idx} attorney={item} />
          }) }
        </div>
        <div className='flex justify-center mt-10'>
          <Link href="/attorneys" className='mb-5 sm:mb-0 text-center w-full sm:w-auto inline-block py-4 px-5 rounded-[30px] bg-secondary text-dark border border-transparent transition-all duration-300 ease-in-out hover:border-white hover:bg-transparent hover:text-white'>View All Attorneys</Link>
        </div>
      </div>
    </motion.div>
  )
}

export default Content