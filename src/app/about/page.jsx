import CTA from "@/components/CTA";
import Heading from "@/components/Heading";
import Leadership from "@/components/Leadership";
import Stats from "@/components/Stats";
import React from "react";
import Waicon from "@/components/WaContact";

const page = () => {
  return (
    <>
      <Heading
        title="About Us"
        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi eaque, modi facilis itaque ipsum ratione provident deserunt excepturi?"
        className="py-44"
      />

      <Leadership />
      <Stats />
      <CTA />
      <Waicon />
    </>
  );
};

export default page;
