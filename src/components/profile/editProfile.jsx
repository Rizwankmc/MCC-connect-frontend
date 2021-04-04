import React from "react";
import {Link} from 'react-router-dom'
import user from "../../assets/user.jpg";

const EditProfile = () => {
  return (
    <div className="edit-profile  glass-css">
      <div className="edit-profileimage">
        <img src={user} alt="user" />
        <div className="change-profile">
          <i class="fa fa-camera" aria-hidden="true"></i>
        </div>
        <div className="profile-follow">
          <div className="followers">
            <p>Followers</p>
            <h6>6789</h6>
          </div>
          <div className="followers">
            <p>Following</p>
            <h6>7897</h6>
          </div>
        </div>
        <div className="socail-link">
          <h6>Socail Links</h6>
          <div className="all-link">
           <Link><p><i class="fa fa-globe" aria-hidden="true"></i> www.example.com</p></Link> 
           <Link><p><i class="fa fa-facebook-official" aria-hidden="true"></i> Http://www.facebook.com/joh...</p></Link>
           <Link><p> <i class="fa fa-twitter" aria-hidden="true"></i> www.example.com</p></Link> 
           <Link><p><i class="fa fa-youtube" aria-hidden="true"></i> Http://www.facebook.com/joh...</p></Link>
           <Link><p><i class="fa fa-linkedin-square" aria-hidden="true"></i> www.example.com</p></Link> 
           <Link><p><i class="fa fa-instagram" aria-hidden="true"></i> Http://www.facebook.com/joh...</p></Link>
           <Link><p><i class="fa fa-pinterest" aria-hidden="true"></i> www.example.com</p></Link> 
          </div>
          
        </div>
      </div>
    </div>
  );
};
export default EditProfile;
