import React from 'react';
import {Button} from 'react-bootstrap'
import Layout from "../layout/layout";
import coverimg from '../../assets/cover-img.jpg'
import './profile.css'
import Post from '../home/post';
import JobList from '../home/topJobs'
import EditProfile from './editProfile';
import AboutUser from './aboutUser';
import Portfolio from './portfolio';



const Profile = () => {
    return(
        <Layout >
             <div className="main-page">
             <div className="cover-image">
                <img src={coverimg} alt="coverphoto" />
                <div className="edit-cover">
                    <Button type="submit">Edit</Button>
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