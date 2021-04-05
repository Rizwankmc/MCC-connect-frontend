import React,{useState, useSelector} from 'react';
import {Button, Form} from 'react-bootstrap'
import { userInstance } from "../../axios";
import Layout from "../layout/layout";
import coverimg from '../../assets/cover-img.jpg'
import './profile.css'
import Post from '../home/post';
import JobList from '../home/topJobs'
import EditProfile from './editProfile';
import AboutUser from './aboutUser';
import Portfolio from './portfolio';
import toast from "react-hot-toast";



const Profile = () => {
    const[coverPhoto, setCoverPhoto] = useState(false)
    const[disabled, setDisabled] = useState(false)
    const userDetail = useSelector(state => state.userDetail);
  const { profileInfo } = userDetail;
    const handleCoverChange = async (e) => {
        var f = e.target.files[0]
        let image_as_base64 = URL.createObjectURL(e.target.files[0])
        setCoverPhoto(image_as_base64)
        handleCoverShow(f)
      }
      const handleCoverShow = async (pic) => {
        setDisabled(true)
        var fd = new FormData()
        if (pic.type.search('image')!== -1) {
          fd.append('img', pic)
          const response = await userInstance.post('/user/uploadCoverImage', fd)
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
    return(
        <Layout >
             <div className="main-page">
             <div className="cover-image">
             <img src={coverPhoto ? coverPhoto : profileInfo && profileInfo.coverPhoto !== 'user/default.png' ? 'http://localhost:8080/'+ profileInfo.coverPhoto :  coverimg} alt="user" />
       
        
                <div className="edit-cover">
                    <Button type="submit">Edit</Button>
                    <Form>
          <Form.Control
            type='file'
            className='profile-input'
            onChange={handleCoverChange}
            disabled={disabled}
          />
        </Form>
                </div>
            </div>
        <div className="container-fluid">
        <div className="profile-page home-page">
           <div className="left-profile-page left-home-area">
               <EditProfile />
           <JobList />
           </div>
           <div className="main-content">
               <AboutUser />
           <Post />
           </div>
           <div className="right-profile-page right-home-area">
               <Portfolio />
           </div>
        </div>
        </div>
        </div>
        </Layout>
        
    )
}
export default Profile