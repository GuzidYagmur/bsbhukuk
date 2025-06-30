"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { allPosts } from '.contentlayer/generated';
import { compareDesc, format } from "date-fns";
import ReactPaginate from "react-paginate";
import { motion } from "framer-motion";

import Heading from "../Heading";

const Items = ({ currentItems }) => {
  return(
    <>
      {currentItems &&
        currentItems.map((blog, index) => {
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
              key={blog.title}
              className="text-center flex-1 h-full w-full"
            >
              <Link href={blog.url} className="group flex items-stretch rounded-lg duration-300 ease-in-out transition-all bg-[#01312B] relative top-0 hover:-top-1 hover:bg-white h-full overflow-hidden">
                <Image
                  src={blog.image}
                  width= {1000}
                  height={1000}
                  alt={blog.title}
                  className="w-44 mx-auto mr-5"
                />
                <div className="mb-4 p-5 text-left">
                  <span className="duration-300 ease-in-out transition-all text-white/50 block mb-2 uppercase text-sm group-hover:text-primary">
                    {formattedDate}
                  </span>
                  <h3 className="font-serif font-bold text-xl duration-300 ease-in-out transition-all text-white group-hover:text-primary">{blog.title}</h3>
                </div>

              </Link>
            </motion.div>
          );
        }) }
    </>
  );
}


const Blog = ({ className, itemsPerPage }) => {
  const items = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [clickPaginate, setClickPaginate] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));

    if (clickPaginate === true) {
      ref.current?.scrollIntoView({ behavior: "smooth" });
      setClickPaginate(false);
    }
  }, [setCurrentItems, setPageCount, setClickPaginate, itemOffset, itemsPerPage, clickPaginate, ref]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setClickPaginate(true);
    setItemOffset(newOffset);
  }

  if (!items) return null;

  return (
    <>
      <div ref={ref}>
        <Heading title="Blog" description="Consectetur adipisicing elit. Dolores, facilis! Hic error totam omnis a vero animi voluptatem. Quidem, sint autem nemo fugit sed quam cupiditate voluptatibus commodi voluptatum animi?" />
      </div>
      <div className={`bg-primary pb-20 ${className}`}>
        <div className="px-5 max-w-[960px] w-full mx-auto relative z-[10] md:flex justify-between">
          <div className="grid grid-cols-2 w-full gap-8 items-stretch">
            <Items currentItems={currentItems} />
          </div>
        </div>
        {pageCount > 1 && (
          <div className={ `${pageCount > 1 ? 'mt-10' : 'mt-0'} w-full text-center` }>
            <ReactPaginate
              nextLabel="Next"
              onPageChange={handlePageClick}
              pageRangeDisplayed={3}
              marginPageDisplayed={2}
              pageCount={pageCount}
              previousLabel="Previous"
              pageClassName="page-item text-white"
              pageLinkClassName="page-link text-white"
              previousClassName="page-item"
              previousLinkClassName="page-link text-white"
              nextClassName="page-item text-white"
              nextLinkClassName="page-link"
              breakLabel="..."
              breakClassName="page-item"
              breakLinkClassName="page-link"
              containerClassName="pagination inline-flex mx-auto text-center pt-10 gap-7"
              activeClassName="active"
              renderOnZeroPageCount={null}
            />
          </div>
        )}
      </div>
    </>
  )
}

export default Blog