import React from "react";
import Sidebar from "./Sidebar";
import Home from "./Home";
import "../css/MainHome.css";

const MainHome = () => {
  return (
    <div>
      <div className="row ">
        <div className="col-lg-2  bg-dark text-center ">{<Sidebar />}</div>
        <div className="col-lg-10 bg-secondary">{<Home />}</div>
      </div>
    </div>
  );
};

export default MainHome;
