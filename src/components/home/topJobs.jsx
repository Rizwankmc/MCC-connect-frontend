import React from 'react'
import user from "../../assets/user.jpg";

const JobList = () => {
    return(
        <div className="friend-list top-jobs-section glass-css">
            <div className="top-heading">
            <h6 className="addfriend">Most Viewed People</h6>
            <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
            </div>
       <div className="friend-list-section">
        <div className="left-friend-list">
         <img src={user} alt="user" />
         <div className="friend-name">
             <h6>John Doe</h6>
             <p>Php Developer</p>
         </div>
        </div>
        <div className="right-friend-list">
        <i class="fas fa-plus"></i>
        </div>
        </div>
        <div className="friend-list-section">
        <div className="left-friend-list">
         <img src={user} alt="user" />
         <div className="friend-name">
             <h6>John Doe</h6>
             <p>Php Developer</p>
         </div>
        </div>
        <div className="right-friend-list">
        <i class="fas fa-plus"></i>
        </div>
        </div>
        <div className="friend-list-section">
        <div className="left-friend-list">
         <img src={user} alt="user" />
         <div className="friend-name">
             <h6>John Doe</h6>
             <p>Php Developer</p>
         </div>
        </div>
        <div className="right-friend-list">
        <i class="fas fa-plus"></i>
        </div>
        </div>
        <div className="friend-list-section">
        <div className="left-friend-list">
         <img src={user} alt="user" />
         <div className="friend-name">
             <h6>John Doe</h6>
             <p>Php Developer</p>
         </div>
        </div>
        <div className="right-friend-list">
        <i class="fas fa-plus"></i>
        </div>
        </div>
        <div className="friend-list-section">
        <div className="left-friend-list">
         <img src={user} alt="user" />
         <div className="friend-name">
             <h6>John Doe</h6>
             <p>Php Developer</p>
         </div>
        </div>
        <div className="right-friend-list">
        <i class="fas fa-plus"></i>
        </div>
        </div>
       
        <div className="view-more">
            <p>View More </p>
        </div>
        </div>
    )
}
export default JobList