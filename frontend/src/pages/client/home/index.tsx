import React, { useEffect, useState } from "react";
import Article from "../../../components/article";
import Actuality from "../../../components/actuality";
import axios from "axios";
import { wait } from "../../../helpers/wait";
import Blog, { BlogLoading } from "../../../components/blog";
import { BASE_URL } from "../../../constants/env";
import Footer from "../../../components/footer";
import Project from "../../../components/project";
import NavBar from "../../../components/nav-bar";
import Banner from "./banner";
import { useSelector } from "react-redux";
import { useAppSelector } from "../../../hooks/store";
import { IProject } from "../../../types/IProject";


function HomeClient() {
  const { projects  } = useAppSelector(state => state.data)
  const [loading, setLoading] = useState(true);
  const [listsBlogs, setListsBlogs] = useState([]);
  const [blogSelected, setBlogSelected] = useState(null);

  function getAllBlogs() {
    axios
      .get(`${BASE_URL}/api/publication_evenements`)
      .then(async (response) => {
        const blogs = response.data["hydra:member"];
        setListsBlogs(blogs);

        if (blogs.length > 0) {
          const lastBlogs = blogs[blogs.length - 1];
          setBlogSelected(lastBlogs);
        }
        await wait(500);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getAllBlogs();
  }, []);

  console.log(projects)

  return (
    <>
      <header>
        <NavBar />
        <Banner />
      </header>
      <div className="home-client">
        <section className="section">
          <h1 className="section__title">Nos projets</h1>
          <div className="section__lists projects">
            {projects.map((project, index) => (
              <Project key={index} project={project}/>
            ))}
          </div>
        </section>

        <section className="section">
          <h1 className="section__title">Nos articles</h1>
          <div className="section__lists articles">
            {[...new Array(3)].map((article, index) => (
              <Article key={index} />
            ))}
          </div>
        </section>

        <section className="section section--particular">
          <div className="content">
            <h1 className="section__title content__title">Actualité</h1>
            <div className="section__lists actualities">
              {[...new Array(4)].map((article, index) => (
                <Actuality key={index} />
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <h1 className="section__title">Blog</h1>
          <p className="section__description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos
            quae, incidunt ab a autem qui, expedita earum aspernatur ut at amet
            sequi ipsam nemo repellat optio assumenda vitae doloribus error?
          </p>
          <div className="section__lists blogs">
            {loading
              ? [...new Array(3)].map((blog, index) => (
                <BlogLoading key={index} isMin blog={blog} />
              ))
              : listsBlogs
                .slice(0, 3)
                .map((blog, index) => <Blog key={index} blog={blog} />)}
          </div>
        </section>

        <div className="slogan">
          <div
            className="slogan__item"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.1)),url('/actualite.jpeg')",
            }}
          >
            <h2 className="title">Tandavanala est</h2>
            <p className="description">Une entreprise</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default HomeClient;
