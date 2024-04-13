// import React, { Component } from 'react';

// const BannerSection=()=>{

// }
// export default BannerSection
import React from 'react';
import { Carousel } from 'react-bootstrap';

const MyCarousel = () => {
  return (
    
<div className='container-sm'>
<div className="banner-section">

<Carousel>
    <Carousel.Item>
      <img
         className="d-block w-100"
         src={require("../../images/collegeban.webp")}
         alt="First slide"
       />
     </Carousel.Item>
     <Carousel.Item>
       <img
         className="d-block w-100"
         src={require("../../images/fextivalban.webp")}
         alt="First slide"
       />
     </Carousel.Item>
     <Carousel.Item>
       <img
         className="d-block w-100"
         src={require("../../images/homeban.webp")}
         alt="First slide"
       />
     </Carousel.Item>
     <Carousel.Item>
       <img
         className="d-block w-100"
         src={require("../../images/deskban.webp")}
         alt="First slide"
       />
     </Carousel.Item>
    
    </Carousel>
</div>
</div>

  );
};

export default MyCarousel;
