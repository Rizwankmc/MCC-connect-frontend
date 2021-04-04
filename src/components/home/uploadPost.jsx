import React from 'react'
import { Button } from "react-bootstrap";
import user from "../../assets/user.jpg";

const UploadPost = () => {
    return(
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
      
    )
}
export default UploadPost