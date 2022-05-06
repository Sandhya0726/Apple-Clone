/* eslint-disable @next/next/no-img-element */
/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  SearchIcon,
  ShoppingBagIcon,
  MenuIcon,
  XIcon,
} from "@heroicons/react/outline";

const navigation = [
  { name: "Store", href: "#", current: false },
  { name: "Mac", href: "#", current: false },
  { name: "iPad", href: "#", current: false },
  { name: "iPhone", href: "#", current: false },
  { name: "Watch", href: "#", current: false },
  { name: "AirPods", href: "#", current: false },
  { name: "Tv & Home", href: "#", current: false },
  { name: "Only on Apple", href: "#", current: false },
  { name: "Accessories", href: "#", current: false },
  { name: "Support", href: "#", current: false },
  { name: "Search", href: "#", current: false },
  { name: "Bag", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <Disclosure as="nav" className="bg-neutral-800 sticky top-0 bg-opacity-90">
      {({ open }) => (
        <>
          <div className="max-w-7xl shrink mx-auto  ">
            <div className="relative flex items-center justify-center  h-12">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className=" flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="hidden sm:block  sm:ml-6">
                  <div className="flex space-x-4">
                    <a href="#">
                      {" "}
                      <img
                        className="h-3.8 w-3.5    "
                        src="apple.png"
                        alt="apple"
                      />{" "}
                    </a>
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? " text-white text-xs "
                            : "text-gray-300  hover:text-white",
                          "  rounded-md text-xs font-normal  leading-4  lg:px-2 xl:px-3"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center  sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <button
                    type="button"
                    className=" px-3 rounded-full text-gray-300 hover:text-white focus:outline-none "
                  >
                    <span className="sr-only">Search</span>
                    <SearchIcon
                      className="h-5 w-5 text-xs font-normal"
                      aria-hidden="true"
                    />
                  </button>

                  {/* Bag Icon */}
                  <button
                    type="button"
                    className="px-3 rounded-full text-gray-300  hover:text-white focus:outline-none "
                  >
                    <span className="sr-only">Bag</span>
                    <ShoppingBagIcon
                      className="h-5 w-5 text-xs font-normal"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden ">
            <div className="px-2 pt-2 pb-3 space-y-1 overflow-scroll">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-neutral-800 text-white"
                      : "text-gray-300  hover:text-white hover:bg-slate-500",
                    "block px-3 py-2 rounded-md text-sm font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
