'use client'
import { useEffect } from 'react'; 
import React ,{useState } from "react"; 
import './project.css';
import CountUp from 'react-countup'; 
 
import Slide from './slide/page'
import Slide1 from './slide/slide2'
import Slide2 from './slide/slide3'
import Slide3 from './slide/slide4'
import Slide4 from './slide/slide5'

import yrInIndustury from '../../public/img/icon1.svg'; 
import projects from '../../public/img/icon2.svg'; 
import rating from '../../public/img/icon3.svg'; 
import happyClient from '../../public/img/icon4.svg'; 
import design from '../../public/img/icon5.svg'; 

export default function home() {
  return (
    <>  
 

    <div className="">
      <Slide />

    </div>
      <div className='progress-column b2b-gray-bg b2b-achievements'>
        
          <div className='row'>
              <div className='col-lg-6 col-md-6 col-sm-12 header-columns p-5 p-sm-3 m-auto'>
                <h2 className='text-center b2b-sub-heading-bold text-uppercase'>Our Achievements &amp; Milestones</h2>
                <p className='b2b-text text-center '>Explore our company&apos;s remarkable achievements, milestones, and records that showcase our success and expertise</p>
              </div>
          </div>
          
          <div className='b2b-container-lg'>
            <div className='row progress-count d-flex flex-wrap justify-content-between'>
              <div className="count-col">
                <div className='d-flex h-100 align-items-center justify-content-between b2b-black-bg b2b-achievements-wrap'>
                    <div><img src={yrInIndustury.src} /></div>
                    <div className='ml-2'>
                      <h2 className='text-white text-center'><CountUp end={10} />+</h2>
                      <p className='text-white text-center'>Years of IT Industury</p>
                    </div>
                </div>
              </div>

              <div className="count-col">
                <div className='d-flex h-100 align-items-center justify-content-between b2b-black-bg b2b-achievements-wrap'>
                    <div><img src={projects.src} /></div>
                    <div className='ml-2'>
                      <h2 className='text-white text-center'><CountUp end={500} />+</h2>
                      <p className='text-white text-center'>Successfull Project</p>
                    </div>
                </div>
              </div>

              <div className="count-col">
                <div className='d-flex h-100 align-items-center justify-content-between b2b-black-bg b2b-achievements-wrap'>
                    <div><img src={rating.src} /></div>
                    <div className='ml-2'>
                      <h2 className='text-white text-center'><CountUp end={4.9} />+</h2>
                      <p className='text-white text-center'>Ratings on Clutch</p>
                    </div>
                </div>
              </div>

              <div className="count-col">
                <div className='d-flex h-100 align-items-center justify-content-between b2b-black-bg b2b-achievements-wrap'>
                    <div><img src={happyClient.src} /></div>
                    <div className='ml-2'>
                      <h2 className='text-white text-center'><CountUp end={100} />+</h2>
                      <p className='text-white text-center'>Happy Client</p>
                    </div>
                </div>
              </div>

              <div className="count-col">
                <div className='d-flex h-100 align-items-center justify-content-between b2b-black-bg b2b-achievements-wrap'>
                    <div><img src={design.src} /></div>
                    <div className='ml-2'>
                      <h2 className='text-white text-center'><CountUp end={100} />+</h2>
                      <p className='text-white text-center'>Website Designed</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}