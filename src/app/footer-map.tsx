'use client'

import React, { useState , ChangeEvent  } from "react";
import Image from 'next/image';  
import footerMap from '../../public/img/map.svg';   
import radialRight from '../../public/img/radial-right.svg';   
import './our-project.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
            } else { 
                toast.error('Failed to submit form');
            }
        } catch (error) {
            toast.error('Error submitting form'); 
        } 
    };
  return (
    <>  
        <div className="footer-map" style={{ backgroundImage: `url(${radialRight.src})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'bottom right'}}>
            <div className="container pt-5 pb-5">  
                    <div className='row'>
                        <div className='col-lg-6 col-md-6 col-sm-12 header-columns p-5 m-auto'>
                        <h2 className='text-center b2b-main-heading text-uppercase'>Get in touch</h2>
                        </div>
                    </div>

                    <div className="row">
                    <div className="col-md-6 text-center mb-5 mb-md-0"    >
                        <img className="m-auto" src={footerMap.src} alt="Map" />
                        </div>  
                        <div className="col-md-6 text-white"   >
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
