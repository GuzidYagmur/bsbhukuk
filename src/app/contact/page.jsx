import CTA from "@/components/CTA";
import ContactForm from "@/components/ContactForm";
import Heading from "@/components/Heading";
import React from "react";
import Waicon from "@/components/WaContact";

const page = () => {
  return (
    <>
      <Heading
        title="Contact Us"
        className="py-44"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab porro aut sint, repudiandae nam qui dolore eligendi magnam libero perspiciatis."
      />
      <ContactForm />
      <CTA />
      <Waicon />
    </>
  );
};

export default page;
