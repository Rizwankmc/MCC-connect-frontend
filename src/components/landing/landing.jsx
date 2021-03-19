
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import LandingHeader from './header';
import aboutimg from '../../assets/about-1.jpg'
import './landing.css';

const Landing = () => {
    return(
        <div className="landing-page">
       <div className="glass-css">
        <LandingHeader />
        <div className="landing-banner">
            <div className="landing-content">
                <h6>Website Design, Brand Strategy, Digital Marketing with Stunning Results</h6>
                <div className="banner-btn">
                    <Button type="submit" className=" about-btn fancy-btn " >About Us</Button>
                    <Button type="submit" className="btn fancy-outline get-quote" >Get a Quote</Button>
                </div>
            </div>
        </div>
       <div className="about-area">
           <div className="container-fluid">
               <div className="row">
                   <div className="col-md-6">
                   <div class="about-us-text">
                    <h2>We Are A Creative Digital Agency Focused on Growing Brands Online</h2>
                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderi.</p>
                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia dese mollit anim id est laborum. Sed ut perspiciatis unde omnis iste.</p>
                    <Link to="/" class="btn fancy-outline fancy-dark">Read More</Link>
                    </div>
                   </div> 
                   <div className="col-12 col-lg-6 col-xl-5 ml-xl-auto">
                       <div className="about-img">
                           <img src={aboutimg} alt="about" />
                       </div>
                   </div>    
               </div>
           </div>
       </div>
        </div>
        </div>
    )

}
export default Landing;
