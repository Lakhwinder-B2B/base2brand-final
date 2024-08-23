"use client";
import React, { useState } from "react";
import Image from "next/image";
import Arrowicon from "../../../public/img/Arrow-icon.svg";

const ChousePackages = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <>
      <section
        className="tabs b2b-brands-wrap"
        style={{
          backgroundImage:
            "url('./img/digitai-markating-packags/choosepackages.png')",
          backgroundSize: "cover",
          backgroundPosition: "98% 50%",
          width: "100%",
          height: "100%",
        }}
      >
        <div className="b2b-container-lg">
          <h3 className="gk-heading-bold text-center m-auto gk-width-lg">
            What Does Our Digital Marketing Packages Include?
          </h3>
          <p className=" b2b-sub-text text-center pt-3 pb-3">
            We offer a complete range of services to boost your business.
            Usually, these online marketing packages include vital services such
            as SEO, content marketing, and paid advertising. Here are the main
            components of our digital marketing price packages.
          </p>

          <div className="row py-2 py-md-5">
            <div className="col-md-4">
              <ul
                className="nav flex-column nav-pills line-1 gap-3"
                role="tablist"
                aria-orientation="vertical"
              >
                <li className="nav-item display-int" role="presentation">
                  <button
                    className={`nav-link ${
                      activeTab === "tab1" ? "active" : ""
                    }`}
                    onClick={() => handleTabClick("tab1")}
                  >
                    Initial Review & Analysis
                    <span className="arrow-icon-gk ">
                      <Image className="omg" src={Arrowicon} alt="" />
                    </span>
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className={`nav-link ${
                      activeTab === "tab2" ? "active" : ""
                    }`}
                    onClick={() => handleTabClick("tab2")}
                  >
                    On-Page Optimization
                    <span className="arrow-icon-gk ">
                      <Image className="omg" src={Arrowicon} alt="" />
                    </span>
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className={`nav-link ${
                      activeTab === "tab3" ? "active" : ""
                    }`}
                    onClick={() => handleTabClick("tab3")}
                  >
                    Local Search Optimization
                    <span className="arrow-icon-gk ">
                      <Image className="omg" src={Arrowicon} alt="" />
                    </span>
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className={`nav-link ${
                      activeTab === "tab4" ? "active" : ""
                    }`}
                    onClick={() => handleTabClick("tab4")}
                  >
                    Google Ads
                    <span className="arrow-icon-gk ">
                      <Image className="omg" src={Arrowicon} alt="" />
                    </span>
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className={`nav-link ${
                      activeTab === "tab5" ? "active" : ""
                    }`}
                    onClick={() => handleTabClick("tab5")}
                  >
                    Social Media Marketing
                    <span className="arrow-icon-gk ">
                      <Image className="omg" src={Arrowicon} alt="" />
                    </span>
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className={`nav-link ${
                      activeTab === "tab6" ? "active" : ""
                    }`}
                    onClick={() => handleTabClick("tab6")}
                  >
                    Customer Support
                    <span className="arrow-icon-gk ">
                      <Image className="omg" src={Arrowicon} alt="" />
                    </span>
                  </button>
                </li>
              </ul>
            </div>
            <div className="col-md-8 pt-4 pt-md-0">
              <div className="tab-content">
                <div
                  className={`tab-pane fade ${
                    activeTab === "tab1" ? "show active" : ""
                  }`}
                >
                  <h4 className="gk-b2b-bold text-white">
                    Initial Review & Analysis
                  </h4>
                  <p className=" b2b-sub-text">
                    An initial review and analysis are essential to any digital
                    marketing pricing packages. This critical step measures your
                    website's current state, identifies improvement areas, and
                    crafts a strategy for better search engine visibility.
                    Throughout this phase, all issues or opportunities are
                    identified for later addressing through targeted strategies.
                  </p>
                  <p className=" b2b-sub-text">
                    The process involves a comprehensive audit covering
                    structure, content, technical SEO, backlinks, and
                    competition. After gathering and analyzing data, we
                    formulate a plan that addresses both short-term and
                    long-term goals. This approach also helps in identifying
                    potential risks associated with implementing specific
                    solutions, such as changes in algorithms or fluctuations in
                    keyword ranking positions.
                  </p>
                </div>
                <div
                  className={`tab-pane fade ${
                    activeTab === "tab2" ? "show active" : ""
                  }`}
                >
                  <h4 className="gk-b2b-bold text-white">
                    On-Page Optimization
                  </h4>
                  <p className=" b2b-sub-text">
                    Details about On-Page Optimization...
                  </p>
                </div>
                <div
                  className={`tab-pane fade ${
                    activeTab === "tab3" ? "show active" : ""
                  }`}
                >
                  <h4 className="gk-b2b-bold text-white">
                    Local Search Optimization
                  </h4>
                  <p className=" b2b-sub-text">
                    Details about Local Search Optimization...
                  </p>
                </div>
                <div
                  className={`tab-pane fade ${
                    activeTab === "tab4" ? "show active" : ""
                  }`}
                >
                  <h4 className="gk-b2b-bold text-white">Google Ads</h4>
                  <p className=" b2b-sub-text">Details about Google Ads...</p>
                </div>
                <div
                  className={`tab-pane fade ${
                    activeTab === "tab5" ? "show active" : ""
                  }`}
                >
                  <h4 className="gk-b2b-bold text-white">
                    Social Media Marketing
                  </h4>
                  <p className=" b2b-sub-text">
                    Details about Social Media Marketing...
                  </p>
                </div>
                <div
                  className={`tab-pane fade ${
                    activeTab === "tab6" ? "show active" : ""
                  }`}
                >
                  <h4 className="gk-b2b-bold text-white">Customer Support</h4>
                  <p className=" b2b-sub-text ">
                    Details about Customer Support...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChousePackages;
