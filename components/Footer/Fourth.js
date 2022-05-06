import { Government, Healthcare, Education, Business } from "../Data";
import { PlusIcon, MinusIcon } from "@heroicons/react/outline";
import { Disclosure } from "@headlessui/react";

const Fourth = () => {
  return (
    <>
      <Disclosure className="px-6  block lg:hidden">
        {({ open }) => (
          <div className="">
            <Disclosure.Button className="  flex justify-between w-full  py-2 text-sm font-medium text-left text-primary focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
              <h3 className=" pb-2 text-left text-xs font-semibold text-gray-600">
                For Business
              </h3>
              <span>
                {open ? (
                  <MinusIcon
                    className={`${open ? "  " : ""} w-5 h-5 text-primary`}
                  />
                ) : (
                  <PlusIcon
                    className={`${
                      open ? "transform rotate-90" : ""
                    } w-5 h-5 text-primary`}
                  />
                )}
              </span>
            </Disclosure.Button>
            <Disclosure.Panel className="  pb-2 text-sm text-gray-500">
              <ul className="  text-left text-xs text-slate-500">
                {Business.map((item, index) => {
                  return (
                    <li key={index} className="py-1.5">
                      {item}{" "}
                    </li>
                  );
                })}
              </ul>
            </Disclosure.Panel>
          </div>
        )}
      </Disclosure>

      <div className=" hidden lg:block">
        <h3 className=" pb-2 text-left text-xs font-semibold text-gray-600">
          {" "}
          For Business
        </h3>
        <ul className="text-left text-xs text-slate-500">
          {Business.map((item) => {
            return (
              <li key={item.index} className="py-1.5">
                {item}{" "}
              </li>
            );
          })}
        </ul>
        <div className="py-5">
          <h3 className=" pb-2 text-left text-xs font-semibold text-gray-600">
            {" "}
            For Education
          </h3>
          <ul className="text-left text-xs text-slate-500">
            {Education.map((item) => {
              return (
                <li key={item.index} className="py-1.5">
                  {item}{" "}
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <h3 className=" pb-2 text-left text-xs font-semibold text-gray-600">
            {" "}
            For Healthcare
          </h3>
          <ul className="text-left text-xs text-slate-500">
            {Healthcare.map((item) => {
              return (
                <li key={item.index} className="py-1.5">
                  {item}{" "}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="pt-5">
          <h3 className=" pb-2 text-left text-xs font-semibold text-gray-600">
            {" "}
            For Government
          </h3>
          <ul className="text-left text-xs text-slate-500">
            {Government.map((item) => {
              return (
                <li key={item.index} className="py-1.5">
                  {item}{" "}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Fourth;
