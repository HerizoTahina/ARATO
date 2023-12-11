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
import { Partenariat } from "./partenariat";


function HomeClient() {
  const { projects, blogs, articles, actualites } = useAppSelector(state => state.data)
  const [loading, setLoading] = useState(false);

  console.log(blogs)

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
              <Project key={index} project={project} />
            ))}
          </div>
        </section>

        <section className="section">
          <h1 className="section__title">Nos articles</h1>
          <div className="section__lists articles">
            {articles.slice(0, 3).map((article, index) => (
              <Article key={index} article={article} />
            ))}
          </div>
        </section>

        <section className="section section--particular">
          <div className="content">
            <h1 className="section__title content__title">Actualité</h1>
            <div className="section__lists actualities">
              {actualites.slice(0.4).map((actualite, index) => (
                <Actuality key={index} actualite={actualite} />
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <h1 className="section__title">Blog</h1>
          <p className="section__description">
            Publicaion régulièrement du contenu, permettant aux lecteurs d'explorer des sujets variés et d'interagir à travers des commentaires.
          </p>
          <div className="section__lists blogs">
            {loading
              ? [...new Array(3)].map((blog, index) => (
                <BlogLoading key={index} isMin blog={blog} />
              ))
              : blogs
                .slice(0, 3)
                .map((blog, index) => <Blog key={index} blog={blog} />)}
          </div>
        </section>

        <section className="section">
          <h1 className="section__title">Partenaires</h1>
          {/* <div
            className="slogan__item"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.1)),url('/actualite.jpeg')",
            }}
          >
            <h2 className="title">Tandavanala est</h2>
            <p className="description">Une entreprise</p>
          </div> */}

          <Partenariat />
        </section>
      </div>
      <Footer />
    </>
  );
}

export default HomeClient;
