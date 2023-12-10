import React, { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import "../CSS/Home.scss";
import Navbar from "../components/Navbar";
import Widgets from "../components/Widgets";
import Charts from "../components/Charts";
import { useState } from "react";
import { useSelector } from "react-redux";
import useAuthenticated from "../../../hooks/useAuthenticated";

const Home = () => {
  const { token, currentUser } = useAuthenticated();
  const theme = useSelector((state) => state.theme);

  console.log(currentUser);

  return (
    <div className={theme ? "home" : "home dark"}>
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widgets type="user" />
          <Widgets type="actualites" />
          <Widgets type="projets" />
          <Widgets type="axes strategiques" />
        </div>
        <div className="charts">
          <Charts />
        </div>
      </div>
    </div>
  );
};

export default Home;
