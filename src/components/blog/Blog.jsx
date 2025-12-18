"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { allPosts } from ".contentlayer/generated";
import { compareDesc } from "date-fns";
import ReactPaginate from "react-paginate";
import { motion } from "framer-motion";

import Heading from "../Heading";

const Items = ({ currentItems }) => {
  return (
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
                transition: { delay: index, duration: 0.3 },
              }}
              viewport={{ once: true }}
              key={blog.title}
              className="text-center flex-1 h-full w-full"
            >
              <Link
                href={blog.url}
                className="group flex flex-col md:flex-row rounded-lg transition-all duration-300 bg-[#01312B] hover:bg-white h-full overflow-hidden"
              >
                <div className="relative w-full md:w-44 h-56 md:h-auto shrink-0">
                  <Image
                    src={blog.image}
                    fill
                    alt={blog.title}
                    className="object-cover"
                  />
                </div>
                <div className="mb-4 p-5 text-left">
                  <span className="duration-300 ease-in-out transition-all text-white/50 block mb-2 uppercase text-sm group-hover:text-primary"></span>
                  <h3 className="font-serif font-bold text-xl duration-300 ease-in-out transition-all text-white group-hover:text-primary">
                    {blog.title}
                  </h3>
                </div>
              </Link>
            </motion.div>
          );
        })}
    </>
  );
};

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
  }, [
    setCurrentItems,
    setPageCount,
    setClickPaginate,
    itemOffset,
    itemsPerPage,
    clickPaginate,
    ref,
  ]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setClickPaginate(true);
    setItemOffset(newOffset);
  };

  if (!items) return null;

  return (
    <>
      <div ref={ref}>
        <Heading
          title="Blog"
          description="Bu bölümde, hukukun farklı alanlarına dair güncel gelişmeler, temel bilgiler ve bilgilendirici yazılar düzenli olarak paylaşılacaktır."
        />
      </div>
      <div className={`bg-primary pb-20 ${className}`}>
        <div className="px-5 max-w-[960px] w-full mx-auto relative z-[10] md:flex justify-between">
          <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-8 items-stretch">
            <Items currentItems={currentItems} />
          </div>
        </div>
        {pageCount > 1 && (
          <div
            className={`${pageCount > 1 ? "mt-10" : "mt-0"} w-full text-center`}
          >
            <ReactPaginate
              nextLabel=">"
              onPageChange={handlePageClick}
              pageRangeDisplayed={3}
              marginPageDisplayed={2}
              pageCount={pageCount}
              previousLabel="<"
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
  );
};

export default Blog;
