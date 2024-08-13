import React from "react";
import Image from "next/image";

import markaing from "../../../public/img/digitai-markating-packags/Markatingprrops.png";

type Props = {};

const MarketingPackages = (props: Props) => {
  return (
    <>
      <section className="pt-2 b2b-gray-bg-gk  pb-lg-5 pb-3  ">
        <div className="b2b-container-lg">
          <h2 className="text-center gk-sub-heading-bold  text-white "></h2>
          <p className="b2b-text text-center hhh "></p>
          <div className="row align-items-lg-center gap-lg-0 gap-4 pt-3 pt-lg-0 flex-column-reverse flex-lg-row">
            <div className="col-lg-6 pb-lg-0 pb-3">
              <h1 className="gk-sub-heading-bold"></h1>
           
              <p className=" b2b-sub-text">
                Digital marketing packages are essential for establishing a
                strong business foundation. With various online marketing plans
                available, these packages significantly contribute to the growth
                of businesses of all sizes. However, one cannot afford all the
                diverse marketing strategies available in the market. This is
                where finding a reliable source becomes crucial.
              </p>
            
              <p className=" b2b-sub-text">
                Digital marketing packages are essential for establishing a
                strong business foundation. With various online marketing plans
                available, these packages significantly contribute to the growth
                of businesses of all sizes. However, one cannot afford all the
                diverse marketing strategies available in the market. This is
                where finding a reliable source becomes crucial.
              </p>
              <button className="gk-b2b-btn b2b-btn-sm mt-3 m-0">
                Let’s Talk
              </button>
            </div>
            <div className="col-lg-6">
              <Image
                className="img-fluid"
                src={markaing}
                alt="Shopify Website"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MarketingPackages;
