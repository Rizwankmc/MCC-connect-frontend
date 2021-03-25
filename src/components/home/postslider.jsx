import React from 'react'
import {Link} from 'react-router-dom'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {Button} from 'react-bootstrap';
import user from '../../assets/user.jpg'


const PostSlider = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return(
        <div className="post-slider">
        <Carousel responsive={responsive} showDots>
        <div className="top-profile-section">
            <div className="post-image">
                <img src={user} alt="userimag" />
                <h6>John Doe</h6>
                <p>Graphic Designer</p>
                <div className="slider-btn">
                    <Button type="submit" className="follow-btn">Follow</Button>
                    <Button type="submit"  className="msg-btn"><i class="fa fa-comments-o" aria-hidden="true"></i></Button>
                    <Button type="submit"  className="hire-btn">Hire</Button>
                </div>
            </div>
            <div className="view-profile">
                <Link to="/">View Profile</Link>
            </div>
        </div>
        <div className="top-profile-section">
            <div className="post-image">
                <img src={user} alt="userimag" />
                <h6>John Doe</h6>
                <p>Graphic Designer</p>
                <div className="slider-btn">
                    <Button type="submit" className="follow-btn">Follow</Button>
                    <Button type="submit"  className="msg-btn"><i class="fa fa-comments-o" aria-hidden="true"></i></Button>
                    <Button type="submit"  className="hire-btn">Hire</Button>
                </div>
            </div>
            <div className="view-profile">
                <Link to="/">View Profile</Link>
            </div>
        </div>
        <div className="top-profile-section">
            <div className="post-image">
                <img src={user} alt="userimag" />
                <h6>John Doe</h6>
                <p>Graphic Designer</p>
                <div className="slider-btn">
                    <Button type="submit" className="follow-btn">Follow</Button>
                    <Button type="submit"  className="msg-btn"><i class="fa fa-comments-o" aria-hidden="true"></i></Button>
                    <Button type="submit"  className="hire-btn">Hire</Button>
                </div>
            </div>
            <div className="view-profile">
                <Link to="/">View Profile</Link>
            </div>
        </div>
        <div className="top-profile-section">
            <div className="post-image">
                <img src={user} alt="userimag" />
                <h6>John Doe</h6>
                <p>Graphic Designer</p>
                <div className="slider-btn">
                    <Button type="submit" className="follow-btn">Follow</Button>
                    <Button type="submit"  className="msg-btn"><i class="fa fa-comments-o" aria-hidden="true"></i></Button>
                    <Button type="submit"  className="hire-btn">Hire</Button>
                </div>
            </div>
            <div className="view-profile">
                <Link to="/">View Profile</Link>
            </div>
        </div>
        <div className="top-profile-section">
            <div className="post-image">
                <img src={user} alt="userimag" />
                <h6>John Doe</h6>
                <p>Graphic Designer</p>
                <div className="slider-btn">
                    <Button type="submit" className="follow-btn">Follow</Button>
                    <Button type="submit"  className="msg-btn"><i class="fa fa-comments-o" aria-hidden="true"></i></Button>
                    <Button type="submit"  className="hire-btn">Hire</Button>
                </div>
            </div>
            <div className="view-profile">
                <Link to="/">View Profile</Link>
            </div>
        </div>
        <div className="top-profile-section">
            <div className="post-image">
                <img src={user} alt="userimag" />
                <h6>John Doe</h6>
                <p>Graphic Designer</p>
                <div className="slider-btn">
                    <Button type="submit" className="follow-btn">Follow</Button>
                    <Button type="submit"  className="msg-btn"><i class="fa fa-comments-o" aria-hidden="true"></i></Button>
                    <Button type="submit"  className="hire-btn">Hire</Button>
                </div>
            </div>
            <div className="view-profile">
                <Link to="/">View Profile</Link>
            </div>
        </div>
        </Carousel>
        </div>
    )
}
export default PostSlider