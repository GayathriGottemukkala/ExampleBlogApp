

import React, { Component } from 'react';
import {useNavigate} from "react-router-dom"
import "./index.css"; // Import your custom CSS file if needed

 const LearnPage=(props)=>{

 
   
    const r=useNavigate()

    const handlenavi=()=>{
      console.log(r)
      r("/")
    }
  
        return(
            
    <div className='container-learn'>
        <div className='start-container'>
          <div className='text-content'>
          <h1 className='heading-content'><span>Unlock</span>
           Knowledge</h1>
          <p className='content-para'>From tech to non-tech, select from a wide range of courses to upskill and advance your career!</p>
          <button className='content-button' onClick={handlenavi}>
            <img src={require("../images/image.png")} className='daimond-img'/>
            <span>Just Went Unstoped pro</span>
          </button>
            </div>  
          <div className='img-content'>
            <img src={require("../images/learntop.webp")}/>
            </div>  
        </div>
    </div>
        )
    }
 
 export default LearnPage