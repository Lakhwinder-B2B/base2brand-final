'use client' 
import React, { useState } from "react";     
import Theme from '../../../public/app/theme.png';            
import Big1 from '../../../public/app/b1.png';            
import Big2 from '../../../public/app/b2.png';            
import Big3 from '../../../public/app/b3.png';            
import Big4 from '../../../public/app/b4.png';            
import Big5 from '../../../public/app/b5.png';            
import Big6 from '../../../public/app/b6.png';            
import Request from "../request-form";

export default function Big_Commerce() {
 
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
      setShowModal(!showModal);
    };

  return (
    <>  
        <div className="p-5 bg_light_green"> 
    <div className="container"> 
<div className="row text-white  ">
      <div className="col-md-12 mx-auto text-center">
        <h2>Shopline theme and app development<br /> by Base<span className='text_primary'>2</span>Brand</h2>
        
      </div>
      <div className="col-md-4 mt-5">
        <div className="needBox">
            <img src={Big1.src} alt="" />
            <div className="p-3 pb-3">
                <h4 className='mt-3 mb-3 text_primary'>Custom Shopline Development</h4>
                <p className='font-weight-normal'>Creating your store from the ground up becomes simpler when aiming for a brand reputation boost. Our Shopline development services provide the perfect solution for your eCommerce store, ensuring high-quality returns.</p>
                 
            </div>
        </div>
      </div>

      <div className="col-md-4 mt-5">
        <div className="needBox">
            <img src={Big2.src} alt="" />
            <div className="p-3 pb-3">
                <h4 className='mt-3 mb-3 text_primary'>Shopline Theme Customization </h4>
                <p className='font-weight-normal'>While Shopline offers a diverse range of pre-designed themes, businesses often have unique ideas that don&apos;t align with the available options. Our Shopline theme customization services allow you to create a visually captivating and one-of-a-kind storefront.</p>
           
            </div>
        </div>
      </div>

      <div className="col-md-4 mt-5">
        <div className="needBox">
            <img src={Big3.src} alt="" />
            <div className="p-3 pb-3">
                <h4 className='mt-3 mb-3 text_primary'>Shopline Integration</h4>
                <p className='font-weight-normal'>In certain instances, you may need advanced features and functionalities to enhance your store performance. Fortunately, Shopline app store offers seamless integration with numerous third-party apps and services, providing the boost you need.</p>
 
            </div>
        </div>
      </div>


      <div className="col-md-4 mt-5">
        <div className="needBox">
            <img src={Big4.src} alt="" />
            <div className="p-3 pb-3">
                <h4 className='mt-3 mb-3 text_primary'>Shopline Migration</h4>
                <p className='font-weight-normal'>To stay up-to-date with security updates and support, migrating to the latest version of the Shopline platform becomes essential. Our Shopline Migration services ensure accurate mapping and the seamless transfer of your data to the new destination.</p>
            </div>
        </div>
      </div>

      <div className="col-md-4 mt-5">
        <div className="needBox">
            <img src={Big5.src} alt="" />
            <div className="p-3 pb-3">
                <h4 className='mt-3 mb-3 text_primary'>Support and Maintenance</h4>
                <p className='font-weight-normal'>We offer continuous support and maintenance services for Shopline, ensuring your store operates smoothly and optimally. Our dedicated team addresses any bugs that may arise, provides timely updates to keep your store up-to-date, and constantly monitors its performance. With our comprehensive support, your Shopline store will function seamlessly, allowing you to focus on your business with peace of mind.</p>
            </div>
        </div>
      </div>
      <div className="col-md-4 mt-5">
        <div className="needBox">
            <img src={Big6.src} alt="" />
            <div className="p-3 pb-3">
                <h4 className='mt-3 mb-3 text_primary'>Shopline Update</h4>
                <p className='font-weight-normal'>As the digital world constantly evolves, it&apos;s crucial for your store to integrate the latest features and performance improvement tools to deliver a seamless user experience. Our Shopline custom development services offer regular updates to keep your store in sync with the latest advancements.</p>
            </div>
        </div>
      </div>
      <div className="col-md-12 mt-5 pt-5">
      <button className="btn btn-outline-primary"> <i className="fa fa-hand-o-right fs-4 hide_ic mr-3" aria-hidden="true"></i> Request a Quote </button>

      </div>
     </div> 
</div>



</div>
<div className="bg-black mt-5 p-4">
    <div className="conatiner">
    <div className="row align-items-center p-2">
    <div className="col-md-5">
            <img src={Theme.src} className='bigImg' alt="" />
        </div>
        <div className="col-md-7">
            <h1 className='text_primary mb-4'>Shopline Theme & App Development</h1>
            <p className='text-white mb-5 desc_big fs-6'>Choose Base2Brand for Shopline Development services for an unmatched experience. We pride ourselves on being a reliable and trusted partner, offering exceptional solutions tailored to your specific needs. With a team of skilled and experienced Shopline developers, we deliver top-notch results that align with your brand vision. Our focus is on creating lightweight, budget-friendly stores with optimal performance.</p>
            <a className='readMore btn btn-outline-primary m-0'>Read More</a>

        </div>
       
        </div>
    </div>
</div>

{showModal && 
        <Request 
          onCloseModal={toggleModal} 
        />
      }
</>
)
}