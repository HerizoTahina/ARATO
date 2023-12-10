import React, { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import "../CSS/Home.scss";
import Navbar from "../components/Navbar";
import Widgets from "../components/Widgets";
import Charts from "../components/Charts";
import { useState } from "react";
import { useSelector } from "react-redux";
import useAuthenticated from "../../../hooks/useAuthenticated";
import { useAppSelector } from "../../../hooks/store";

const Home = () => {
  const [token, setToken] = useState(null);
  const theme = useSelector((state) => state.theme);
  const {blogs,projects,users} = useAppSelector((state) => state.data)

  // if(!getToken()){
  //     return <Accueil/>;
  // }

  return (
    <div className={theme.isLight ? "home" : "home dark"}>
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widgets type="user" number={users.length}/>
          <Widgets type="blogs" number={blogs.length}/>
          <Widgets type="projets" number={projects.length}/>
          <Widgets type="axes strategiques" number={5}/>
        </div>
        <div className="charts">
          <Charts />
        </div>
      </div>
    </div>
  );
};
export default Home;
