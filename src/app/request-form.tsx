'use client'
import React, { useState } from "react"; 
import FormImg from "../../public/img/request1.jpg";
import './form.css'; 
import ReCAPTCHA from "react-google-recaptcha";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
                 onCloseModal();


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

    return (
        <div className="modal request-form fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content bg-white">
                  
                  
                    <div className="modal-body text-center">
                        <div className="row ">
                            
                            <div className="col-md-12">
                            <div className="d-flex justify-content-center pr-2 align-items-center mb-3">
                                <h4 className="modal-title text-center" id="exampleModalLabel">Quote</h4>
                                <button type="button" onClick={onCloseModal} className="btn-close alignTop" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div> 
                            <p className="text-center">What services would you like to opt?</p>
                            <form onSubmit={handleSubmit}>
                            <div className="row">

                            <div className="col-md-12">
                                    <div className="mb-3">
                                      <button type="button" className="btn btn-Quite">UI/UX</button>
                                    </div>
                                    <div className="mb-3">
                                      <button type="button" className="btn btn-Quite">Branding</button>
                                    </div>
                                    <div className="mb-3">
                                      <button type="button" className="btn btn-Quite">Development</button>
                                    </div>
                                    <div className="mb-3">
                                      <button type="button" className="btn btn-Quite">Marketing</button>
                                    </div>
                                    <div className="mb-3">
                                      <button type="button" className="btn btn-Quite">All Services</button>
                                    </div>
                                        <div className="text-center">
                                            <a className="Continue">Continue</a>
                                        </div>
                                    </div>

                                {/* <div className="col-md-12">
                                    <div className="mb-3">
                                        <label htmlFor="name">Name</label>
                                        <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} required/>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="mb-3">
                                        <label htmlFor="email">Email</label>
                                        <input type="text" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required/>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="mb-3">
                                        <label htmlFor="phoneNumber">Phone Number</label>
                                        <input type="text" className="form-control" id="phoneNumber" name="phoneNo" value={formData.phoneNo} onChange={handleChange} required/>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="mb-3">
                                        <label htmlFor="message">Message</label>
                                        <textarea className="form-control" id="message" name="message" value={formData.message} onChange={handleChange}></textarea>
                                    </div>
                                </div>
                                <div className="col-md-12 text-right">
                                    <ReCAPTCHA
                                        sitekey="6LchbakpAAAAAAobA9560VG0Wxnh76i2KBTt0DUK"
                                        onChange={handleRecaptchaVerify}
                                    />
                                    <button type="submit" className="btn btn-outline-primary mt-4">Submit</button>
                                </div> */}
                            </div>
                        </form>
                            </div>
                        </div>
                        
                        </div> 
                </div>
            </div>
        </div>
    );
};

export default RequestForm;
