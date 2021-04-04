import React from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import LandingHeader from "./header";
import "./landing.css";
import whitesphere from "../../assets/white-sphere.png";
import spiral from "../../assets/spiral.png";
import violet from "../../assets/violet-ball.png";
import dots from "../../assets/dots.png";
import desktop from "../../assets/desktop.png";
import Footer from "./footer";

const Landing = () => {
  return (
    <div className="landing-page">
      <LandingHeader />
      <div className="home-banner">
        <section id="intro" className="section">
          <div className="background-scene">
            <ul>
              <li className="layer layer-1">
                <div className="layer-group">
                  <span className="gradient-circle"></span>
                  <img src={whitesphere} alt="" className="sphere" />
                </div>
              </li>
              <li className="layer layer-2">
                <div className="layer-group">
                  <span className="gradient-circle"></span>
                  <img src={whitesphere} alt="" className="sphere" />
                </div>
              </li>
              <li className="layer layer-3">
                <div className="layer-group">
                  <img src={spiral} alt="" className="spiral" />
                </div>
              </li>
              <li className="layer layer-4">
                <div className="layer-group">
                  <img src={spiral} alt="" className="spiral" />
                </div>
              </li>
              <li className="layer layer-5">
                <div className="container">
                  <div className="intro-content">
                    <div className="heading  fadeInDown">
                      <h3>Advanced Developers Plateform</h3>
                      <h1>Social Network</h1>
                      <p>
                        Behold!! the most beautiful and advanced social network
                        WordPress theme is here. You're minutes away from
                        deploying your own social network.
                        <span className="color-primary">
                          No coding skill is required.
                        </span>
                      </p>
                    </div>
                    <div className="graphics  slideInUp">
                      <span className="dots">
                        <img src={dots} alt="" className="dot" />
                      </span>
                      <span className="desktop">
                        <img src={desktop} alt="" className="macbook" />
                      </span>
                      <span className="sphere">
                        <img src={violet} alt="" className="ball" />
                      </span>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section id="features" className="features">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mr-auto ml-auto">
                <div className="section-heading">
                  <h2 className="title">Features</h2>
                  <p className="description">
                    Beehive theme is packed with so many amazing beginner
                    friendly features. Here are just some of them that you are
                    gonna love.
                  </p>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-10 mr-auto ml-auto">
                <div className="features-list row">
                  <div className="col-lg-4">
                    <div className="feature-item login  zoomIn animated">
                      <span className="item-icon">
                        <i className="uil-sign-in-alt"></i>
                      </span>
                      <div className="item-info">
                        <h5 className="item-title">Ajax Login</h5>
                        <p className="description">
                          Log your users into the site without redirecting them
                          to the WordPress login page.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="feature-item search  zoomIn animated">
                      <span className="item-icon">
                        <i className="uil-search"></i>
                      </span>
                      <div className="item-info">
                        <h5 className="item-title">Ajax Search</h5>
                        <p className="description">
                          It will enable your users to search contents on the
                          fly, without reloading the page.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="feature-item sidebars  zoomIn animated">
                      <span className="item-icon">
                        <i className="uil-window-grid"></i>
                      </span>
                      <div className="item-info">
                        <h5 className="item-title">Unlimited Sidebars</h5>
                        <p className="description">
                          Beehive theme lets you generate sidebars at your will,
                          as many as you want.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="feature-item colors  zoomIn animated">
                      <span className="item-icon">
                        <i className="uil-pen"></i>
                      </span>
                      <div className="item-info">
                        <h5 className="item-title">Unlimited Colors</h5>
                        <p className="description">
                          Choose your own colors from the theme option panel
                          with the custom color picker.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="feature-item options  zoomIn animated">
                      <span className="item-icon">
                        <i className="uil-sliders-v"></i>
                      </span>
                      <div className="item-info">
                        <h5 className="item-title">Powerful Options</h5>
                        <p className="description">
                          The powerful beehive theme options enables you to
                          customize the whole site.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="feature-item one-click  zoomIn animated">
                      <span className="item-icon">
                        <i className="uil-mouse-alt"></i>
                      </span>
                      <div className="item-info">
                        <h5 className="item-title">One click import</h5>
                        <p className="description">
                          Save time and import demo in a single click and then
                          start customizing the theme.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="feature-item builder  zoomIn animated">
                      <span className="item-icon">
                        <i className="uil-grids"></i>
                      </span>
                      <div className="item-info">
                        <h5 className="item-title">Page Builder</h5>
                        <p className="description">
                          Built with elementor, the industry leading page
                          builder on the market.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="feature-item fonts  zoomIn animated">
                      <span className="item-icon">
                        <i className="uil-google"></i>
                      </span>
                      <div className="item-info">
                        <h5 className="item-title">Google Fonts</h5>
                        <p className="description">
                          The large Google Fonts library will help you use any
                          font among 800+ available.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="feature-item responsive  zoomIn animated">
                      <span className="item-icon">
                        <i className="uil-mobile-android"></i>
                      </span>
                      <div className="item-info">
                        <h5 className="item-title">Responsive Design</h5>
                        <p className="description">
                          The app like interface on mobile devices will surely
                          make you happy.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="contact-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
                <div className="contact-text">
              <h6>Send a Request</h6>
              <h1>Contact us for more info about our <span>excellent</span> community.</h1>
              <p>
                Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
                sem. Nulla consequat massa quis enim.
              </p>
            </div>
            </div>
            <div className="col-md-6">
              <div className="contact-form glass-css">
                <Form>
                  <div className="row">
                    <div className="col-md-6">
                      <Form.Group controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" />
                      </Form.Group>
                    </div>
                    <div className="col-md-6">
                      <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter Email" />
                      </Form.Group>
                    </div>
                    <div className="col-md-6">
                      <Form.Group controlId="formBasicEmail">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control type="text" placeholder="Phone" />
                      </Form.Group>
                    </div>
                    <div className="col-md-6">
                      <Form.Group controlId="exampleForm.ControlSelect2">
                        <Form.Label>Country</Form.Label>
                        <Form.Control as="select">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </Form.Control>
                      </Form.Group>
                    </div>
                  </div>

                  <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={5} />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
export default Landing;
