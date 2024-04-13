import React, { Component } from 'react';

class Projects extends Component{
    render(){
        return(
            <div className='practice-coding-section'>
                <h1>Practice Coding & Ace Hiring Assessments</h1>
                <p>Level up your coding skills by practicing the hiring assessments of your dream companies & ace your placement game!</p>
                <div className='card-items'>
                    <div className='card1 cardcolor1'>
                        <div>
                        <div className='cardimggiv1'>
                            <div></div>
                        </div>
                        <h1>Coding Practice</h1>
                        <p>Level up your coding skills by practicing the hiring Questions.</p>
                        <p>400+ Questions</p>
                        <button className='btn btn-primary'>StartNow</button>
                        </div>
                        <div className='img-div'>
                        <img src={require("../../images/phn1.webp")}/>
                        </div>
                      
                    </div>
                    <div className='card1 cardcolor2'>
                        <div>
                        <div className='cardimggiv2'>
                            <div></div>
                        </div>
                        <h1>Coding Practice</h1>
                        <p>Level up your coding skills by practicing the hiring Questions.</p>
                        <p>400+ Questions</p>
                        <button  className='btn btn-primary'>StartNow</button>
                        </div>
                        <div className='img-div'>
                        <img src={require("../../images/ph2.webp")}/>
                        </div>
                      
                    </div>
                    <div className='card1 cardcolor3'>
                        <div>
                        <div className='cardimggiv3'>
                            <div></div>
                        </div>
                        <h1>Coding Practice</h1>
                        <p>Level up your coding skills by practicing the hiring Questions.</p>
                        <p>400+ Questions</p>
                        <button  className='btn btn-primary'>StartNow</button>
                        </div>
                        <div className='img-div'>
                        <img src={require("../../images/ph3.webp")}/>
                        </div>
                      
                    </div>
                    <div className='card1 cardcolor4'>
                        <div>
                        <div className='cardimggiv4'>
                            <div></div>
                        </div>
                        <h1>Coding Practice</h1>
                        <p>Level up your coding skills by practicing the hiring Questions.</p>
                        <p>400+ Questions</p>
                        <button  className='btn btn-primary'>StartNow</button>
                        </div>
                        <div className='img-div'>
                        <img src={require("../../images/ph4.webp")}/>
                        </div>
                      
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects