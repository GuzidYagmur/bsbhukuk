import React from "react";
import { BiSolidPhone, BiSolidEnvelope } from "react-icons/bi";
import Image from "next/image";
import Link from "next/link";

const ctaContent = {
  agent1: {
    image: {
      src: "/images/yavuz.jpg",
      alt: "Yavuz Sancaktaroğlu",
      width: 50,
      height: 50,
    },
    name: "Mehmet Yavuz Sancaktaroğlu",
    title: "Avukat",
    phone: {
      label: "Bizi Arayın",
      number: "+90 507 384 48 20",
    },
    email: {
      label: "Mail Atmak için:",
      email_address: "av.yavuzsancaktaroglu@gmail.com",
    },
  },
  title: "Bugün bir avukatla iletişime geçin.",
  description:
    "Hukuki sürecinizde yolunuzu netleştirin. Doğru bilgi, zaman kazandırır. Alanında uzman bir avukatla görüşerek haklarınızı öğrenin, doğru adımları zamanında atın ve gereksiz endişelerden kurtulun.",
  ctaBtn: {
    url: "#",
    label: "Hızlı Randevu Oluştur",
  },
  agent: {
    image: {
      src: "/images/haluk.jpg",
      alt: "Yakup Haluk Başaran",
      width: 50,
      height: 50,
    },
    name: "Yakup Haluk Başaran",
    title: "Avukat",
    phone: {
      label: "Bizi Arayın",
      number: "+90 538 942 62 80",
    },
    email: {
      label: "Mail Atmak için:",
      email_address: "av.halukbasaran@gmail.com",
    },
  },
  title: "Bugün bir avukatla iletişime geçin.",
  description:
    "Hukuki sürecinizde yolunuzu netleştirin. Doğru bilgi, zaman kazandırır. Alanında uzman bir avukatla görüşerek haklarınızı öğrenin, doğru adımları zamanında atın ve gereksiz endişelerden kurtulun.",
  ctaBtn: {
    url: "https://wa.me/905073844820",
    label: "Hızlı Randevu Oluştur",
  },
};

const CTA = () => {
  const data = ctaContent;

  if (!data) return;

  return (
    <section className="pt-20 pb-[30rem] px-0 relative z-[1] bg-secondary">
      <div className="max-w-[980px] mx-auto px-5 block md:flex flex-row justify-between items-center">
        <div className="mb-12 md:mb-0 w-full md:w-[40%]">
          <div className="mx-auto md:mx-0 relative max-w-[350px] rounded-br-[300px] rounded-bl-[300px] z-[1] before:content-[''] before:absolute before:rounded-br-[300px] before:rounded-bl-[300px] before:z-[-1] before:w-full before:h-full before:-right-[20px] before:-top-[20px] before:border before:border-dark">
            <div className="p-8 bg-white flex flex-row items-center space-x-6">
              <Image
                src={data.agent.image.src}
                width={data.agent.image.width}
                height={data.agent.image.height}
                alt={data.agent.image.alt}
                className="w-[70px] grow-0 shrink-0 basis-[70px] rounded-full object-cover object-center"
              />
              <span>
                <strong className="block font-serif text-[1.2rem] text-dark">
                  {data.agent.name}
                </strong>
                <span className="text-gray">{data.agent.title}</span>
              </span>
            </div>
            <div className="bg-primary px-12 pt-12 pb-16 flex flex-col justify-center rounded-br-[300px] rounded-bl-[300px]">
              <Link
                href={`tel://${data.agent.phone.number}`}
                className="mb-6 flex flex-row justify-start space-x-[20px]"
              >
                <span className="grow-0 shrink-0 basis-[30px] text-[2rem] relative -top-[0.4rem] text-secondary">
                  <BiSolidPhone />
                </span>
                <div>
                  <span className="text-white/40">
                    {data.agent.phone.label}
                  </span>
                  <strong className="block text-white text-[1.2rem] font-serif">
                    {data.agent.phone.number}
                  </strong>
                </div>
              </Link>

              <Link
                href={`mailto:${data.agent.email.email_address}`}
                className="mb-6 flex flex-row justify-start space-x-[20px]"
              >
                <span className="grow-0 shrink-0 basis-[30px] text-[2rem] relative -top-[0.4rem] text-secondary">
                  <BiSolidEnvelope />
                </span>
                <div>
                  <span className="text-white/40">
                    {data.agent.email.label}
                  </span>
                  <strong className="block text-white text-[1rem] font-serif">
                    {data.agent.email.email_address}
                  </strong>
                </div>
              </Link>
            </div>
          </div>
          <div className="mx-auto md:mx-0 relative max-w-[350px] rounded-br-[300px] rounded-bl-[300px] z-[1] before:content-[''] before:absolute before:rounded-br-[300px] before:rounded-bl-[300px] before:z-[-1] before:w-full before:h-full before:-right-[20px] before:-top-[20px] before:border before:border-dark">
            <div className="p-8 bg-white flex flex-row items-center space-x-6">
              <Image
                src={data.agent1.image.src}
                width={data.agent1.image.width}
                height={data.agent1.image.height}
                alt={data.agent1.image.alt}
                className="w-[70px] grow-0 shrink-0 basis-[70px] rounded-full object-cover object-center"
              />
              <span>
                <strong className="block font-serif text-[1.2rem] text-dark">
                  {data.agent1.name}
                </strong>
                <span className="text-gray">{data.agent1.title}</span>
              </span>
            </div>
            <div className="bg-primary px-12 pt-12 pb-16 flex flex-col justify-center rounded-br-[300px] rounded-bl-[300px]">
              <Link
                href={`tel://${data.agent1.phone.number}`}
                className="mb-6 flex flex-row justify-start space-x-[20px]"
              >
                <span className="grow-0 shrink-0 basis-[30px] text-[2rem] relative -top-[0.4rem] text-secondary">
                  <BiSolidPhone />
                </span>
                <div>
                  <span className="text-white/40">
                    {data.agent1.phone.label}
                  </span>
                  <strong className="block text-white text-[1.2rem] font-serif">
                    {data.agent1.phone.number}
                  </strong>
                </div>
              </Link>

              <Link
                href={`mailto:${data.agent1.email.email_address}`}
                className="mb-6 flex flex-row justify-start space-x-[1px] flex-wrap"
              >
                <span className="grow-0 shrink-0 basis-[30px] text-[2rem] relative -top-[0.4rem] text-secondary">
                  <BiSolidEnvelope />
                </span>
                <div>
                  <span className="text-white/40">
                    {data.agent1.email.label}
                  </span>
                  <strong className="block text-white text-[1rem] font-serif ">
                    {data.agent1.email.email_address}
                  </strong>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full md:w-3/5 pl-0 md:pl-12">
          <h2 className="text-2xl sm:text-[2rem] leading-[1.3] text-dark mb-5 font-bold font-serif text-center sm:text-left">
            {data.title}
          </h2>
          <p className="mb-7 text-center sm:text-left">{data.description}</p>
          <div className="text-center sm:text-left">
            <Link
              href={data.ctaBtn.url}
              className="block sm:inline-block py-4 px-5 rounded-[30px] bg-dark text-white duration-300 ease-in-out transition-all hover:bg-white hover:text-dark"
            >
              {data.ctaBtn.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
