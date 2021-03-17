import React from "react";
// import { Link } from "react-router-dom";
import { Button, Dropdown } from "react-bootstrap";
import user from "../../assets/user.jpg";

const Post = () => {
  return (
    <>
      <div className="post-area glass-css">
        <div className="user-img">
          <img src={user} alt="userimg" />
          <input type="text" placeholder="Write your Post here...." />
        </div>
        <div className="post-button">
          <Button variant="primary" type="submit">
            Post here
          </Button>
        </div>
      </div>
      <div className="show-post">
        <div className="show-post-area glass-css">
          <div className="post-user">
            <div className="post-user-area">
              <img src={user} alt="userpic" />
              <div className="username">
                <h6>John Doe</h6>
                <p>
                  <i class="far fa-clock"></i> 3 min ago
                </p>
              </div>
            </div>
            <div className="edit-post">
              <div className="p-name">
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-profile">
                    <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item>My Account</Dropdown.Item>
                    <Dropdown.Item>Logout</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </div>
          <div className="about-user">
            <div className="left-about">
              <h6>
                <i class="fad fa-th"></i> Epic Coder
              </h6>
              <h6>
                <i class="fas fa-location"></i> India, Lucknow
              </h6>
            </div>
            <div className="right-about">
              <i class="fas fa-comments-alt"></i>
              <i class="far fa-share-alt"></i>
            </div>
          </div>
          <div className="user-info">
            <h6>Senio Wordpress Developer</h6>
            <div className="full-time">
              <Button variant="primary" className="full-btn" type="submit">
                Full Time
              </Button>
              <span>45$ /h</span>
            </div>
            <div className="user-description">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                luctus hendrerit metus, ut ullamcorper quam finibus at. Etiam id
                magna sit amet...
              </p>
              <h5>View More <i class="fal fa-angle-right"></i></h5>
            </div>
         <div className="comment-area">
             <div className="like-comment">
             <div className="like">
             <i class="fal fa-heart"></i> Like
            </div>
            <div className="comment">
            <i class="far fa-comment"></i> 15
             </div>
             </div>
             <div className="views">
             <i class="fas fa-eye"></i> Views 50
             </div>

         </div>
          </div>
        </div>
      
      </div>
      <div className="show-post ">
        <div className="show-post-area glass-css">
          <div className="post-user">
            <div className="post-user-area">
              <img src={user} alt="userpic" />
              <div className="username">
                <h6>John Doe</h6>
                <p>
                  <i class="far fa-clock"></i> 3 min ago
                </p>
              </div>
            </div>
            <div className="edit-post">
              <div className="p-name">
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-profile">
                    <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item>My Account</Dropdown.Item>
                    <Dropdown.Item>Logout</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </div>
          <div className="about-user">
            <div className="left-about">
              <h6>
                <i class="fad fa-th"></i> Epic Coder
              </h6>
              <h6>
                <i class="fas fa-location"></i> India, Lucknow
              </h6>
            </div>
            <div className="right-about">
              <i class="fas fa-comments-alt"></i>
              <i class="far fa-share-alt"></i>
            </div>
          </div>
          <div className="user-info">
            <h6>Senio Wordpress Developer</h6>
            <div className="full-time">
              <Button variant="primary" className="full-btn" type="submit">
                Full Time
              </Button>
              <span>45$ /h</span>
            </div>
            <div className="user-description">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                luctus hendrerit metus, ut ullamcorper quam finibus at. Etiam id
                magna sit amet...
              </p>
              <h5>View More <i class="fal fa-angle-right"></i></h5>
            </div>
         <div className="comment-area">
             <div className="like-comment">
             <div className="like">
             <i class="fal fa-heart"></i> Like
            </div>
            <div className="comment">
            <i class="far fa-comment"></i> 15
             </div>
             </div>
             <div className="views">
             <i class="fas fa-eye"></i> Views 50
             </div>

         </div>
          </div>
        </div>
      
      </div>
    </>
  );
};
export default Post;
