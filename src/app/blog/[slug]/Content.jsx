"use client";
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { allPosts } from 'contentlayer/generated';
import { compareDesc, format, parseISO } from 'date-fns';
import { FaPhone } from 'react-icons/fa6';
import { MdCall, MdEmail } from 'react-icons/md';

import { motion } from 'framer-motion';
import { getMDXComponent } from "next-contentlayer2/hooks";
import PostCard from '@/components/blog/PostCard';


const Content = ({ blog }) => {
  const blogs = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

  let MDXContent;
  if (!blogs) return null;

  if (!blog) {
    console.log('Post not found');
  } else {
    MDXContent = getMDXComponent(blog.body.code);
  }

  const formattedDate = format(new Date(blog.date), "MMMM dd, yyyy");
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { delay: 0.2, duration: 0.5 }
      }}
      viewport={{ once: true }}
      className='pt-0 md:pt-20 pb-0 mx-auto'
    >
      <div className='px-5 max-w-[960px] w-full mx-auto relative z-[10] md:flex justify-between'>
        <div className='md:flex mx-auto'>
          <div className='md:w-9/12 text-left mx-auto'>
            <div>
              <span className='block text-white/50 mb-4'>{formattedDate}</span>
              <h1 className='text-2xl sm:text-[3rem] leading-[1.3] text-white font-bold font-serif text-left mb-10'>
                { blog.title }
              </h1>
              <Image
                src={blog.image}
                width={1065}
                height={644}
                className='object-cover relative rounded-lg -mt-16 md:mt-0 mb-10' alt={ blog.title }
              />

              <div className='prose mb-10 relative'>
                <MDXContent />
              </div>

              <div>
                <Link href="/blog" className='inline-flex mb-2 text-center text-white border-b border-b-transparent transition-all duration-300 ease-in-out hover:border-b-white hover:text-opacity-70'>Back to list of posts</Link>
              </div>

            </div>
          </div>
        </div>

      </div>

      {/* More Posts */}
      <div className='bg-white py-10 md:py-20 mt-20 md:mt-20 mb-0 px-4'>
        <div className='max-w-[960px] mx-auto'>
          <h2 className='text-3xl font-serif mb-10 text-center text-dark'>More blog</h2>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch'>

            {blogs.filter((a) => blog.title !== a.title).map((item, idx) => {
              if (idx > 5) return null;
              return <PostCard key={idx} index={idx} blog={item} />
            })}
          </div>
          <div className='flex justify-center mt-10'>
            <Link href="/blog" className='mb-5 sm:mb-0 text-center w-fill sm:w-auto inline-block py-4 px-5 rounded-[30px] bg-secondary text-dark border border-transparent transition-all duration-300 ease-in-out hover:border-secondary hover:bg-transparent hover:text-dark'>View all blog</Link>
          </div>
        </div> 
      </div>
      
    </motion.div>
  )
}

export default Content