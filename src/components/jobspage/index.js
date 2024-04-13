

import React, { Component } from 'react';

import "./index.css"; 

 class JobPage extends Component{

    render(){
        return(
            
    <div className='container-job'>
       
        <div className='start-container'>
          <div className='text-content'>
          <h1 className='heading-content'><span>Unlock</span>
          Ambition</h1>
          <p className='content-para'>Apply to a plethora of hiring opportunities & work with your dream companies!</p>
          <button className='content-button'>
            <img src={require("../images/image.png")} className='daimond-img'/>
            <span>Just Went Unstoped pro</span>
          </button>
            </div>  
          <div className='img-content'>
            <img src={require("../images/jobstop.webp")}/>
            </div>  
        </div>
       </div>
    
        )
    }
 }
 export default JobPage