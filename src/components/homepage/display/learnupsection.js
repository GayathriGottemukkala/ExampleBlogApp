import React from 'react';


const LearupPrepare = () => {
  return (
    <div className='learnup-container'>
         <div className='overlay'>
      <div className="background-image1">
       
        <img src={require("../../images/prepareboy.webp")}/>
        </div>
       
      </div>
     
     
   
    <div className='content-card'>
        <h1>Learn &
            <br/>
            <span>Level Up Your Skills</span>
        </h1>
        <p>Select from a wide range of courses to upskill and advance your career!</p>
        <ul>
            <li>
                50+ courses
            </li>
            <li>
                certificate
            </li>
            <li>
                 Projects & Assignments
            </li>
        </ul>
        <button className='btn btn-primary'>Explore More</button>
    </div>
    </div>
    
  );
}

export default LearupPrepare;