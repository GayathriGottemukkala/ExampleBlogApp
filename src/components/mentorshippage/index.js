import React, { Component } from 'react';

import "./index.css"; 

 class Mentorship extends Component{

    render(){
        return(
            
    <div className='container-practice'>
       
        <div className='start-container'>
          <div className='text-content'>
          <h1 className='heading-content'><span>Unlock</span>
          Guidance</h1>
          <p className='content-para'>Book a session with unstoppable mentors across domains & work together to build your career!</p>
          <button className='content-button'>
            <img src={require("../images/image.png")} className='daimond-img'/>
            <span>Just Went Unstoped pro</span>
          </button>
            </div>  
          <div className='img-content'>
            <img src={require("../images/mentortop.webp")}/>
            </div>  
        </div>
       </div>
  
        )
    }
 }
 export default Mentorship