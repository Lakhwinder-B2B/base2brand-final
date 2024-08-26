"use client";

import React, { useState , ChangeEvent  } from "react";
import Header from "../../../component/header";  
import Footer from "../../../component/footer";
import "../../../src/app/contact-us/contact.css";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 
import radialBg from '../../../public/img/radial_bg.svg';
import contactImg from '../../../public/contact-us/contactImg.svg';
import Icon1 from '../../../public/contact-us/icon1.svg';
import Icon2 from '../../../public/contact-us/icon2.svg';
import Icon3 from '../../../public/contact-us/icon3.svg';
import Icon4 from '../../../public/contact-us/icon4.svg';
import googleTag from '../../../public/contact-us/google-tag.svg';
import starRating from '../../../public/contact-us/star-rating.svg';

import { DotLottieReact } from '@lottiefiles/dotlottie-react';
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

    const showForm = async () => {
        const firstForm = document.querySelector(".secondForm");
        firstForm.classList.add("show");
        return false;
    };

    const handleClick = (event) => {
        event.preventDefault();
        showForm();
    };
  return (
    <>
      <Header /> 
      <div className="pt-0 pb-0 b2b-black-bg">
            <div className="about-mask pt-md-5 pt-3" style={{backgroundImage: `url(${radialBg.src})`,backgroundSize: 'contain',backgroundRepeat: 'no-repeat'}}>
              <div className="form-container">
                <div className="row">
                    <div className="col-md-7">
                        
                        <div className="formHeading">
                            <h1>Let&apos;s Reach <br />Out To Us</h1>
                            <div className="call-us mobileShow">
                            <ul>
                                
                                <li className="phone-link"><span>IND: </span><a href="tel:+918360116967">+918360116967</a><a href="mailto:hello@base2brand.com" className="mailID">hello@base2brand.com</a></li>
                                <li className="phone-link"><span>CANADA: </span><a href="tel:+1(416)879-2244">+1(416)879-2244</a></li>
                                <li className="phone-link"><span>UK: </span><a href="tel:+4407448435973">+4407448435973</a></li>
                                
                            </ul>
                        </div>
                            <p>Fill Out the Form</p>
                        </div>
                        <form className="py-5" onSubmit={handleSubmit}>
                            <div className="firstForm" onClick={handleClick}>
                                <div className="formRow mb-4 pb-2">
                                    <label className="form-label">Hi ! am</label>
                                    <input type="text" placeholder="eg.Andy" className="form-control removeBorder" name="name" value={formData.name} onChange={handleChange}   aria-describedby="emailHelp" required/> 
                                </div>
                                <div className="formRow mb-4 pb-2">
                                    <label className="form-label">Reach me at</label>
                                    <input type="email" placeholder="eg.hello@gmail.com" className="form-control removeBorder" name="email"   value={formData.email} onChange={handleChange}  required/>
                                </div>
                            </div>
                            <div className="secondForm">
                                <div className="formRow mb-4 pb-2">
                                    <label className="form-label">Country</label>
                                    <select className="form-control removeBorder" id="" name="service" value={formData.service} onChange={handleChange}  required> 
                                         <option value="Afghanistan">Afghanistan</option><option value="Albania">Albania</option><option value="Algeria">Algeria</option><option value="AmericanSamoa">AmericanSamoa</option><option value="Andorra">Andorra</option><option value="Angola">Angola</option><option value="Anguilla">Anguilla</option><option value="Antigua and Barbuda">Antigua and Barbuda</option><option value="Argentina"></option><option value="Armenia"></option>
                                    </select>
                                </div>
                                <div className="formRow mb-4 pb-2">
                                    <label className="form-label">Mobile No.</label>
                                    <input type="number" placeholder="7686788766" className="form-control removeBorder" name="phoneNo" value={formData.phoneNo} onChange={handleChange}  required/>
                                </div>
                                <div className="formRow mb-4 pb-2">
                                    <label className="form-label">Company Name</label>
                                    <input type="number" placeholder="Base2brand" className="form-control removeBorder" name="phoneNo" value={formData.phoneNo} onChange={handleChange}  required/>
                                </div>
                                
                                <div className="formServices mb-4 pb-2">
                                    <div>
                                        <input id="uxui" type="checkbox" name="service" value="UI/UX" />
                                        <label htmlFor="uxui">UX-UI</label>
                                    </div>
                                    <div>
                                        <input id="mob_apps" type="checkbox" name="service" value="Mobile Apps" />
                                        <label htmlFor="mob_apps">Mobile Apps</label>
                                
                                    </div>
                                    <div>
                                        <input id="web_tech" type="checkbox" name="service" value="Web Tech" />
                                        <label htmlFor="web_tech">Web Tech</label>
                                        
                                    </div>
                                    <div>
                                        <input id="seo" type="checkbox" name="service" value="SEO" />
                                        <label htmlFor="seo">SEO</label>
                                    </div>
                                    <div>
                                        <input id="smm" type="checkbox" name="service" value="SMM" />
                                        <label htmlFor="smm">SMM</label>
                                    </div>
                                    <div>
                                        <input id="branding" type="checkbox" name="service" value="Branding" />
                                        <label htmlFor="branding">Branding</label>
                                        
                                    </div>
                                    <div>
                                        <input id="others" type="checkbox" name="service" value="Others" />
                                        <label htmlFor="others">Others</label>
                                    </div>
                                </div>
                                
                                <div className="formTextarea">
                                    <label className="form-label pb-2">Comments</label>
                                    <textarea className="form-control removeBorder" id="" name='message' value={formData.message} onChange={handleChange}  required></textarea>
                                </div>
                            </div>
                            
                            <div className="formBtn">
                                <button type="submit" className="b2b-btn b2b-btn-sm">Send Message</button>
                                <div className="googleReview">
                                    <div>
                                        <img src={googleTag.src} className="googleImg" alt="" />
                                    </div>
                                    <div>
                                        <img src={starRating.src} className="starImg" alt="" />
                                        <span>26 Review</span>
                                    </div>
                                </div>
                            </div>
                            
                        
                        </form>
                        
                    </div>
                    <div className="col-md-5 call-us-wrap">
                        <div className="contact-img">
                            {/* <img src={contactImg.src} alt="" /> */}
                            <DotLottieReact
                                src='/json/banner/Contact us.json'
                                loop
                                autoplay
                                className="animated-imgs animated-contact-img"
                                />
                        </div>
                        <div className="call-us mobileHide">
                            <ul>
                                <li className="mail"><a href="mailto:hello@base2brand.com">hello@base2brand.com</a></li>
                                <li className="phone-link Ind"><span>IND: </span><a href="tel:+918360116967">+918360116967</a></li>
                                <li className="phone-link"><span>CANADA: </span><a href="tel:+1(416)879-2244">+1(416)879-2244</a></li>
                                <li className="phone-link"><span>UK: </span><a href="tel:+4407448435973">+4407448435973</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                
              </div>
            </div>
            <div className="b2b-gray-bg my-lg-5 my-3 w-100 py-5">
                <div className="b2b-container-lg">
                    <div className="row addressRow ">
                        <div className="col-md-4 col-sm-6 mb-md-0 mb-5">
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
                        {/* <div className="col-lg-3">
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
                        </div> */}
                        <div className="col-md-4 col-sm-6 mb-md-0 mb-5">
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
                        <div className="col-md-4 col-sm-6 mb-md-0 mb-5">
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