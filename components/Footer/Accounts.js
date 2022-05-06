import { PlusIcon, MinusIcon } from "@heroicons/react/outline";
import { Disclosure } from "@headlessui/react";
import { Account } from "../Data";

const Accounts = () => {
  return (
    <>
      <div className="pt-5">
        <h3 className=" pb-2 text-left text-xs font-semibold text-gray-600">
          {" "}
          Account
        </h3>
        <ul className="text-left text-xs text-slate-500">
          {Account.map((item, index) => {
            return (
              <li key={index} className="py-1.5">
                {item}{" "}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Accounts;
