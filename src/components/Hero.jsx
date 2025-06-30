"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Waicon from "./WaContact";

const heroContent = {
  title: "Kanun, Kamu Vicdanıdır",
  description: "BSB Hukuk & Danışmanlık",
  image: {
    src: "/images/bsb-logo.jpg",
    alt: "Hero image",
    width: 500,
    height: 500,
  },
  image2: {
    src: "/images/circle-2.svg",
    alt: "Hiçkimse hukukun üstünde değildir",
    width: 500,
    height: 500,
  },
  btns: [
    {
      url: "/practicing-area",
      label: "Çalışma Alanlarımızı Görmek İçin Tıklayınız",
    },
  ],
};

const Hero = () => {
  const data = heroContent;
  if (!data) return null;

  return (
    <section className="hero pt-[10rem] pb-[7rem] lg:pb-[15rem] px-0 bg-primary relative">
      <div className="circles-1 bg-contain bg-no-repeat absolute -translate-x-1/2 -translate-y-[40%] top-0 left-0 z-0 w-[700px] bg-circles_image"></div>

      <div className="hero-inner px-5 lg:px-0 max-w-[calc(1200px-300px)] mx-auto block md:flex flex-row items-center justify-center">
        <div className="text-wrap w-full md:w-3/5 relative z-[1]">
          {data.title && (
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.2, duration: 0.5 },
              }}
              viewport={{ once: true }}
              className="text-center md:text-left text-[2rem] sm:text-5xl md:text-6xl text-white leading-[1.2] mb-[1.3rem] font-serif font-bold"
            >
              {data.title}
            </motion.h1>
          )}

          {data.description && (
            <div className="intro text-center md:text-left max-w-full md:max-w-[450px] mb-[2rem]">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.2, duration: 0.5 },
                }}
                viewport={{ once: true }}
                className="text-white text-opacity-50"
              >
                {data.description}
              </motion.p>
            </div>
          )}

          <div className="cta-btns justify-center text-center md:justify-start block sm:flex items-center space-x-0 sm:space-x-[1.875rem]">
            {data.btns.map((item, index) => {
              let delay = index;
              delay *= 1.05;
              let btnClassName =
                "btn-primary mb-5 sm:mb-0 text-center w-full sm:w-auto inline-block py-4 px-5 rounded-[30px] bg-secondary text-dark border border-transparent transition-all duration-300 ease-in-out hover:border-white hover:bg-transparent hover:text-white";
              if (index === 1) {
                btnClassName =
                  "btn-link text-center inline-block text-white border-b border-b-transparent transition-all duration-300 ease-in-out hover:border-b-white hover:text-opacity-70";
              }
              return (
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: delay, duration: 0.8 },
                  }}
                  viewport={{ once: true }}
                  key={index}
                >
                  <Link href={item.url} className={btnClassName}>
                    {item.label}
                  </Link>
                </motion.span>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.6, duration: 0.5 },
          }}
          viewport={{ once: true }}
          className="img-wrap mx-auto max-w-[380px] z-0 relative"
        >
          <div className="relative left-0 mt-20 md:mt-0 md:-left-[80px] before:content-[''] before:absolute before:rounded-tr-[300px] before:rounded-tl-[300px] before:z-[-1] before:w-full before:h-full before:-bottom:-[30px] before:-left-[30px] before:border before:border-secondary after:content-[''] after:absolute after:rounded-tr-[300px] after:rounded-tl-[300px] after:z-[-1] after:w-full after:h-full after:-top-[30px] after:-right-[30px] after:border after:border-dark">
            {data.image.src && (
              <Image
                src={data.image.src}
                alt={data.image.alt}
                width={data.image.width}
                height={data.image.height}
                className="max-w-full object-cover rounded-tr-[300px] rounded-tl-[300px] h-[388px] sm:h-[560px]"
              />
            )}

            {data.image2.src && (
              <div className="absolute -bottom-14 -left-14 animate-spin-slow">
                <Image
                  src={data.image2.src}
                  alt={data.image2.alt}
                  width={data.image2.width}
                  height={data.image2.height}
                  className="max-w-36"
                />
              </div>
            )}
          </div>
        </motion.div>
      </div>
      <Waicon />
    </section>
  );
};

export default Hero;
