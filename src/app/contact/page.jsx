import CTA from "@/components/CTA";
import ContactForm from "@/components/ContactForm";
import Heading from "@/components/Heading";
import React from "react";
import Waicon from "@/components/WaContact";

const page = () => {
  return (
    <>
      <Heading
        title="Bize Ulaşın"
        className="py-44"
        description="Bizimle iletişime geçin, sorularınızı yanıtlamaktan memnuniyet duyarız."
      />
      <ContactForm />
      <CTA />
      <Waicon />
    </>
  );
};

export default page;
