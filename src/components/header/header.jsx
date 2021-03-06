import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom'
import { Nav, Navbar, Form, FormControl, Dropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import logo from '../../assets/logo-white.png'
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
import { getUserProfile } from "../../actions/userAction";

const Header = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    const userId = localStorage.getItem('userId');
    if (userId) {
      dispatch(getUserProfile(userId))
    }
  }, [dispatch])
  const userDetails = useSelector(state => state.userDetail);
  const { profileInfo } = userDetails;

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    window.location.href= '/'
  }
  return (
    <div className="header">
      <Navbar bg="light" expand="lg">
        <div className="container-fluid">
          <Navbar.Brand href="/dashboard">
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
              <Nav.Link href="/dashboard">
             <span><img src={home} alt="home" /> </span>
                  Home
                  </Nav.Link>
              <Nav.Link href="#link">
              <span><img src={company} alt="home" /> </span>
                  Companies</Nav.Link>
              <Nav.Link href="#link"><span><img src={project} alt="home" /> </span>Projects</Nav.Link>
              <Link className="nav-link" to="/topProfile"><span><img src={profile} alt="home" /> </span>Top Profiles</Link>
              <Link className="nav-link" to="/jobs"><span><img src={jobs} alt="home" /> </span>Jobs</Link>
              <Nav.Link href="#link"><span><img src={message} alt="home" /> </span>Messages</Nav.Link>
              <Nav.Link href="#link"><span><img src={notification} alt="home" /> </span>Notification</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <div className="my-profile-menu">
              <div className="p-pic">
              <img src={ profileInfo && profileInfo.photo !== 'user/default.png'
         ? 'http://localhost:8080/'+profileInfo.photo :  user} alt="user" />
              </div>
              <div className="p-name">
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-profile">
                   {profileInfo && profileInfo.username}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Link className="dropdown-item" to='/profile'>My Account</Link>
                    <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
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
