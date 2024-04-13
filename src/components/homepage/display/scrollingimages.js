

import React, { Component } from 'react';
// Import your custom CSS file if needed




 class ScrollingImages extends Component{

    render(){
        const {listimages}=this.props
        return(
                <div className='list-indus hide-elem'>
                    <h1 className='list-head'>Industry Veterans <br/> Trust Us</h1>
                    <div className='slider'>
                  <div className='slide-tracker'>
                    {listimages.map(each=>(
                         <div className="slide-image">
                         <img src={each} /></div>
                    ))}
                    </div>
                    </div>
                </div>

              
    
        )
    }
 }
 export default ScrollingImages