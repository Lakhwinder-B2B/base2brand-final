"use client";

import React, { useState , ChangeEvent , useEffect   } from "react";
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
import PageHead from "../../../component/PageHead";
  function ContactUs() { 
    const PageMeta={
        title:"Get in Touch (Schedule a Consultation)",
        description:"Learn about Base2Brand India: Our mission, values, and history of driving client success. Explore our story and connect with us to grow your business.",
        canonical: "https://localhost:3000", // Replace with your page's canonical URL
        image: "/img/portfolio/b1.png", // Replace with your image URL for sharing
      };
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNo: '',
        service: 'web development',
        companyname:'',
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
                    companyname: '',
                    message: ''
                });
              
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
    const [times, setTimes] = useState({
        indiaTime: '',
        canadaTime: '',
        ukTime: '',
        usaTime: ''
    });

    useEffect(() => {
        // Function to update time based on time zones
        const updateTime = () => {
            const indiaTime = new Date().toLocaleTimeString("en-US", { timeZone: "Asia/Kolkata", hour: '2-digit', minute: '2-digit' });
            const canadaTime = new Date().toLocaleTimeString("en-US", { timeZone: "America/Toronto", hour: '2-digit', minute: '2-digit' });
            const ukTime = new Date().toLocaleTimeString("en-US", { timeZone: "Europe/London", hour: '2-digit', minute: '2-digit' });
            const usaTime = new Date().toLocaleTimeString("en-US", { timeZone: "America/Los_Angeles", hour: '2-digit', minute: '2-digit' });

            setTimes({
                indiaTime,
                canadaTime,
                ukTime,
                usaTime
            });
        };

        updateTime();
        const intervalId = setInterval(updateTime, 60000); // Update every 1 minute
        return () => clearInterval(intervalId); // Cleanup the interval on component unmount
    }, []);
  return (
    <>
    <PageHead PageMeta={PageMeta}/>
      <Header /> 
      <div className="pt-0 pb-0 b2b-black-bg">
            <div className="about-mask pt-md-5 pt-3" style={{backgroundImage: `url(${radialBg.src})`,backgroundSize: 'contain',backgroundRepeat: 'no-repeat'}}>
              <div className="form-container">
                <div className="row">
                    <div className="col-md-7">
                        
                        <div className="formHeading">
                            <h1 data-aos="fade-up" data-aos-delay="300">Let&apos;s Reach <br />Out To Us</h1>
                            <div className="call-us mobileShow" data-aos="fade-up" data-aos-delay="300">
                            <ul>
                                
                                <li className="phone-link"><span>IND: </span><a href="tel:+918360116967">+918360116967</a><a href="mailto:hello@base2brand.com" className="mailID">hello@base2brand.com</a></li>
                                <li className="phone-link"><span>USA: </span><a href="tel:+1(416)879-2244">+1(416)879-2244</a></li>
                                <li className="phone-link"><span>UK: </span><a href="tel:+4407448435973">+4407448435973</a></li>
                                
                            </ul>
                        </div>
                            <p data-aos="fade-up" data-aos-delay="300">Fill Out the Form</p>
                        </div>
                        <form className="py-5" onSubmit={handleSubmit} data-aos="fade-up" data-aos-delay="300">
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
                                    <select className="form-control removeBorder text-white background-black" id="" name="service" value={formData.service} onChange={handleChange}  required> 
                                    <option  className="b2b-black-bg opt-r" value="India">India</option>
                                    <option  className="b2b-black-bg opt-r" value="Afghanistan">Afghanistan</option>
                                    <option  className="b2b-black-bg opt-r" value="Albania">Albania</option>
                                    <option  className="b2b-black-bg opt-r" value="Algeria">Algeria</option>
                                    <option  className="b2b-black-bg opt-r" value="AmericanSamoa">AmericanSamoa</option>
                                    <option  className="b2b-black-bg opt-r" value="Andorra">Andorra</option>
                                    <option  className="b2b-black-bg opt-r" value="Angola">Angola</option>
                                    <option  className="b2b-black-bg opt-r" value="Anguilla">Anguilla</option>
                                    <option  className="b2b-black-bg opt-r" value="Antigua and Barbuda">Antigua and Barbuda</option>
                                    <option  className="b2b-black-bg opt-r" value="Argentina">Argentina</option>
                                    <option  className="b2b-black-bg opt-r" value="Armenia">Armenia</option>
                                    </select>
                                </div>
                                <div className="formRow mb-4 pb-2">
                                    <label className="form-label">Mobile No.</label>
                                    <input type="number" placeholder="7686788766" className="form-control removeBorder" name="phoneNo" value={formData.phoneNo} onChange={handleChange} 
                                     onInput={(e: React.FormEvent<HTMLInputElement>) => {
                                        const inputElement = e.target as HTMLInputElement; // Cast the target to HTMLInputElement
                                        inputElement.value = inputElement.value.replace(/[^0-9]/g, ''); // Only allows digits
                                      }}
                                      required/>
                                </div>
                                <div className="formRow mb-4 pb-2">
                                    <label className="form-label">Company Name</label>
                                    <input type="text" placeholder="Base2brand" className="form-control removeBorder" name="companyname" value={formData.companyname} onChange={handleChange}  required/>
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
                                    <textarea className="form-control removeBorder text-white" id="" name='message' value={formData.message} onChange={handleChange}  required></textarea>
                                </div>
                            </div>
                            
                            <div className="formBtn">
                                <button type="submit" className="b2b-btn b2b-btn-sm">Send Message</button>
                                <a href="https://g.co/kgs/pnbnBvi" target="_blank" className="googleReview">
                                    <div>
                                        <img src={googleTag.src} className="googleImg" alt="" />
                                    </div>
                                    <div>
                                        <img src={starRating.src} className="starImg" alt="" />
                                        <span> 85 Review</span>
                                    </div>
                                </a>
                            </div>
                            
                        
                        </form>
                        
                    </div>
                    <div className="col-md-5 call-us-wrap" >
                        <div className="contact-img" data-aos="fade-up" data-aos-delay="300">
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
                                <li className="mail" data-aos="fade-up" data-aos-delay="300"><a href="mailto:hello@base2brand.com">hello@base2brand.com</a></li>
                                <li className="phone-link Ind" data-aos="fade-up" data-aos-delay="300"><span>IND: </span><a href="tel:+918360116967">+918360116967</a></li>
                                <li className="phone-link" data-aos="fade-up" data-aos-delay="300"><span>USA: </span><a href="tel:+1720903-5933">+1 720 9035933</a></li>
                                <li className="phone-link" data-aos="fade-up" data-aos-delay="300"><span>UK: </span><a href="tel:+4407448435973">+4407448435973</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                
              </div>
            </div>
            <div className="b2b-gray-bg my-lg-5 my-3 w-100 py-5" data-aos="fade-up" data-aos-delay="300">
                <div className="b2b-container-lg">
                    <div className="row addressRow ">
                        <div className="col-12 col-lg-4 col-md-6 mb-md-0 mb-5" data-aos="fade-up" data-aos-delay="300">
                            <div className="addressWrap">
                                <div className="d-flex align-items-center mb-3">
                                    <div className="address-title">
                                        <h3>INDIA</h3>
                                        <p>{times.indiaTime}</p>
                                    </div>
                                    <div className="address-icon">
                                        <img src={Icon1.src} alt="" />
                                    </div>
                                </div>
                                <div className="address">
                                    <p>F-209, Industrial area<br />
                                        Phase 8-B, Sector 74, Mohali, 160074 <br/>+91 9872487850</p>
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
                        <div className="col-12 col-lg-4 col-md-6 mb-md-0 mb-5" data-aos="fade-up" data-aos-delay="300">
                            <div className="addressWrap">
                                <div className="d-flex align-items-center mb-3">
                                    <div className="address-title">
                                        <h3>UK</h3>
                                        <p>{times.ukTime}</p>
                                    </div>
                                    <div className="address-icon">
                                        <img src={Icon3.src} alt="" />
                                    </div>
                                </div>
                                <div className="address">
                                    <p>69 Grove St, Edinburgh. EH3 8FD <br />
                                    UK +44 7448435973</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4 col-md-6 mb-md-0 mb-5" data-aos="fade-up" data-aos-delay="300">
                            <div className="addressWrap">
                                <div className="d-flex align-items-center mb-3">
                                    <div className="address-title">
                                        <h3>USA</h3>
                                        <p>{times.usaTime}</p>
                                    </div>
                                    <div className="address-icon">
                                        <img src={Icon4.src} alt="" />
                                    </div>
                                </div>
                                <div className="address">
                                    <p>7311 Gladys Ave El Cerrito CA 94530,<br />
                                    USA, +1 720 9035933</p>
                                </div>
                            </div>
                            
                        </div>  
                        {/* <div className="col-12 col-lg-3 col-md-6 mb-md-0 mb-5" data-aos="fade-up" data-aos-delay="300">
                            <div className="addressWrap">
                                <div className="d-flex align-items-center mb-3">
                                    <div className="address-title">
                                    <h3>CANADA</h3>
                                    <p>{times.canadaTime}</p>
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
                            
                        </div>   */}
                    </div>
                </div>
            </div>
        <Footer />
       
      </div>
    </>
  );
};

export default ContactUs;