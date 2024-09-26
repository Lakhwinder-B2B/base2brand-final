"use client";

import React, { useState, useEffect } from "react";
import Header from "../../../component/header";
import blog from "../../../public/img/blog.png";
import blog1 from "../../../public/img/blog1.png";
import blog2 from "../../../public/img/blog2.png";
import blog3 from "../../../public/img/blog3.png";
import Typewriter from "typewriter-effect";
import Footer from "../../../component/footer";
import "./blog.css";
import { useRouter } from "next/navigation";
import awwor from "../../../public/img/arrow.svg";
import Image from "next/image";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import PageHead from "../../../component/PageHead";

interface BlogItem {
  id: string;
  title: string;
  term: string;
  image_url: string;
  created_at: string;
}

function Home() {

  const PageMeta={
    title:"Latest Insights | Stay Updated with Our Blog | Read More",
    descripation:"Stay updated with the latest insights on digital marketing and web development. Read Base2Brand India's blog for expert advice. Dive in now!",
    image: "/img/portfolio/b1.png", // Replace with your image URL for sharing
    canonical: "https://localhost:3000", // Replace with your page's canonical URL
  }
  const router = useRouter();

  const [data, setData] = useState<BlogItem[] | null>(null);

  // Effect to fetch data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint
        const response = await fetch(
          "https://empbackend.base2brand.com/blog-postdata"
        );
       
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);


  return (
    <>
    <PageHead PageMeta={PageMeta}/>
      <Header />

        {/* <div
          className="  pt-5"
          style={{
            backgroundImage: `url(${blog.src})`,
            width: "100%",
            height: "100%",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            paddingBottom: "3rem",
          }}
        >
          <div className=" w-100 py-3 ">
            <div className="text-center text-white mt-5 px-4">
              <Typewriter
                options={{
                  strings: ["Our Recent Blogs"],
                  autoStart: true,
                  loop: true,
                }}
              />
              <p className="mb-5 mt-4 fs-4">
                The latest in IT Trends, Strategies and Tips.
              </p>
          
            </div>
          </div>
        </div> */}

<div className="service-banner b2b-black-bg" >
          <div className="container mx-auto">
            <div className="row flex-wrap align-items-center m-auto"> 
              <div className="col-12 col-sm-12 col-md-7 " data-aos="fade-up" >
                 <h1 className=" mb-md-3 mb-2 b2b-sub-heading-bold text-uppercase">Our Recent Blogs</h1>
                 <p className="text-white col-12 col-sm-12 col-md-10">
                 The latest in IT Trends, Strategies and Tips.
                </p>
                 <div className="service-btn d-flex flex-wrap mt-3 w-100">
                 <button className="b2b-btn b2b-btn-lg m-0" >Request a Quote</button>
                 {/* onClick={toggleModal} */}
                 </div>
              </div>
              <div className="col-12 col-sm-12 col-md-5 d-flex flex-wrap align-items-center justify-content-center" data-aos="fade-up" >
              <DotLottieReact
                  src='/json/Blogs banner.json'
                  loop
                  autoplay
                  className="animated-imgs animated-banner-img"
                />
              </div>
            </div>
          </div> 
     


        <div className="container-fluid p-5 pb-5">
          <div className="row text-white mb-5 pb-5">
            {data &&
              data.map((blog: BlogItem) => (
                <div
                  key={blog.id}
                  className="col-12 col-sm-6 mb-sm-4 mb-4 col-md-6 col-lg-6 col-xl-4"
                >
                  <div className="blog_section bg-dark h-100"
                
                  >
                    <img className="blog" src={blog.image_url} alt="Blog" />
                    <div
                      className="p-4 pb-3 position-relative "
                      style={{
                        background: "#1F222F",
                      }}
                    >
                      <div
                        className="d-flex date-boxx justify-content-end"
                        style={{
                          position: "relative",
                          top: "-46px",
                          transform: "translate(10px, 10px)",
                        }}
                      >
                        {/* <p className="date Date-box m-0">
                          {new Date(blog.created_at).toLocaleDateString()}
                        </p> */}
                      </div>
                      <p className="blog_desc mb-2 blog-title"
                      
                      >
                        {blog.title.split(" ").slice(0, 10).join(" ") +
                          (blog.title.split(" ").length > 10 ? "..." : "")}
                      </p>
                      {/* <div dangerouslySetInnerHTML={{ __html: blog.term }} className="title_desc"></div> */}
                      <div className="mt-4 mb-2 btn-ab">
                        <button
                          className="btn btn-outline-primary btn-custom m-0 d-flex gap-2"
                          onClick={() =>
                            router.push(`/blog-detail?id=${blog.id}`)
                          }
                        >
                          View Detail
                          <Image className="awwow" src={awwor} alt="" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <Footer />
        </div>
    </>
  );
}
export default Home;
