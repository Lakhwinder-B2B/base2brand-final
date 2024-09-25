'use client'

import React, { useState , ChangeEvent  } from "react";
import Image from 'next/image';  
import footerMap from '../../public/img/map.svg';   
import radialRight from '../../public/img/radial-right.svg';   
import './our-project.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Tooltip } from 'react-tooltip';


export default function FooterMap() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNo: '',
        service: 'web development',
        message: ''
    });

    // Event handler function
    const handleChange = (e: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }; 

    // Form submission handler function
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); 
        try {
            // Your form submission logic goes here
            const response = await fetch('https://empbackend.base2brand.com/submit-contect-us', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                // Handle success, maybe show a success message
                toast.success('Form submitted successfully'); 
                setFormData({
                    name: '',
                    email: '',
                    phoneNo: '',
                    service: 'web development', // reset to default selected value 
                    message: ''
                });
            } else { 
                toast.error('Failed to submit form');
            }
        } catch (error) {
            toast.error('Error submitting form'); 
        } 
    };
  return (
    <>  
        <div className="footer-map b2b-black-bg " style={{ backgroundImage: `url(${radialRight.src})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'bottom right'}}>
            <div className="container pt-md-5 pt-3 pb-5 b2b-overflow-hidden">  
                    <div className='row'>
                        <div className='col-lg-6 col-md-6 col-sm-12 header-columns p-5 m-auto'>
                        <h2 className='text-center b2b-main-heading text-uppercase' data-aos="fade-up">Get in touch</h2>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-6 col-md-12 text-center mb-5 mb-md-0"    >
                            <div className="mapWrapper mapWrapper-lg">
                                <img className="m-auto" src={footerMap.src} alt="Map" data-aos="zoom-in-up" data-aos-delay="300"/>
                                <div className="address1" data-aos="zoom-in" data-aos-delay="600">
                                    
                                    <span data-tooltip-id="my-tooltip-1" className="addressDot"></span>
                                </div>
                                <Tooltip
                                        id="my-tooltip-1"
                                        className="tooltipText"
                                        place="top"
                                        html="<p class='tooltipTitle'>USA</p>
                                        7311 Gladys Ave El Cerrito CA 94530,<br/> USA, +1 (720) 903-5933"
                                    />
                                <div className="address2" data-aos="zoom-in" data-aos-delay="700">
                                    <span data-tooltip-id="my-tooltip-2" className="addressDot"></span>
                                </div>
                                <Tooltip
                                        id="my-tooltip-2"
                                        className="tooltipText"
                                        place="top"
                                        html="<p class='tooltipTitle'>Uk</p>
                                       	69 Grove St, Edinburgh. EH3 8FD<br />
                                        UK +(0044) 7448435973"
                                    />
                                <div className="address3" data-aos="zoom-in" data-aos-delay="800">
                                    <span data-tooltip-id="my-tooltip-3" className="addressDot"></span>
                                </div>
                                <Tooltip
                                        id="my-tooltip-3"
                                        className="tooltipText"
                                        place="top"
                                        html="<p class='tooltipTitle'>India (headquater) </p>
                                        F-209, Industrial area Phase 8-B,<br />
                                        Sector 74, Mohali, 160074 +91 9872487850"
                                    />
                            </div>  
                        </div>  
                        <div className="col-lg-6 col-md-12 text-white"  data-aos="fade-up">
                            <form className="footer-form" onSubmit={handleSubmit}>
                                <div className="row">
                                        <div className="col-lg-6 mb-3">
                                            <input type="text" className="form-control removeBorder" name="name" placeholder="Name" value={formData.name} onChange={handleChange}   aria-describedby="emailHelp" required/> 
                                        </div>
                                        <div className="col-lg-6 mb-3">
                                            <input type="email" className="form-control removeBorder" name="email"   placeholder="Email" value={formData.email} onChange={handleChange}  required/>
                                        </div>
                                        <div className="col-lg-6 mb-3">
                                            <input type="number" className="form-control removeBorder" name="phoneNo" placeholder="Phone" value={formData.phoneNo} onChange={handleChange}  required/>
                                        </div>
                                        <div className="col-lg-6 mb-3">
                                            <select className="form-control removeBorder" id="" name="service" value={formData.service} onChange={handleChange}  required> 
                                                <option value="">Select Services</option>
                                                <option value="digital marketing">Digital Marketing</option>
                                                <option value="ecommerce development">Ecommerce Development</option>
                                                <option value="graphic design">Graphic Design</option> 
                                                <option value="web development">Web Development</option>
                                                <option value="mobile app development">Mobile App Development</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>
                                        <div className="col-lg-12 mb-3">
                                            <textarea className="form-control removeBorder" id="" name='message' placeholder="Your Message" value={formData.message} onChange={handleChange}  required></textarea>
                                        </div>
                                        <div className="col-lg-12 mb-3">
                                            <button type="submit" className="form-btn">Send Message</button>
                                        </div>
                                </div>
                               
                            </form>
                        </div>
                        
                        
                    </div>
            </div> 
        </div> 
    </>
  )
}
