import React from "react";
import { ReactSVG } from "react-svg";
import { IProject } from "../types/IProject";
import { BASE_URL } from "../constants/env";
import { Link } from "react-router-dom";

function Project({ project }: { project: IProject }) {
  const { id, titreActvite, filePath, dateCreation, descActivite, dureeProjet, statutProjet } = project

  return (
    <Link to={`/details-project/${id}`}>
      <article className="project">
        <div className="project__left">
          <div className="date">
            <span className="date__item">
              <ReactSVG src="/svg/date.svg" />
              &nbsp; {dateCreation.split('T')[0]}
            </span>
            <span className="date__item">
              <ReactSVG src="/svg/time.svg" />
              &nbsp; Durée : {dureeProjet}
            </span>
          </div>

          <h2 className="title">{titreActvite}</h2>
          <p className="description">{descActivite}</p>
          <div className="status">
            <div className="status__icon">
              <ReactSVG src="/svg/play.svg" />
            </div>

            <p className="status__text">{statutProjet}</p>
          </div>
        </div>

        <div className="project__right">
          <div className="round-1">
            <div className="round-2">
              <img src={`${BASE_URL}/media/${filePath}`} alt="project" />
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}

export default Project;
