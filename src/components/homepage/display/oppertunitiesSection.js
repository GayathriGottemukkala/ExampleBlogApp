import React, { Component } from 'react';
import { Carousel, Card, Button } from 'react-bootstrap';


class Oppertunities extends Component{
    render(){
        return(
            <Carousel>
                <Carousel.Item>
                <div className='Opper-card'>
              <Card>
            <Card.Img variant="top" src={require("../../images/opp1.webp")} alt="First card" />
            <Card.Body>
              <Card.Title>First Card1</Card.Title>
              <Card.Text>
                This is a sample card for the carousel.
              </Card.Text>
              <Button variant="primary">Learn More</Button>
            </Card.Body>
             </Card>
             <Card>
            <Card.Img variant="top" src={require("../../images/opp2.webp")} alt="First card" />
            <Card.Body>
              <Card.Title>First Card1</Card.Title>
              <Card.Text>
                This is a sample card for the carousel.
              </Card.Text>
              <Button variant="primary">Learn More</Button>
            </Card.Body>
             </Card>
             {/* <Card>
            <Card.Img variant="top" src={require("../../images/opp3.webp")} alt="First card" />
            <Card.Body>
              <Card.Title>First Card1</Card.Title>
              <Card.Text>
                This is a sample card for the carousel.
              </Card.Text>
              <Button variant="primary">Learn More</Button>
            </Card.Body>
             </Card> */}
               </div>  
                </Carousel.Item>
                <Carousel.Item>
                <div className='Opper-card'>
              <Card>
            <Card.Img variant="top" src={require("../../images/opp4.webp")} alt="First card" />
            <Card.Body>
              <Card.Title>First Card1</Card.Title>
              <Card.Text>
                This is a sample card for the carousel.
              </Card.Text>
              <Button variant="primary">Learn More</Button>
            </Card.Body>
             </Card>
             <Card>
            <Card.Img variant="top" src={require("../../images/opp5.webp")} alt="First card" />
            <Card.Body>
              <Card.Title>First Card1</Card.Title>
              <Card.Text>
                This is a sample card for the carousel.
              </Card.Text>
              <Button variant="primary">Learn More</Button>
            </Card.Body>
             </Card>
           
               </div>  
                </Carousel.Item>
            </Carousel>
          
         

  
        )
    }
}
export default Oppertunities