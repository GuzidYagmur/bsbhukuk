"use client";
import React from "react";
import { cn } from "@/app/utils/cn";
import {
  BiMap,
  BiUser,
  BiEnvelope,
  BiPhone,
  BiPaperPlane,
} from "react-icons/bi";
import Link from "next/link";

const cardData = [
  {
    icon: BiMap,
    title: "Ofisimiz",
    description:
      "İstiklal Mah. Çark Cad. Çağrı İş Merkezi Kat:2 No:26 Serdivan/Sakarya",
    linkText: "Konumu Görüntülemek İçin",
    link: "https://maps.app.goo.gl/5b3ZLMwYH4NfMFXUA?g_st=ipc",
  },
  {
    icon: BiPhone,
    title: "Bizi Arayın",
    description:
      "Sorularınız mı var? Avukatlarımızı dilediğiniz zaman arayabilirsiniz.",
    linkText: "+90 507 384 48 20",
    link: "tel:+905073844820",
  },
];

const InputField = ({ icon: Icon, placeholder, type = "text", name }) => (
  <label className="relative block">
    <Icon className="absolute top-1/2 -translate-y-1/2 left-4 text-xl" />
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className="placeholder:text-dark/50 block bg-white w-full border border-dark/25 rounded-md py-3 pl-12 pr-3 shadow-sm focus:outline-none focus:border-primary focus:border sm:text-sm"
    />
  </label>
);

const Card = ({ icon: Icon, title, description, linkText, link }) => (
  <div className="border border-dark/10 pt-5 pl-5 pr-5 pb-7 rounded-lg w-full">
    <div>
      <div className="mb-7 bg-primary text-white p-4 rounded-lg inline-flex justify-center items-center">
        <Icon className="text-2xl" />
      </div>
      <h2 className="text-dark text-xl mb-2">{title}</h2>
      <p className="mb-10 text-gray text-sm">{description}</p>
      <Link
        href={link}
        className="mb-5 border border-radk/25 hover:border-dark rounded-3xl px-4 py-2 text-sm transition-all ease-in-out duration-300 text-dark"
      >
        {linkText}
      </Link>
    </div>
  </div>
);

const ContactForm = ({ classNames }) => {
  return (
    <div
      className={`${cn(
        classNames
      )} pt-16 md:pt-24 pb-16 md:pb-24 relative z-[1]`}
    >
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="lg:flex gap-16">
          {/* left section */}
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
              {cardData.map((card, idx) => (
                <Card key={idx} {...card} />
              ))}
            </div>
          </div>
          {/* right section */}
          <div className="lg:w-1/2">
            <form
              action="https://getform.io/f/axoznkwb"
              method="POST"
              enctype="multipart/form-data"
              className="flex flex-col gap-5 rounded-lg border border-dark/10 lg:-mt-36 bg-white p-10"
            >
              <h2 className="font-serif text-3xl text-dark">
                Bizimle İletişime Geçin
              </h2>
              <p className="text-sm mb-4">
                Aşağıda bulunan tüm alanları doldurmanız zorunludur.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <InputField icon={BiUser} placeholder="İsim" name="name" />
                <InputField
                  icon={BiUser}
                  placeholder="Soyisim"
                  name="surname"
                />
              </div>
              <InputField icon={BiEnvelope} placeholder="Email" name="email" />
              <InputField
                icon={BiPhone}
                placeholder="Telefon Numarası"
                name="phone"
              />

              <label htmlFor="" className="relative block">
                <BiPaperPlane className="absolute top-3 left-4 text-xl" />
                <textarea
                  rows={7}
                  name="message"
                  placeholder="Danışmak istediğiniz konu nedir?"
                  className="placeholder:text-dark/50 block bg-white w-full border border-dark/25 rounded-md py-3 pl-12 pr-3 shadow-sm focus:outline-none focus:border-primary focus:border sm:text-sm"
                ></textarea>
              </label>

              <button
                type="submit"
                className="cursor-pointer block sm:inline-block w-full sm:w-auto mb-0 text-center py-4 px-5 text-white bg-dark rounded-[30px] transition-all ease-in-out duration-300 hover:bg-secondary hover:text-dark"
              >
                Bize Gönderin
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
