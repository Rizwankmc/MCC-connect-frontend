import React from "react-bootstrap";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const LandingHeader = () => {
  return (
    <div className="landing-header fixed-top">
      <Navbar bg="light" expand="lg">
        <div className="container-fluid">
          <Navbar.Brand href="#home">SocialApp</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="middle">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#home">Blog</Nav.Link>
              <Nav.Link href="#home">Features</Nav.Link>
              <Nav.Link href="#home">Faq</Nav.Link>
              <Nav.Link href="#home">ContactUs</Nav.Link>
            </Nav>
            
          </Navbar.Collapse>

          <div className="login-area">
            <Nav className="mr-auto">
              <Link to="/login" className="fancy-btn btn btn-primary">Login</Link>
             
            </Nav> 
            </div>
        </div>
      </Navbar>
    </div>
  );
};
export default LandingHeader;
