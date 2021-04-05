import React from 'react'
import { useSelector } from 'react-redux';

const AboutUser = () => {
    const userDetail = useSelector(state => state.userDetail);
    const { profileInfo } = userDetail;
    return(
        <div className="about-empolyee glass-css">
            <h6>{profileInfo && profileInfo.username}</h6>
            <p>Graphic Designer at Self Employed</p>
            <div className="reviews">
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star-half-o" aria-hidden="true"></i>
            </div>
            <div className="description">
                <p>Lorem ipsum is a dummy text. Lorem ipsum is a dummy text.Lorem ipsum is a dummy text.Lorem ipsum is a dummy text. Lorem ipsum is a dummy text.Lorem ipsum is a dummy text.Lorem ipsum is a dummy text.Lorem ipsum is a dummy text. </p>
            </div>
        </div>
    )
}
export default AboutUser