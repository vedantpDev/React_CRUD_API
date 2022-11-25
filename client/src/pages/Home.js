import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
// import "./Home.css";

const Home = () => {
  return (
    <>
      <div>
        <Header className=" bg-light" />
      </div>
      <div className="container-main text-dark text-center">
        <Outlet />
      </div>
      <div className=" bg-light">
        <Footer />
      </div>
    </>
  );
};

export default Home;
