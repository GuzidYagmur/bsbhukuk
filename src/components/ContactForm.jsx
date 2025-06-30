'use client';
import React from 'react'
import { cn } from '@/app/utils/cn';
import { 
  BiChat,
  BiMap,
  BiMessage,
  BiUser,
  BiEnvelope,
  BiPhone,
  BiPaperPlane
} from 'react-icons/bi'
import Link from 'next/link';

const cardData = [
  {
    icon: BiMessage,
    title: "Chat to sales",
    description: "Speak to our friendly team",
    linkText: "Chat to sales",
    link: "#"
  },
  {
    icon: BiChat,
    title: "Chat to support",
    description: "We're here to help",
    linkText: "Chat to support",
    link: "#"
  },
  {
    icon: BiMap,
    title: "Visit us",
    description: "Speak to our friendly team",
    linkText: "Get directions",
    link: "#"
  },
  {
    icon: BiPhone,
    title: "Call us",
    description: "Mo-Fri 9am to 5pm",
    linkText: "Call our team",
    link: "#"
  },
];

const InputField = ({ icon: Icon, placeholder, type="text", name }) => (
  <label className='relative block'>
    <Icon className="absolute top-1/2 -translate-y-1/2 left-4 text-xl" />
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className='placeholder:text-dark/50 block bg-white w-full border border-dark/25 rounded-md py-3 pl-12 pr-3 shadow-sm focus:outline-none focus:border-primary focus:border sm:text-sm'
    />
  </label>
);

const Card = ({ icon: Icon, title, description, linkText, link }) => (
  <div className='border border-dark/10 pt-5 pl-5 pr-5 pb-7 rounded-lg w-full'>
    <div>
      <div className='mb-7 bg-primary text-white p-4 rounded-lg inline-flex justify-center items-center'>
        <Icon className="text-2xl" />
      </div> 
      <h2 className='text-dark text-xl mb-2'>{title}</h2>
      <p className='mb-10 text-gray text-sm'>{description}</p>
      <Link
        href={link}
        className="mb-5 border border-radk/25 hover:border-dark rounded-3xl px-4 py-2 text-sm transition-all ease-in-out duration-300 text-dark"
      >
        {linkText}
      </Link>
    </div>
  </div>
  
)

const ContactForm = ({classNames}) => {
  return (
    <div className={`${cn(classNames)} pt-16 md:pt-24 pb-16 md:pb-24 relative z-[1]`}>
      <div className='max-w-[1200px] mx-auto px-5'>

        <div className='lg:flex gap-16'>
          {/* left section */}
          <div className='lg:w-1/2 mb-10 lg:mb-0'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 w-full'>
              {cardData.map((card, idx) => (
                <Card key={idx} {...card} />
              ))}
            </div>
          </div>
          {/* right section */}
          <div className='lg:w-1/2'>
            <form action="#" method="post" className='flex flex-col gap-5 rounded-lg border border-dark/10 lg:-mt-36 bg-white p-10'>
              <h2 className='font-serif text-3xl text-dark'>Get in Touch</h2>
              <p className='text-sm mb-4'>Contact us through our form with your inquiries, and we&apos;ll respond promptly!</p>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                <InputField icon={BiUser} placeholder="First name" name="fname" />
                <InputField icon={BiUser} placeholder="Last name" name="fname" />
              </div>
              <InputField icon={BiEnvelope} placeholder="Email address" name="email" /> 
              <InputField icon={BiPhone} placeholder="Phone number" name="phone" /> 

              <label htmlFor="" className='relative block'>
                <BiPaperPlane className='absolute top-3 left-4 text-xl' />
                <textarea
                  rows={7}
                  name="message"
                  placeholder="Write a message..."
                  className='placeholder:text-dark/50 block bg-white w-full border border-dark/25 rounded-md py-3 pl-12 pr-3 shadow-sm focus:outline-none focus:border-primary focus:border sm:text-sm'
                >

                </textarea>

              </label>
              <button type="submit" className='cursor-pointer block sm:inline-block w-full sm:w-auto mb-0 text-center py-4 px-5 text-white bg-dark rounded-[30px] transition-all ease-in-out duration-300 hover:bg-secondary hover:text-dark'>Send Message</button>
              
            </form>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ContactForm