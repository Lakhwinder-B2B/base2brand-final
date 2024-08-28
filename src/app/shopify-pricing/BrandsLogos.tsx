'use client'


import Brand1 from "../../../public/brand/brand1.svg";
import Brand2 from "../../../public/brand/brand2.svg";
import Brand3 from "../../../public/brand/brand3.svg";
import Brand4 from "../../../public/brand/brand4.svg";
import Brand5 from "../../../public/brand/brand5.svg";
import Brand6 from "../../../public/brand/brand6.svg";
import Brand7 from "../../../public/brand/brand7.svg";
import Brand8 from "../../../public/brand/brand8.svg";
import Brand9 from "../../../public/brand/brand9.svg";
import Brand10 from "../../../public/brand/brand10.svg";
import Brand11 from "../../../public/brand/brand11.svg";
import Brand12 from "../../../public/brand/brand12.svg";
import Brand13 from "../../../public/brand/brand13.svg";
import Brand14 from "../../../public/brand/brand14.svg";
import Brand15 from "../../../public/brand/brand15.svg";
import Brand16 from "../../../public/brand/brand16.svg";
import Brand17 from "../../../public/brand/brand17.svg";
import Brand18 from "../../../public/brand/brand18.svg";
import Brand19 from "../../../public/brand/brand19.svg";
import Brand20 from "../../../public/brand/brand20.svg";
import Brand21 from "../../../public/brand/brand21.svg";
import Brand22 from "../../../public/brand/brand22.svg";
import Brand23 from "../../../public/brand/brand23.svg";
import Slider from "react-slick";
import '../our-project.css'

interface BrandProps {
  heading?: string;
  bgcolor?: string;
  color?: string;
}

export default function BrandsLogos({ heading, bgcolor, color }: BrandProps) {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 500,
    speed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    cssEase: 'linear',
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  return (
    <>
      <div
        className={`w-100 b2b-brands-wrap radialGradient ${
          bgcolor === 'b2b-gray-bg' ? 'b2b-white-bg' : 'BG-RED '
        }`}
      >
        <div className="container-fluid p-0">
            <div className="b2b-container-lg">
          <h3
            className={`gk-heading-bold text-center text-uppercase ${
              color ? color : 'text-white'
            }`}
            data-aos="fade-up"
          >
            {heading}
          </h3>
          </div>
          <div className="logo_brand" data-aos="fade-up" data-aos-delay="300">
            <Slider {...settings} className="w-100">
              {/* Dynamically load brand logos */}
              {[Brand1, Brand2, Brand3, Brand4, Brand5, Brand6, Brand7, Brand8, Brand9, Brand10, Brand11, Brand12, Brand13, Brand14, Brand15, Brand16, Brand17, Brand18, Brand19, Brand20, Brand21, Brand22, Brand23].map((Brand, index) => (
                <img key={index} className="logo_brands" src={Brand.src} alt={`Brand Logo ${index + 1}`} />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}
