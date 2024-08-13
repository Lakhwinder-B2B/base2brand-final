import React from 'react'
import Image from 'next/image'
import clientmeatting from "../../../public/img/digitai-markating-packags/client-meatting.png"
import seoproject from "../../../public/img/digitai-markating-packags/seo-project.png"
import boostwebsite from "../../../public/img/digitai-markating-packags/boost-your-website.png"
import seoprojectmobile from "../../../public/img/digitai-markating-packags/seo-project-mobile.png"



const Servingservice = () => {
    return (
        <>

            <section className='b2b-gray-bg-gk b2b-brands-wrap '>


                <div className="b2b-container-lg">
                    <h3 className='gk-heading-bold text-center  text-cente  m-0 '>

                        HOW Base
                        <span style={{color:"#EF6B19"}}>
                        2
                        </span>
                        Brand DO IT?
                    </h3>


                    <div className=" text-white py-5">

                        <div className="row g-4">
                            {/* Consultation */}
                            <div className="col-md-4">
                                <div className=" text-white h-100">
                                   
                                    <Image src={clientmeatting} alt=''/>
                                    <div className="card-body">
                                        <h5 className="text-white mt-lg-2 mt-3 gk-text-bold">Consultation</h5>
                                        <ul className="card-text list-unstyled">
                                            <li className=' b2b-sub-text my-2'>• Understand Business Requirements</li>
                                            <li className=' b2b-sub-text my-2'>• Alignment of Success Metrics</li>
                                            <li className=' b2b-sub-text my-2'>• Create Digital Marketing Plan</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Optimization */}
                            <div className="col-md-4">
                                <div className=" text-white h-100 d-flex flex-md-column flex-column-reverse">
                               
                                    <div className="card-body">
                                        <h5 className="text-white mt-lg-2 mb-lg-3 mt-3 gk-text-bold">Optimization</h5>
                                        <ul className="card-text list-unstyled">
                                            <li className=' b2b-sub-text my-2'>• Map the Customer Journey</li>
                                            <li className=' b2b-sub-text my-2'>• Find Out Potential Conversion Issue</li>
                                            <li className=' b2b-sub-text my-2'>• Implement Optimization Strategies</li>
                                        </ul>
                                    </div>
                                    <Image  className='d-none d-md-block' src={seoproject} alt=''/>
                                    <Image className='d-sm-none' src={seoprojectmobile} alt=''/>
                                </div>
                            </div>

                            {/* Launch Campaigns */}
                            <div className="col-md-4">
                                <div className=" text-white h-100">
                                <Image src={boostwebsite} alt=''/>
                                    <div className="card-body">
                                        <h5 className="text-white mt-lg-2 mt-3 gk-text-bold">Launch Campaigns</h5>
                                        <ul className="card-text list-unstyled">
                                            <li className=' b2b-sub-text my-2'>• Create & Launch Advertising Campaigns</li>
                                            <li  className=' b2b-sub-text my-2'>• Monitoring & Re-Adjustment</li>
                                            <li className=' b2b-sub-text my-2'>• Campaign Progress Report</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex pt-3 pt-md-5'>
                        <button className="gk-b2b-btn b2b-btn-sm  m-0 m-auto">Let’s Talk</button>
                        </div>

                    </div>
                </div>
            </section>


        </>
    )
}

export default Servingservice