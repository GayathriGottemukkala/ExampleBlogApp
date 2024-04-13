

import React, { Component } from 'react';

import "./index.css"; 

 class CompetePage extends Component{

    render(){
        return(
            
    <div className='container-compete'>
      
        <div className='start-container'>
          <div className='text-content'>
          <h1 className='heading-content'><span>Unlock</span>
          Opportunities</h1>
          <p className='content-para'>Make the most of every opportunity to learn and level up your skills.</p>
          <button className='content-button'>
            <img src={require("../images/image.png")} className='daimond-img'/>
            <span>Just Went Unstoped pro</span>
          </button>
            </div>  
          <div className='img-content'>
            <img src={require("../images/competetop.webp")}/>
            </div>  
        </div>
       </div>
  
        )
    }
 }
 export default CompetePage