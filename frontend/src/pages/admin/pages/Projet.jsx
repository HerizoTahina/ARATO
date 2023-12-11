import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { useAppSelector } from "../../../hooks/store";
import { BASE_URL } from "../../../constants/env";

const Projet = () => {
  const theme = useSelector((state) => state.theme);
  const {projects} = useAppSelector(state => state.data)

    console.log(projects)

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "titreActvite", headerName: "Titre du projet", width: 130 },
    { field: "descActivite", headerName: "Description du projet", width: 350 },
    {
      field: "dureeProjet",
      headerName: "Durée",
      width: 80,
    },
    {
      field: "",
      headerName: "Auteur",
      sortable: false,
      width: 200,
      valueGetter: (params) => {
        return `${params.row.utilisateur.nom}`
      }
    },
  ];

 
  return (
    <div className={theme.isLight ? "home" : "home dark"}>
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="listeUsers">
          <h1>Liste des projets</h1>
          <div className="btn_search">
            <Link to="/newProjets">
              <button className="add-btn">
                <AddCircleOutlineOutlinedIcon className="Icons" />
                Ajouter
              </button>
            </Link>
            <div className="search">
              <input type="text" placeholder="recherche..." />
              <SearchOutlinedIcon />
            </div>
          </div>

          <div style={{ height: 400, width: "100%" }}>
            <DataGrid
              rows={projects}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 5 },
                },
              }}
              pageSizeOptions={[5, 10]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projet;
