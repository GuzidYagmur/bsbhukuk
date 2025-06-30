import React from "react";
import PracticingArea from "@/components/practicing-area/PracticingArea";

import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";

export const metadata = {
  title: "Practicing Area - Modern Lawyer NextJS Template by JoefreyCodes",
};

const page = () => {
  return (
    <>
      <div className="bg-contain bg-no-repeat absolute -translate-x-1/2 -translate-y-[40%] top-0 left-0 z-[0] w-[700px] h-[700px] bg-circles_image"></div>
      <PracticingArea itemsPerPage={6} />

      <FAQ />
      <CTA />
    </>
  );
};
export default page;
