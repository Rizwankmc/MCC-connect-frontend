import React from "react";
import { Nav, Navbar, Form, FormControl, Dropdown } from "react-bootstrap";
import logo from '../../assets/logo.png'
import home from '../../assets/icon1.png'
import company from '../../assets/icon2.png'
import project from '../../assets/icon3.png'
import profile from '../../assets/icon4.png'
import jobs from '../../assets/icon5.png'
import message from '../../assets/icon6.png'
import notification from '../../assets/icon7.png'
import search from '../../assets/search.png'
import user from '../../assets/user.jpg'
import './header.css';

const Header = () => {
  return (
    <div className="header">
      <Navbar bg="light" expand="lg">
        <div className="container-fluid">
          <Navbar.Brand href="#home">
              <img src= {logo} alt="lgogo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <div className="search-section">
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search...."
                className="mr-sm-2"
              />
              <img src={search} alt="search" />
            </Form>
          </div>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#home">
             <span><img src={home} alt="home" /> </span>
                  Home
                  </Nav.Link>
              <Nav.Link href="#link">
              <span><img src={company} alt="home" /> </span>
                  Companies</Nav.Link>
              <Nav.Link href="#link"><span><img src={project} alt="home" /> </span>Projects</Nav.Link>
              <Nav.Link href="#link"><span><img src={profile} alt="home" /> </span>Profiles</Nav.Link>
              <Nav.Link href="#link"><span><img src={jobs} alt="home" /> </span>Jobs</Nav.Link>
              <Nav.Link href="#link"><span><img src={message} alt="home" /> </span>Messages</Nav.Link>
              <Nav.Link href="#link"><span><img src={notification} alt="home" /> </span>Notification</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <div className="my-profile-menu">
              <div className="p-pic">
                <img src={user} alt="user" />
              </div>
              <div className="p-name">
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-profile">
                    John
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item>My Account</Dropdown.Item>
                    <Dropdown.Item>Logout</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
        </div>
      </Navbar>
    </div>
  );
};
export default Header;
