import React, { Component } from 'react';

import "./index.css";

 class PracticePage extends Component{

    render(){
        return(
            
    <div className='container-practice'>
        <div className='container-learn'>
        <div className='start-container'>
          <div className='text-content'>
          <h1 className='heading-content'><span>Unlock</span>
          Perfection</h1>
          <p className='content-para'>Solve easy to complex problems & get hands-on experience to
get hired by your dream company!</p>
          <button className='content-button'>
            <img src={require("../images/image.png")} className='daimond-img'/>
            <span>Just Went Unstoped pro</span>
          </button>
            </div>  
          <div className='img-content'>
            <img src={require("../images/practicetop.webp")}/>
            </div>  
        </div>
       </div>
    </div>
        )
    }
 }
 export default PracticePage