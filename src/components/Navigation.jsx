"use client";
import { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const navigationData = [
  {
    url: "/",
    label: "Anasayfa",
  },
  {
    url: "/attorneys",
    label: "Avukatlar",
  },
  {
    url: "/practicing-area",
    label: "Çalışma Alanları",
  },
  {
    url: "/about",
    label: "Hakkımızda",
  },
  {
    url: "/blog",
    label: "Blog",
  },
  {
    url: "/contact",
    label: "Bizle Çalışın",
    cta: true,
  },
];

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  let newPathName = "";
  newPathName = pathname;
  if (pathname.includes("/blog")) {
    newPathName = "/blog";
  } else if (pathname.includes("/attorneys")) {
    newPathName = "/attorneys";
  } else if (pathname.includes("/practicing-area")) {
    newPathName = "/practicing-area";
  }

  return (
    <>
      <header className="header w-full absolute z-[9999]" role="banner">
        <div className="inner flex justify-between items-center flex-row max-w-[1200px] mx-auto pt-9 px-5">
          <div className="logo w-1/4">
            <Link href="/">
              <Image
                src="/images/bsb-logo.jpg"
                alt="Lawyer logo"
                className="w-[80px] h-[80px] rounded-full object-cover "
                width={50}
                height={50}
              />
            </Link>
          </div>

          <nav className="nav w-1/2 hidden md:flex justify-center">
            <ul className="flex flex-row list-none space-x-8">
              {navigationData.map((item, index) => {
                if (item.cta === undefined) {
                  return (
                    <li className="active p-0" key={index}>
                      <Link
                        href={item.url}
                        className={` ${
                          pathname === item.url || newPathName === item.url
                            ? "opacity-100"
                            : "opacity-50"
                        } transition-all duration-300 ease-in-out text-white relative before:content-[''] before:left-1/2 before:translate-x-1/2 before:-bottom-[27px] before:absolute before:w-[14px] before:h-[14px] before:bg-contain before:bg-no-repeat hover:opacity-100  `}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                }
              })}
            </ul>
          </nav>
          {/* CTA */}
          <div className="cta w-1/4 flex justify-end">
            {navigationData.map((item, index) => {
              if (item.cta === true) {
                return (
                  <Link
                    href={item.url}
                    className="cta-btn transition-all duration-300 ease-in-out text-white hidden md:inline-block py-[0.7rem] px-5 rounded-[30px] border border-white border-opacity-25 hover:border-white"
                    key={index}
                  >
                    {item.label}
                  </Link>
                );
              }
            })}
            <button
              className="text-[1.7rem] inline-block md:hidden"
              onClick={() => setOpen(!open)}
            >
              <Bars3Icon className="w-8 h-8 mobile-menu-toggle text-white" />
            </button>
          </div>
        </div>
      </header>
      {/* Offcanvas */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-[99999]" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-900 bg-opacity-25 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition-all ease-in-out duration-500 sm:duration-500"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition-all ease-in-out duration-500 sm:duration-500"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-sm">
                    <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                      <div className="flex-1 overflow-y-auto px-8 py-6 sm:px-12">
                        <div className="flex items-start justify-between">
                          <Dialog.Title className="text-lg font-medium text-gray-900">
                            Menu
                          </Dialog.Title>
                          <div className="ml-3 flex h-7 items-center">
                            <button
                              tyle="button"
                              className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                              onClick={() => setOpen(false)}
                            >
                              <span className="absolute -inset-0.5" />
                              <span className="sr-only">Close panel</span>
                              <XMarkIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            </button>
                          </div>
                        </div>

                        <div className="mt-8">
                          <div className="flow-root">
                            <ul role="list">
                              {navigationData.map((menu, idx) => (
                                <li key={menu.label}>
                                  <Link
                                    href={menu.url}
                                    className="py-2 inline-block"
                                  >
                                    {menu.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="border-t border-slate-100 px-4 py-6 sm:px-6">
                        <div>
                          <Link
                            href="/contact"
                            className="block text-center transition-all ease-in-out duration-300 bg-primary py-4 px-5 text-white rounded-full hover:bg-secondary hover:text-dark"
                          >
                            Contact us
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default Navigation;
