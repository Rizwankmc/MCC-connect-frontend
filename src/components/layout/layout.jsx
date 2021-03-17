import React from "react";
import Header from "../header/header";
import "./layout.css";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <div className="main-layout">
        <div className="header-wrapper">
          <Header />
        </div>
        <div className="content-wrapper">{children}</div>
      </div>
    </div>
  );
};
export default Layout;
