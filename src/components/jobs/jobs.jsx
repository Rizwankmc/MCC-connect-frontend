import React from 'react';
import Layout from "../layout/layout";
import './jobs.css'
import Post from '../home/post';
import JobList from '../home/topJobs'
import MostViewed from '../home/mostViewed';




const Jobs = () => {
    return(
        <Layout >
             <div className="main-page">
           <div className="container-fluid">
        <div className="profile-page jobs-page">
           <div className="left-profile-page left-home-area">
           
           <JobList />
           </div>
           <div className="main-content">
           <Post />  
           <Post />
           </div>
           <div className="right-profile-page right-home-area">
           <MostViewed />
           <MostViewed />
           </div>
        </div>
        </div>
        </div>
        </Layout>
        
    )
}
export default Jobs