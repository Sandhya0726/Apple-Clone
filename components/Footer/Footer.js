import AppleStore from "./AppleStore";
import Fourth from "./Fourth";
import Service from "./Service";
import ShopandLearn from "./ShopandLearn";
import Last from "./Last";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col items-center  bg-gray-200">
        <div className="  w-full text-center max-w-screen-lg  ">
          {/* top sectioon of footer */}
          <div className="py-5 border-gray-400 border-b px-2">
            <h2 className="text-xs text-slate-500 text-left">
              {" "}
              Apple TV+ is $4.99/month after free trial. One subscription per
              Family Sharing group. Offer good for 3 months after eligible
              device activation. Plan automatically renews until cancelled.
              Restrictions and other terms apply.{" "}
            </h2>
          </div>
          {/* gird section of footer */}
          <div className=" flex flex-col  pt-5 md:grid    lg:grid lg:grid-cols-5">
            <ShopandLearn />
            <Service />
            <AppleStore />
            <Fourth />
            <Last />
          </div>

          {/* bottom section of grid */}
          <div className=" text-slate-500 text-xs py-10">
            <div className="py-2 border-gray-400 border-b">
              <h2 className="text-left">
                More ways to shop: Find an Apple Store or other retailer near
                you. Or call 1-800-MY-APPLE.
              </h2>
            </div>
            <div className="flex justify-between py-3">
              <h2>Copyright © 2022 Apple Inc. All rights reserved.</h2>
              <div>
                Privacy Policy | Terms of Use | Sales and Refunds |Legal | Site
                Map
              </div>
              <div className="place-self-end">United States</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
