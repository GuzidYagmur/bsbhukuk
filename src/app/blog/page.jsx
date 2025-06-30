import React from "react";
import Waicon from "@/components/WaContact";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Blog from "@/components/blog/Blog";

export const metadata = {
  title: "Blog - Modern Lawyer NextJS Template by JoefreyCodes",
};

const page = () => {
  return (
    <>
      <div className="bg-contain bg-no-repeat absolute -translate-x-1/2 -translate-y-[40%] top-0 left-0 z-[0] w-[700px] h-[700px] bg-circles_image"></div>
      <Blog itemsPerPage={6} />
      <Waicon />
      <FAQ />
      <CTA />
    </>
  );
};
export default page;
