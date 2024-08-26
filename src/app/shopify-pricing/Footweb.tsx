import React from "react";

const Footweb = ( {title}) => {
  return (
    <>
      <section className="pt-lg-5 pt-4 pb-lg-5 pb-4 b2b-gray-bg ">
        <div className="b2b-container-lg">
          <div className="last-gk">
            <h2 className="gk-heading-bold  text-center  text-cente m-auto gk-width">
             {title}
            </h2>
            <p className="b2b-sub-text text-center  mt-4 ">
              At Base2Brand, we specialize in creating Shopify websites that are
              tailored to meet the unique needs of our clients. From design and
              development to optimization and launch, we handle every aspect of
              the website development process with a focus on delivering
              exceptional results.
            </p>
            <p className=" b2b-sub-text text-center mt-4 ">
              Our team of experts is committed to staying up-to-date with the
              latest trends and technologies in ecommerce to ensure that our
              clients are always ahead of the curve. Whether you’re looking to
              launch a new Shopify store or revamp an existing one, we have the
              skills and expertise to help you achieve your goals.
            </p>
          </div>

        </div>

      </section>
      <div className="text-center p-3 b2b-gray-bg main_footer">
        <p className="m-0 text-white">
          ©2024
          <a className="text-white " target="_blank" href="https://www.base2brand.com/"> base2brand.com </a>

           .All rights reserved
        </p>
      </div>
    </>
  );
};

export default Footweb;
