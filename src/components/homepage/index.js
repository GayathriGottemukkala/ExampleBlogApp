

import React, { Component } from 'react';

import "./index.css"; // Import your custom CSS file if needed
import image1 from "../images/aditya.webp"
import image2 from "../images/amazon.webp" 
import image4 from "../images/wipro.png" 
import image3 from "../images/loreal.webp" 
import image5 from "../images/walmart.webp" 
import image6 from "../images/asianpaints.webp" 
import MyCarousel from './display/banners';
import ScrollingImages from './display/scrollingimages';
import Oppertunities from './display/oppertunitiesSection';
import LearupPrepare from './display/learnupsection';
import Projects from './display/projectssection';
const listImages=[image1,image2,image3, image4, image5, image6, image1,image2,image3, image4, image5, image6]



 class Home extends Component{

    render(){
        return(
            <div>
                <div className='home-start-container'>
       <div className='content-start hide-elem'>
     <h1 className='heading-content'><span>Unlock</span>
     Your Career</h1>
     <p className='content-para'>Explore opportunities from across the globe to learn, showcase skills, gain CV points & get hired by your dream company.</p>
     <button className='content-button'>
        <img src={require("../images/image.png")} className='daimond-img'/>
        <span>Just Went Unstoped pro</span>
     </button>
       </div>
       <div className='display-text'>
        <h1>Connecting <span>Talent, Colleges, Recruiters</span></h1>
       </div>
       <div className='img-start'>
           <div className='img-card1'>
        <div className='img-card img-c1'>
        <ul className='img-card-item list-unstyled'>
            <li><h6>Learn</h6></li>
            <li>Expand</li><li>Knowledge Base
            </li>
        </ul>
        <img src={require("../images/codelogo.webp")} className='image-icons'/>
     </div>
     <div className='img-card img-c2'>
        <ul className='img-card-item list-unstyled'>
            <li><h6>Practice</h6></li>
            <li>Refine</li><li>Skills Daily Base
            </li>
        </ul>
        <img src={require("../images/lapi..webp")} className='image-icons'/>
     </div>
     <div className='img-card img-c3'>
        <ul className='img-card-item list-unstyled'>
            <li><h6>Mentorship</h6></li>
            <li>Guidance</li><li>From Top Mentors
            </li>
        </ul>
        <img src={require("../images/mentor.webp")} className='image-icons'/>
     </div>
    
        </div>
      <div className='img-card1'>
        
     <div className='img-card21 img-card20'>
        <ul className='img-card-item list-unstyled'>
            <li><h6>Jobs</h6></li>
            <li>Explore</li><li>Diverse Career
            </li>
        </ul>
        <img src={require("../images/girl.webp")} className='image-icons img-22'/>
     </div>
     <div className='img-card22 img-card20'>
        <ul className='img-card-item list-unstyled'>
            <li><h6>Compete</h6></li>
            <li>Battle</li><li>For Excellence
            </li>
        </ul>
        <img src={require("../images/winner.webp")} className='image-icons img-22'/>
     </div>
           </div>
        </div>
                 </div>
                <ScrollingImages listimages={listImages}/>

                <MyCarousel/>
                <Oppertunities/>
                <LearupPrepare/>
                <Projects/>
            </div>
    
        )
    }
 }
 export default Home