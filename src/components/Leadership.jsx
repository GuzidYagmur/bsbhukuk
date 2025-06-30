'use client';
import React from 'react'
import { cn } from '@/app/utils/cn';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const leadershipContent = {
  "title": "Our Leadership",
  "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo optio saepe ad soluta culpa reprehenderit fuga et nemo?",
  "leaders": [
    {
      "name": "Alexandria Rodriguez",
      "title": "Managing Partner",
      "expertise": "Criminal Defense",
      "link": "/attorneys/01-alexandra-rodriguez",
      "image": {
        "src": "/images/lawyer-2-min.jpg",
        "width": 300,
        "height": 300,
        "alt": "Alexandria Rodriguez"
      }
    },
    {
      "name": "Michael Thompson",
      "title": "General Councel",
      "expertise": "Corporate Law",
      "link": "/attorneys/02-michael-thompson",
      "image": {
        "src": "/images/lawyer-3-min.jpg",
        "width": 300,
        "height": 300,
        "alt": "Michael Thompson"
      }
    },
    {
      "name": "George Brown",
      "title": "Chief Legal Officer",
      "expertise": "Intellectual Law",
      "link": "/attorneys/03-george-brown",
      "image": {
        "src": "/images/lawyer-1-min.jpg",
        "width": 300,
        "height": 300,
        "alt": "George Brown"
      }
    }
  ]
}

const Leadership = ({classNames}) => {
  const data = leadershipContent;

  if (!data) return;

  return (
    <section className={`${cn(classNames)} pt-16 pb-16 md:pb-32 relative z-[1]`}>
      <div className='max-w-[1200px] mx-auto px-5'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.2, duration: 0.5 }
          }}
          viewport={{ once: true }}
          className="max-w-full md:max-w-[28rem] lg:max-w-[38rem] mb-20"
        >
          {data.title && (
            <h2 className='text-[2.5rem] leading-[1.3] text-dark mb-6 font-serif font-bold'>
              {data.title}
            </h2>
          )}
          {data.description && (
            <p className='text-gray mb-8'>
              {data.description}
            </p>
          )}
        </motion.div>

        <div className='grid grid-cols-2 md:grid-cols-3 gap-10'>
          {data.leaders.map((leader, index) => {
            let delay = index;
            delay *= 0.05;
            return (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: delay, duration: 0.5 }
                }}
                viewport={{ once: true }}
                className="text-center"
              >
                <Link href={leader.link}>
                  <Image
                    src={leader.image.src}
                    width={leader.image.width}
                    height={leader.image.height}
                    alt={leader.image.alt}
                    className='rounded-3xl mb-7 mx-auto'
                  />
                  <span className='block text-center uppercase text-[11px] tracking-widest'>{leader.title}</span>
                  <h3 className='text-xl font-serif text-dark mb-1'>{leader.name}</h3>
                  <span className='text-center text-base text-dark/50'>{ leader.expertise }</span>
                </Link>

              </motion.div>
            )
          })}
        </div>
      </div>  

    </section>
  )
}

export default Leadership