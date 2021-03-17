import React from "react";
import user from "../../assets/user.jpg";

const ProfileSection = () => {
  return (
    <div className="profile-section glass-css">
      <div className="">
        <div className="profile-top">
          <div className="setting-area">
            <i class="fa fa-bars" aria-hidden="true"></i>
            <i class="fa fa-cog" aria-hidden="true"></i>
          </div>
        </div>
        <div className="profile-image">
          <img src={user} alt="profileimg" />
        </div>
        <div className="profile-bottom">
          <div className="profile-info">
            <h6>John Doe</h6>
            <p>Node Js Developer at Symo.co</p>
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
         <div className="follow">
             <h6>Follow</h6>
         </div>
        </div>
      </div>
    </div>
  );
};
export default ProfileSection;
