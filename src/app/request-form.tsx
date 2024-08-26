'use client'
import React, { useState } from "react"; 
// import $ from 'jquery';
import quoteImg from "../../public/contact-us/quote-img.svg";
import './form.css'; 
import ReCAPTCHA from "react-google-recaptcha";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './request-form.css';
interface ModalProps {
    onCloseModal: () => void;
}

const RequestForm: React.FC<ModalProps> = ({ onCloseModal }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNo: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            // Your form submission logic goes here
            const response = await fetch('https://empbackend.base2brand.com/submit-requestQuotes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                // Handle success, maybe show a success message
                toast.success('Form submitted successfully');
                nextForm();
                // setTimeout(function() {
                //     onCloseModal();                          
                //     }, 800);
                //  onCloseModal();


            } else {
                toast.error('Failed to submit form');

            }
        } catch (error) {
            toast.error('Error submitting form');
        }
    };

    const handleRecaptchaVerify = (response: string | null) => {
        // Verify if the response is not null
        if (response) { 
            // handleSubmit();
        } else {
            console.error('reCAPTCHA verification failed');
        }
    };
    const nextForm = async () => {
        const ModalBody = document.querySelector(".b2b-modal-body");
        const TabNumber = ModalBody.getAttribute("data-tab");
        const NextTabNumber = parseInt(TabNumber) + 1;
        ModalBody.classList.remove("tab-"+TabNumber);
        ModalBody.classList.add("tab-"+NextTabNumber);
        ModalBody.setAttribute("data-tab",`${NextTabNumber}`)
        
        // boxTabs.forEach(boxTab => {
        //     boxTab.classList.remove("d-block");
        //     boxTab.classList.add("d-none");
        //   });
        const boxTabBodyprev = document.querySelector(`.box-tab-${TabNumber}`);
        boxTabBodyprev.classList.remove("d-block");
        boxTabBodyprev.classList.add("d-none");

        const boxTabBody = document.querySelector(`.box-tab-${NextTabNumber}`);
        boxTabBody.classList.remove("d-none");
        boxTabBody.classList.add("d-block");
       
        return false;
    };

    
    const prevForm = async () => {
        const ModalBody = document.querySelector(".b2b-modal-body");
        const TabNumber = ModalBody.getAttribute("data-tab");
        const prevTabNumber = parseInt(TabNumber) - 1;
        ModalBody.classList.remove("tab-"+TabNumber);
        ModalBody.classList.add("tab-"+prevTabNumber);
        ModalBody.setAttribute("data-tab",`${prevTabNumber}`)
        
        const boxTabBodyprev = document.querySelector(`.box-tab-${TabNumber}`);
        boxTabBodyprev.classList.remove("d-block");
        boxTabBodyprev.classList.add("d-none");

        const boxTabBody = document.querySelector(`.box-tab-${prevTabNumber}`);
        boxTabBody.classList.remove("d-none");
        boxTabBody.classList.add("d-block");
       
        return false;
    };

    const stepBack = (event) => {
        event.preventDefault();
        prevForm();
    };
    const handleClick = (event) => {
        event.preventDefault();
        // const ModalBody = document.querySelector(".b2b-modal-body");
        // const TabNumber = ModalBody.getAttribute("data-tab");
        // if(parseInt(TabNumber) == 1){
        //     if($('.serviceCheckbox').is(':checked')){
        //         $('.errorBox').css('display','none');
        //         nextForm();
        //     }else{
        //         $('.serviceError').css('display','block');
        //     }
        // }else if(parseInt(TabNumber) == 2){
        //     $('.errorBox').css('display','none');
        //     nextForm();
            
        // }else if(parseInt(TabNumber) == 3){
        //     if($('.project_description').val() != ''){
        //         $('.errorBox').css('display','none');
        //         nextForm();
        //     }else{
        //         $('.descError').css('display','block');
        //     }
        // }

        nextForm();
        
    };
    return (
        <div className="modal request-form fade" id="exampleModal" aria-labelledby="exampleModalLabel" data-modal="hideTab" >
            <div className="modal-dialog modal-lg ">
                <div className="modal-content b2b-modal-content p-0">
                  
                  
                    <div className="modal-body b2b-modal-body tab-1" data-tab="1">
                        <div className="d-flex justify-content-between align-items-center">
                            <button type="button" onClick={stepBack} className="b2b-btn-back" aria-label="Back"></button>
                            <button type="button" onClick={onCloseModal} className="btn-close b2b-btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>  
                        <form onSubmit={handleSubmit}>
                            <div className="box-tab box-tab-1 d-block">
                                <h2>Quote</h2>
                                <h3>What services would you like to opt?</h3>
                                <div className="formServices mb-2 pb-2">
                                    <div>
                                        <input className="serviceCheckbox" id="uxui" type="checkbox" name="service" value="UI/UX" />
                                        <label htmlFor="uxui">UX-UI</label>
                                    </div>
                                    <div>
                                        <input className="serviceCheckbox" id="branding" type="checkbox" name="service" value="Branding" />
                                        <label htmlFor="branding">Branding</label>
                                        
                                    </div>
                                    <div>
                                        <input className="serviceCheckbox" id="development" type="checkbox" name="service" value="Development" />
                                        <label htmlFor="development">Development</label>
                                
                                    </div>
                                    <div>
                                        <input className="serviceCheckbox" id="marketing" type="checkbox" name="service" value="Marketing" />
                                        <label htmlFor="marketing">Marketing</label>
                                        
                                    </div>
                                    <div>
                                        <input className="serviceCheckbox" id="all" type="checkbox" name="service" value="All Services" />
                                        <label htmlFor="all">All Services</label>
                                    </div>
                                </div>
                                <div className="errorBox serviceError" style={{display: 'none'}}>
                                    <span className="error">Please fill out this field</span>
                                </div>
                                <div className="text-center">
                                    <button type="button" onClick={handleClick} className="b2b-continue-btn">Continue</button>
                                </div>
                            </div>
                            <div className="box-tab box-tab-2 d-none">
                                <h2>Quote</h2>
                                <h3>What services would you like to opt?</h3>
                                <div className="formServices mb-2 pb-2">
                                    <div>
                                        <input className="serviceType" id="Project" type="radio" name="service_type" value="Project" />
                                        <label onClick={handleClick} htmlFor="Project">Project</label>
                                    </div>
                                    <div>
                                        <input className="serviceType" id="Retainer" type="radio" name="service_type" value="Retainer" />
                                        <label onClick={handleClick} htmlFor="Retainer">Retainer</label>
                                        
                                    </div>
                                    <div>
                                        <input className="serviceType" id="Hourly" type="radio" name="service_type" value="Hourly" />
                                        <label onClick={handleClick} htmlFor="Hourly">Hourly</label>
                                
                                    </div>
                                    <div className="errorBox serviceTypeError" style={{display: 'none'}}>
                                        <span className="error">Please fill out this field</span>
                                    </div>
                                    
                                </div>
                                
                            </div>
                            <div className="box-tab box-tab-3 d-none">
                                <h2>Quote</h2>
                                <h3>Project description</h3>
                                <div className="formDescription mb-2 pb-2">
                                    <div>
                                        <textarea className="project_description" name="project_description" ></textarea>
                                    </div>
                                </div> 
                                <div className="errorBox descError" style={{display: 'none'}}>
                                    <span className="error">Please fill out this field</span>
                                </div>
                                <div className="text-center">
                                    <button onClick={handleClick} type="button" className="b2b-continue-btn">Continue</button>
                                </div>
                            </div>
                            <div className="box-tab box-tab-4 d-none">
                                <h2>Quote</h2>
                                <div className="formIntro mb-2 pb-2">
                                    <div className="formRow pb-2">
                                        <label className="form-label">Hi ! am</label>
                                        <input type="text" required placeholder="eg.Andy" className="form-control removeBorder" name="name" value={formData.name} onChange={handleChange}   aria-describedby="emailHelp" /> 
                                    </div>
                                    <div className="formRow pb-2">
                                        <label className="form-label">Reach me at</label>
                                        <input type="email" required placeholder="eg.hello@gmail.com" className="form-control removeBorder" name="email"   value={formData.email} onChange={handleChange}  />
                                    </div>
                                    <div className="formRow pb-2">
                                        <label className="form-label">Country</label>
                                        <select required className="form-control removeBorder" id="" name="service" > 
                                            <option value="Afghanistan">Afghanistan</option><option value="Albania">Albania</option><option value="Algeria">Algeria</option><option value="AmericanSamoa">AmericanSamoa</option><option value="Andorra">Andorra</option><option value="Angola">Angola</option><option value="Anguilla">Anguilla</option><option value="Antigua and Barbuda">Antigua and Barbuda</option><option value="Argentina"></option><option value="Armenia"></option>
                                        </select>
                                    </div>
                                    <div className="formRow pb-2">
                                        <label className="form-label">Mobile No.</label>
                                        <input type="number" required placeholder="7686788766" className="form-control removeBorder" name="phoneNo" value={formData.phoneNo} onChange={handleChange}  />
                                    </div>
                                </div>
                                <div className="text-center">
                                <button type="submit" className="b2b-quote-btn"><span>Send</span></button>
                                </div>
                            </div>
                            <div className="box-tab box-tab-5 d-none">
                                <div className="thankyou-content">
                                    <h2>Thank You!</h2>
                                    <p>We&apos;ll Get Back <br />To You As Soon As Possible.</p>
                                </div>
                                
                                
                                <img src={quoteImg.src} className="thankyouImg" alt="" />
                            </div>
                        </form>
                    </div> 
                </div>
            </div>
        </div>
    );
};

export default RequestForm;
