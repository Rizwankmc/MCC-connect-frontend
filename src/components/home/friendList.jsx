import React from 'react'
import user from "../../assets/user.jpg";

const FriendList = () => {
    return(
        <div className="friend-list glass-css">
            <div className="top-heading">
            <h6 className="addfriend">Add Friend</h6>
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
export default FriendList