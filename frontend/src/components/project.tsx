import React from "react";
import { ReactSVG } from "react-svg";

function Project() {
  // const {titreActvite,dateCreation,descActivite,dureeProjet,statutProjet} = project

  return (
    <article className="project">
      <div className="project__left">
        <div className="date">
          <span className="date__item">
            <ReactSVG src="/svg/date.svg" />
            &nbsp; 01/05/2023
          </span>
          <span className="date__item">
            <ReactSVG src="/svg/time.svg" />
            &nbsp; Durée : 15:20
          </span>
        </div>

        <h2 className="title">
          Projet Sécurité Alimentaire"Household Food Security Initiatives"
        </h2>
        <p className="description">
          Pour une meilleure condition de vie de la population riveraine du
          COFAV La mise en place de la nouvelle aire protégée Ambositra.
        </p>
        <div className="status">
          <div className="status__icon">
            <ReactSVG src="/svg/play.svg" />
          </div>

          <p className="status__text">Alimentaire</p>
        </div>
      </div>

      <div className="project__right">
        <div className="round-1">
          <div className="round-2">
            <img src="/project.jpeg" alt="project" />
          </div>
        </div>
      </div>
    </article>
  );
}

export default Project;
