"use client";

import React, { useState , ChangeEvent  } from "react";
import Header from "../../../component/header";  
import Quote from "../request-quote"; 
import Footer from "../../../component/footer";
import Contact from "../../../public/contact-us/contact.png";
import Wanna from "../../../public/contact-us/wanna.png";
import Loader from "../../../public/img/loader.gif";
import "../../../src/app/contact-us/contact.css";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 
import radialBg from '../../../public/img/radial_bg.svg';
import contactImg from '../../../public/contact-us/contactImg.svg';
import Icon1 from '../../../public/contact-us/icon1.svg';
import Icon2 from '../../../public/contact-us/icon2.svg';
import Icon3 from '../../../public/contact-us/icon3.svg';
import Icon4 from '../../../public/contact-us/icon4.svg';

  function ContactUs() { 
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
      <Header />
      <div className="pt-0 pb-0 b2b-black-bg">
            <div className="about-mask pt-5" style={{backgroundImage: `url(${radialBg.src})`,backgroundSize: 'contain',backgroundRepeat: 'no-repeat'}}>
              <div className="b2b-container-lg">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="formHeading">
                            <h1>Let&apos;s Reach <br />Out To Us</h1>
                            <p>Fill Out the Form</p>
                        </div>
                        <form className="py-5" onSubmit={handleSubmit}>
                            <div className="mb-5">
                                <label className="form-label">Name</label>
                                <input type="text" className="form-control removeBorder" name="name" value={formData.name} onChange={handleChange}   aria-describedby="emailHelp" required/> 
                            </div>
                            <div className="mb-5">
                                <label className="form-label">Phone No.</label>
                                <input type="number" className="form-control removeBorder" name="phoneNo" value={formData.phoneNo} onChange={handleChange}  required/>
                            </div>
                            <div className="mb-5">
                                <label className="form-label">Email</label>
                                <input type="email" className="form-control removeBorder" name="email"   value={formData.email} onChange={handleChange}  required/>
                            </div>
                            <div className="mb-5">
                                <label className="form-label">Select Services</label>
                                <select className="form-control removeBorder" id="" name="service" value={formData.service} onChange={handleChange}  required> 
                                    <option value="digital marketing">Digital Marketing</option>
                                    <option value="ecommerce development">Ecommerce Development</option>
                                    <option value="graphic design">Graphic Design</option> 
                                    <option value="web development">Web Development</option>
                                    <option value="mobile app development">Mobile App Development</option>
                                </select>
                            </div>
                            <div className="mb-5">
                                <label className="form-label">Message</label>
                                <textarea className="form-control removeBorder" id="" name='message' value={formData.message} onChange={handleChange}  required></textarea>
                            </div>
                            
                            <div className="text-right">
                                <button type="submit" className="btn btn-primary">Send Message</button>
                            </div>
                            
                        
                        </form>
                        
                    </div>
                    <div className="col-lg-5">
                        <div className="contact-img">
                            <img src={contactImg.src} alt="" />
                        </div>
                        <div className="call-us">
                            <ul>
                                <li className="mail"><a href="mailto:hello@base2brand.com">hello@base2brand.com</a></li>
                                <li className="phone-link"><span>IND: </span><a href="tel:+918360116967">+918360116967</a></li>
                                <li className="phone-link"><span>CANADA: </span><a href="tel:+1(416)879-2244">+1(416)879-2244</a></li>
                                <li className="phone-link"><span>UK: </span><a href="tel:+4407448435973">+4407448435973</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row addressRow">
                    <div className="col-lg-3">
                        <div className="addressWrap">
                            <div className="d-flex align-items-center mb-3">
                                <div className="address-title">
                                    <h3>INDIA</h3>
                                    <p>05:18 PM</p>
                                </div>
                                <div className="address-icon">
                                    <img src={Icon1.src} alt="" />
                                </div>
                            </div>
                            <div className="address">
                                <p>F-209, Industrial area<br />
                                    Phase 8-B, Sector 74, Mohali, 160074</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="addressWrap">
                            <div className="d-flex align-items-center mb-3">
                                <div className="address-title">
                                    <h3>CANADA</h3>
                                    <p>09:10 PM</p>
                                </div>
                                <div className="address-icon">
                                    <img src={Icon2.src} alt="" />
                                </div>
                            </div>
                            <div className="address">
                                <p>Ms Ady 114, Bellchase Trail Brampton<br />
                                ON L6P 3LA +1(416) 879-22444</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="addressWrap">
                            <div className="d-flex align-items-center mb-3">
                                <div className="address-title">
                                    <h3>UK</h3>
                                    <p>10:10 PM</p>
                                </div>
                                <div className="address-icon">
                                    <img src={Icon3.src} alt="" />
                                </div>
                            </div>
                            <div className="address">
                                <p>Ms Ady 114, Bellchase Trail Brampton<br />
                                ON L6P 3LA +1(416) 879-22444</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="addressWrap">
                            <div className="d-flex align-items-center mb-3">
                                <div className="address-title">
                                    <h3>USA</h3>
                                    <p>10:10 PM</p>
                                </div>
                                <div className="address-icon">
                                    <img src={Icon4.src} alt="" />
                                </div>
                            </div>
                            <div className="address">
                                <p>Ms Ady 114, Bellchase Trail Brampton<br />
                                ON L6P 3LA +1(416) 879-22444</p>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
            </div>
        <Footer />
       
      </div>
    </>
  );
};

export default ContactUs;