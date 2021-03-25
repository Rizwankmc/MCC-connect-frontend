import React from "react";
import Layout from "../layout/layout";
import ProfileSection from "./profileSection";
import Post from "./post";
import FriendList from "./friendList";
import JobList from "./topJobs";
import PostSlider from './postslider';
import "./index.css";
import MostViewed from "./mostViewed";


const Home = () => {
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
