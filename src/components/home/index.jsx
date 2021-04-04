import React, {useEffect} from "react";
import Layout from "../layout/layout";
import ProfileSection from "./profileSection";
import Post from "./post";
import FriendList from "./friendList";
import JobList from "./topJobs";
import PostSlider from './postslider';
import "./index.css";
import MostViewed from "./mostViewed";
import { getUserProfile } from "../../actions/userAction";
import { useDispatch } from "react-redux";
import UploadPost from "./uploadPost";


const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const userId = localStorage.getItem('userId');
    if(userId) {
      dispatch(getUserProfile(userId))
    }
  },[dispatch])
  return (
    <Layout>
      <div className="main-page">
        <div className="container-fluid">
          <div className="home-page">
            <div className="left-home-area">
              <ProfileSection />
              <FriendList />
            </div>
            <div className="main-content">
              <UploadPost />
              <Post />
              <div className="slider-jobs">
                <PostSlider />
              </div>
            </div>
            <div className="right-home-area">
              <JobList />
              <MostViewed />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Home;
