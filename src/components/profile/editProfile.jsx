import React,{ useState} from "react";
import { Form } from "react-bootstrap";
import toast from "react-hot-toast";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import user from "../../assets/user.jpg";
import { userInstance } from "../../axios";
import { server } from '../../config/keys';

const EditProfile = () => {
  const [preview, setPreview] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const userDetail = useSelector(state => state.userDetail);
  const { profileInfo } = userDetail;

  const handlePicChange = async (e) => {
    var f = e.target.files[0]
    let image_as_base64 = URL.createObjectURL(e.target.files[0])
    setPreview(image_as_base64)
    handlePicShow(f)
  }

  const handlePicShow = async (pic) => {
    setDisabled(true)
    var fd = new FormData()
    if (pic.type.search('image')!== -1) {
      fd.append('img', pic)
      const response = await userInstance.post('/user/uploadImage', fd)
      setDisabled(false)
      if (response.data.code === 200) {
        toast.success("Image is Uploaded Successfully",{id: 'A'})
      } else if (response.data.code === 401) {
        toast.error("Unauthoriozed User", { id: 'A' })
      } else {
        toast.error(response.data.msg, { id: 'A' })
      }
    } else {
      toast.error("Please select only image file", { id: 'A' })
    }
  }
  return (
    <div className="edit-profile  glass-css">
      <div className="edit-profileimage">
        <img src={preview ? preview : profileInfo && profileInfo.photo !== 'user/default.png' ? 'http://localhost:8080/'+profileInfo.photo :  user} alt="user" />
        <div className="change-profile">
          <i class="fa fa-camera" aria-hidden="true"></i>
        </div>
        <Form>
          <Form.Control
            type='file'
            className='profile-input'
            onChange={handlePicChange}
            disabled={disabled}
          />
        </Form>
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
