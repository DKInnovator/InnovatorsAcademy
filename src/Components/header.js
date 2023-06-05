import React from 'react'
import { Link } from 'react-router-dom';
import "./header.css";
const Header = () => {
  return (
    <>
    {/*  <nav className="navbar navbar-expand-sm   navbar-light bg-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
            <Link to="/" className="nav-link">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item dropdown dmenu">
            <Link to="#" className="nav-link dropdown-toggle"  id="navbardrop" data-toggle="dropdown">Courses </Link>
            <div className="dropdown-menu sm-menu">
              <Link to="#" className="dropdown-item" >IOT(Internet Of Things)</Link>
              <Link to="#" className="dropdown-item" >Embeded System</Link>
              <Link to="#" className="dropdown-item" >PCB Designs</Link>
              <Link to="#" className="dropdown-item" >IOT Web Development</Link>
              <Link to="#" className="dropdown-item" >IOT Mobile Development </Link>
              <Link to="#" className="dropdown-item" >Electric Vehicle</Link>
             
            </div>
          </li>
            <li className="nav-item">
            <Link to="/Career" className="nav-link">Career </Link>
            </li>
            
          <li className="nav-item">
          <Link to="/Aboutus" className="nav-link"> About Us </Link>
          </li>
          <li className="nav-item">
          <Link to="/Contactus" className="nav-link"> Contact Us</Link>
          </li>
          </ul>
          <div className="social-part">
          <Link to="/Aboutus" > <i className="fa-brands fa-facebook fa-lg" style={{paddingRight:"20px"}}></i> </Link>
          <Link to="/Aboutus" >  <i className="fa-brands fa-square-instagram fa-lg" style={{color: "#c81e81",paddingRight:"20px" }}></i> </Link>
          <Link to="/Aboutus">  <i className="fa-brands fa-youtube fa-lg" style={{color: "#d92020",paddingRight:"20px" }}></i> </Link>
     
          </div>
        </div>
      </nav>  */}
  
 
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
  <Link to="#" className="navbar-brand"  >Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link to="/" className="nav-link active" aria-current="page" >Home</Link>
        </li>
        <li className="nav-item dropdown">
        <Link to="/" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" >Courses</Link>
           <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
        <li>  <Link to="#" className="dropdown-item" >IOT(Internet Of Things)</Link></li> 
          <li>  <Link to="#" className="dropdown-item" >Embeded System</Link></li>
            <li> <Link to="#" className="dropdown-item" >PCB Designs</Link></li> 
           <li>   <Link to="#" className="dropdown-item" >IOT Web Development</Link></li>
              <li><Link to="#" className="dropdown-item" >IOT Mobile Development </Link></li>
             <li> <Link to="#" className="dropdown-item" >Electric Vehicle</Link></li>
             <li className="nav-item dropend">
        <Link to="/" className="nav-link dropdown-toggle" id="navbarDropdownagain" role="button" data-bs-toggle="dropdown" aria-expanded="false" >Basic Computer Skills</Link>
           <ul className="dropdown-menu" aria-labelledby="navbarDropdownagain">
        <li>  <Link to="#" className="dropdown-item" >MS Excel</Link></li> 
          <li>  <Link to="#" className="dropdown-item" >MS Word</Link></li>
            <li> <Link to="#" className="dropdown-item" >MS Powerpoint</Link></li> 
          </ul>
        </li>
           
          </ul>
        </li>
        <li className="nav-item">
        <Link to="/Career" className="nav-link">Career </Link>
        </li>
        <li className="nav-item">
        <Link to="/Aboutus" className="nav-link"> About Us </Link>
        </li>
        <li className="nav-item">
        <Link to="/Contactus" className="nav-link"> Contact Us</Link>
        </li>
      </ul>
      <div className="social-part">
          <Link to="/Aboutus" > <i className="fa-brands fa-facebook fa-lg" style={{paddingRight:"20px"}}></i> </Link>
          <Link to="/Aboutus" >  <i className="fa-brands fa-square-instagram fa-lg" style={{color: "#c81e81",paddingRight:"20px" }}></i> </Link>
          <Link to="/Aboutus">  <i className="fa-brands fa-youtube fa-lg" style={{color: "#d92020",paddingRight:"20px" }}></i> </Link>
     
          </div>
    </div>
  </div>
</nav> 
   
    </>
  )
}

export default Header;