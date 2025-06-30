import React from "react";
import {
  BiLogoFacebook,
  BiLogoTwitter,
  BiLogoLinkedin,
  BiLogoInstagram,
} from "react-icons/bi";
import Link from "next/link";
import Image from "next/image";

const footerContent = {
  about: {
    logo: {
      url: "/",
    },
    logoImage: {
      src: "/images/bsb-logo.jpg",
      alt: "Lawyer Logo",
      width: 80,
      height: 80,
    },
    description: "BSB Hukuk ve Danışmanlık Bürosu",
    socialLinks: [
      {
        title: "Facebook",
        url: "#",
        icon: <BiLogoFacebook />,
      },
      {
        title: "Twitter",
        url: "#",
        icon: <BiLogoTwitter />,
      },
      {
        title: "Linkedin",
        url: "#",
        icon: <BiLogoLinkedin />,
      },
      {
        title: "instagram",
        url: "#",
        icon: <BiLogoInstagram />,
      },
    ],
  },
  footerLinks: [
    {
      heading: "Hakkımızda",
      links: [
        {
          href: "#",
          label: "Hukuk Büromuz",
        },

        {
          href: "#",
          label: "Takımımız",
        },
      ],
    },
    {
      heading: "Sayfalar",
      links: [
        {
          href: "#",
          label: "Bloglar",
        },

        {
          href: "#",
          label: "Sıkça Sorulan Sorular",
        },
      ],
    },
  ],
  copyright: "2025 BSB Hukuk ve Danışmanlık Bürosu. Tüm hakları saklıdır.",
  extraLinks: [
    {
      url: "#",
      label: "Koşullar ve Şartlar",
    },
    {
      url: "#",
      label: "Gizlilik",
    },
  ],
};

const Footer = () => {
  const data = footerContent;
  if (!data) return;
  return (
    <footer
      role="contentinfo"
      className="bg-primary py-28 px-0 relative z-[2] -mt-[25rem] rounded-tr-[200px] lg:rounded-tr-[300px] "
    >
      <div className="max-w-[1200px] mx-auto block md:flex flex-row justify-between px-5">
        <div className="mb-14 md:mb-0 w-full md:w-[47%] lg:w-[35%]">
          <Link href={data.about.logo.url} className="mb-6 inline-block">
            <Image
              src={data.about.logoImage.src}
              width={data.about.logoImage.width}
              height={data.about.logoImage.height}
              alt={data.about.logoImage.alt}
              className=" w-[80px] h-[80px] rounded-full object-cover "
            />
          </Link>
          <p className="text-white/40 mb-6">{data.about.description}</p>
          <ul className="flex list-none space-x-4">
            {data.about.socialLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.url}
                  title={link.title}
                  className="flex justify-center items-center w-10 h-10 border border-white duration-300 transition-all ease-in-out border-opacity-25 rounded-full hover:border-opacity-100 text-white"
                >
                  {link.icon}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full md:w-1/2">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-3">
            {data.footerLinks.map((link, idx) => (
              <div key={link.heading}>
                <h3 className="text-base font-serif text-white font-bold mb-6">
                  {link.heading}
                </h3>
                <ul className="list-none">
                  {link.links.map((item, i) => (
                    <li className="mb-4" key={item.label}>
                      <Link
                        href={item.href}
                        className="text-white text-opacity-40 duration-300 transition-all ease-in-out hover:text-opacity-100"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-[1200px] pt-20 md:flex flex-row mx-auto justify-between px-5">
        <div className="mb-[10px] md:mb-0 text-center md:text-left w-full md:w-1/2 text-white text-opacity-40">
          {data.copyright}
        </div>
        <div className="mb-[10px] md:mb-0 w-full md:w-1/2 text-center md:text-right flex justify-center md:justify-end">
          <div className="flex space-x-4">
            {data.extraLinks.map((item, index) => (
              <Link
                key={item.label}
                href={item.url}
                className="text-white duration-300 ease-in-out transition-all text-opacity-40 hover:text-opacity-100"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
