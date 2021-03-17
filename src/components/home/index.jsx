import React from "react";
import Layout from "../layout/layout";
import ProfileSection from "./profileSection";
import "./index.css";
import Post from "./post";
import FriendList from "./friendList";
import JobList from "./topJobs";

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
            </div>
            <div className="right-home-area">
              <JobList />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Home;
