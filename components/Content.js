/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import Image from "next/image";

const content = () => {
  const data = [
    {
      heading: "Watch",
      subHeading: "it's our largest display yet. ",
      urls: "/watch.jpg",
    },
    {
      heading: "Studio Display",
      subHeading: "A sight to be bold ",
      urls: "/watch.jpg",
    },
    {
      heading: "Mac Studio",
      subHeading: "Empower station ",
      urls: "/watch.jpg",
    },
    {
      heading: "Arcade",
      subHeading: "Gear.Club Stradale.Play now. ",
      urls: "/watch.jpg",
    },
  ];

  return (
    <>
      {/* ad section */}
      <div className="  flex flex-col flex-wrap items-center justify-center bg-gray-100 py-2 md:py-3  md:flex-row lg:flex-row lg:py-5">
        <div className="flex items-center justify-center">
          <h3 className="text-3xl font-semibold ">unicef</h3>
          <img
            className="h-9 w-12 pt-1"
            src="https://www.pngfind.com/pngs/m/663-6630327_unicef-logo-world-health-organization-logo-png-transparent.png"
            alt="image"
          />
        </div>

        <div className=" pl-4 text-center text-sm font-normal  text-blue-700 hover:underline">
          <Link href="#">
            <a>
              <text className="hidden md:block lg:block">
                Donate to Support families affected by war in Ukarine.
              </text>
              <text className="block md:hidden lg:hidden">
                Donate to Support <br /> families affected by war in Ukarine.
              </text>
            </a>
          </Link>
        </div>
      </div>

      {/* iphone 13 section */}
      <div className="iphone wrapper text-center pt-10 bg-gray-50 md:pt-14 ">
        <div className="heading text-3xl text-bold font-bold md:text-6xl ">
          iPhone 13 Pro
        </div>
        <div className="second heading text-xl font-semibold py-1 md:text-3xl md:py-3 ">
          Oh. So. Pro.
        </div>
        <div className="Links  text-lg md:text-2xl ">
          <text className=" text-blue-600 ">
            <Link href="#">
              <a> Learn more {">"}</a>
            </Link>
          </text>
          <text className="text-blue-600 pl-6">
            <Link href="#">
              <a>Buy {">"}</a>
            </Link>
          </text>
        </div>

        <div className="image  bg-[url('/iphone.jpg')] h-96 w-auto bg-top bg-no-repeat shrink "></div>
      </div>

      {/* iPhone SE section */}
      <div className="mt-4 bg-gray-50 h-auto text-center">
        <div className="pt-10 md:pt-24">
          <h1 className="text-md font-semibold md:text-xl">The new</h1>

          <h1 className="text-2xl font-bold  text-center h-auto md:text-5xl md:py-2 ">
            {" "}
            iPhone{" "}
            <span className="border-4 h-8 w-10 rounded-lg text-sm border-black px-1 md:border-1 md:h-4 md:w-8 md:text-2xl ">
              SE{" "}
            </span>{" "}
          </h1>

          <h1 className=" text-xl  md:text-3xl md:py-2 ">
            Love the power. Love the price.
          </h1>
          <div className="Links  text-xl pt-3 md:text-2xl ">
            <text className=" text-blue-600 ">
              <Link href="#">
                <a> Learn more {">"}</a>
              </Link>
            </text>
            <text className="text-blue-600 pl-6">
              <Link href="#">
                <a>Buy {">"}</a>
              </Link>
            </text>
          </div>
        </div>

        <div className=" flex items-center justify-center">
          <div>
            <img
              src="/ssan.jpg"
              className="h-96 w-full text-center items-center"
              alt="image"
            />
          </div>
        </div>
      </div>

      {/* ipad air */}
      <div className="flex flex-col bg-black lg:flex-row  ">
        <div className="w-full  text-center py-4  text-white lg:pl-14 lg:py-24 lg:w-7/12  ">
          <h1 className="text-3xl font-semibold pl-8 md:text-5xl ">iPad air</h1>

          <h1 className="text-xl py-1 md:text-3xl md:py-3">
            Light.Bright.Full of might
          </h1>

          <div className="Links  text-lg pl-8 md:text-2xl ">
            <text className=" text-blue-600 ">
              <Link href="#">
                <a> Learn more {">"} </a>
              </Link>
            </text>
            <text className="text-blue-600 pl-6">
              <Link href="#">
                <a>Buy {">"}</a>
              </Link>
            </text>
          </div>
        </div>
        <div className="">
          <img className="" src="/ipadair.png" alt="ipadair" />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-2 grid-flow-row mx-4 my-4 md:gap-4 md:grid-cols-2 h-auto ">
        {data.map((item) => {
          return (
            <div key={item.heading} className="bg-gray-100">
              <div className="bg-gray-100 h-28 text-center pt-12 lg:h-44">
                <h1 className="text-3xl font-bold lg:text-5xl">
                  {item.heading}{" "}
                </h1>
                <h1 className="text-md my-2 lg:text-xl ">{data.subHeading} </h1>
                <div className="Links  text-2xl pl-8 ">
                  <text className=" text-blue-600 ">
                    <Link href="#">
                      <a> Learn more {">"} </a>
                    </Link>
                  </text>
                  <text className="text-blue-600 pl-3 md:pl-6">
                    <Link href="#">
                      <a>Buy {">"}</a>
                    </Link>
                  </text>
                </div>
              </div>
              <div className="bg-[url('/watch.jpg')] h-96 w-auto bg-center bg-no-repeat">
                {" "}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default content;
