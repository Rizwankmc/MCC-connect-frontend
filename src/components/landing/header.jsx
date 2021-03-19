import React from "react-bootstrap";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const LandingHeader = () => {
  return (
    <div className="landing-header">
      <Navbar bg="light" expand="lg">
        <div className="container-fluid">
          <Navbar.Brand href="#home">SocialApp</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#home">Blog</Nav.Link>
              <Nav.Link href="#home">Faq</Nav.Link>
              <Nav.Link href="#home">ContactUs</Nav.Link>
            </Nav>
            <div className="login-area">
            <Nav className="mr-auto">
              <Link to="/login" className="fancy-btn">Login</Link>
             
            </Nav> 
            </div>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
};
export default LandingHeader;
