"use client";
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { format } from 'date-fns';

const PostCard = ({ blog, index }) => {
  index *= 0.05;
  const formattedDate = format(new Date(blog.date), "MMMM dd, yyyy");
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
      key={blog.title}
    >
      <Link href={blog.url} className="group flex items-stretch rounded-lg duration-300 ease-in-out transition-all bg-[#01312B] relative top-0 hover:-top-1 hover:bg-white h-full overflow-hidden text-left">
        <Image
          src={blog.image}
          width= {1000}
          height={1000}
          alt={blog.title}
          className="w-44 mx-auto mr-5"
        />
        <div className="mb-4 p-5">
          <span className="duration-300 ease-in-out transition-all text-white/50 block mb-2 uppercase text-sm group-hover:text-primary">
            {formattedDate}
          </span>
          <h3 className="font-serif font-bold text-xl duration-300 ease-in-out transition-all text-white group-hover:text-primary">{blog.title}</h3>
        </div>

      </Link>

    </motion.div>
  )
}

export default PostCard