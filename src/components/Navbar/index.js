import { Component } from "react";
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import "./index.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faRightToBracket , faBullhorn, faBars  ,faLightbulb, faBullseye, faShoppingBag, faBook, faChartBar, faTimes, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
class NavCom extends Component{

    state={hamicon:false,show:false}

    handleHam=()=>{
      this.setState(prevState=>({hamicon:!prevState.hamicon}))
    }
    handleshow=()=>{
        this.setState({show:!this.state.show})
    }


    render(){
        const {hamicon}=this.state
        return(
            <div>
        <nav className="nav-bar">
        <ul>
        <li>
        <img src={require("../images/unstop-logo.png")} alt="logo" className="img-logo"/>
       </li>
       <li className="search-input">
       <FontAwesomeIcon icon={faSearch} />
       <input type="search" placeholder="Search Opportunities" className="hide-elem"/>
       </li>
        </ul>
        <ul>
       <ul className="list-types hide-elem">
       <li>
        <Link to="/learn" className="text-decoration-none">
          <FontAwesomeIcon icon={faBook} />
           <br/>Learn
       </Link>
       </li>
       <li>
        <Link to="/practice" className="text-decoration-none">
       <FontAwesomeIcon icon={faBullseye} />
       <br/>Practice
       </Link>
       </li>
       <li>
       <Link to="/mentorship" className="text-decoration-none">
       <FontAwesomeIcon icon={faLightbulb} />
       <br/>Mentorship
       </Link>
       </li>
       <li>
       <Link to="/compete" className="text-decoration-none">
       <FontAwesomeIcon icon={faChartBar} />
       <br/>Compete
       </Link>
       </li>
       <li>
       <Link to="/jobs" className="text-decoration-none">
       <FontAwesomeIcon icon={faShoppingBag} />
       <br/>Jobs
       </Link>
       </li>
      
       </ul>
       <li>
       <button className="btn border bttn-inside  bttn-btn hide-elem"><FontAwesomeIcon className="mr-3" icon={ faBullhorn}/>
       <span>Host</span> 
       </button>
       </li>
       <li>
       <button className="btn btn-warning bttn-btn">For Business
      </button>
       </li>
       <li className="bttn-inside">
       <button className="btn btn-primary bttn-btn">
       <FontAwesomeIcon className="mr-3" icon={ faRightToBracket}/>
       <span>login</span></button>
       </li>
       <li onClick={this.handleHam}>
       <FontAwesomeIcon className="p-2" icon={ faBars}/>
       </li>
     </ul>
        </nav>
        {hamicon?  <div className="side-bar">
            <div className="top-menu">
            <h1>Menu</h1>
           <span onClick={this.handleHam}> <FontAwesomeIcon icon={faTimes} /></span>
            
            </div>
            <hr/>
            <button className="btn btn-primary bttn-event">Host Event</button>
            <div className="side-menu"> <p className="para-item">For Employes</p>
                <p className="para-item">
                  Our solutions
                   <span onClick={this.handleshow}> <FontAwesomeIcon icon={faChevronDown} /></span>
                   {this.state.show?
                   <ul className="list-unstyled">
                    <li>Hiring</li>
                    <li>Engagement</li>
                    <li>Assessment</li>
                   </ul>:""}
                </p></div> 

        </div>:""}

        <div className="bottom-card">
            <img src={require("../images/unstop-logo.png")}  className="img-logo"/>
           
       <div>
        
       <Link to="/learn" className="text-decoration-none">
          <FontAwesomeIcon icon={faBook} />
           <br/>Learn
       </Link>
       </div>
       <div>
       <Link to="/practice" className="text-decoration-none">
       <FontAwesomeIcon icon={faBullseye} />
       <br/>Practice
       </Link>
       </div>
       <div>
       <Link to="/mentorship" className="text-decoration-none">
       <FontAwesomeIcon icon={faLightbulb} />
       <br/>Mentorship
       </Link>
       </div>
       <div>
       <Link to="/compete" className="text-decoration-none">
       <FontAwesomeIcon icon={faChartBar} />
       <br/>Compete
       </Link>
       </div>
       <div>
       <Link to="/jobs" className="text-decoration-none">
       <FontAwesomeIcon icon={faShoppingBag} />
       <br/>Jobs
      </Link></div>
      
        </div>
       
    </div>
           
          
        )
    }
}

export default NavCom