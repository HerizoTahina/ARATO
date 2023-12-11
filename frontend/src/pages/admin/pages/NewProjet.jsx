import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import noImg from "../image/images.png";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import { useSelector } from "react-redux";
import axios from "axios";
import { BASE_URL } from "../../../constants/env";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { actualiteFormSchema } from "../../../schema/actualite-schema";
import { projetFormSchema } from "../../../schema/projet-shema";
import { articleFormSchema } from "../../../schema/article-schema";
import { Button } from "@mui/material";
import { serialize } from "object-to-formdata";
import useAuthenticated from "../../../hooks/useAuthenticated";
import { useNavigate } from "react-router-dom";
import { modalToast, modalWithTitle } from "../../../components/modal";
import { useAppDispatch } from "../../../hooks/store";
import { getAllProjects } from "../../../store/data.reducer";

const NewProjet = () => {
  const { token } = useAuthenticated();
  const theme = useSelector((state) => state.theme);
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const [photo, setFiles] = useState("");

  const {
    register,
    formState: { errors },
    control,
    handleSubmit,
    getValues,
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(projetFormSchema),
    defaultValues: {
      file: "",
    },
  });

  function handleClickSubmit(data) {
    console.log(data)
    const dataToFormData = serialize(data);
    axios
      .post(`${BASE_URL}/api/projets`, dataToFormData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        dispatch(getAllProjects())
        modalToast("Le projet a été ajouté avec success", "success")
        navigate("/projets")
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className={theme.isLight ? "new" : "new dark"}>
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Ajout d'un nouveau projet</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={getValues("file") ? URL.createObjectURL(photo) : noImg}
              alt="files"
            />
          </div>
          <div className="right">
            <form onSubmit={handleSubmit(handleClickSubmit)}>
              <div className="formInput">
                <label htmlFor="file">
                  Image : <DriveFolderUploadIcon className="Icon" />
                </label>
                <Controller
                  control={control}
                  name="file"
                  render={({ field: { onChange, value } }) => (
                    <input
                      type="file"
                      id="file"
                      //   value={value}
                      onChange={(e) => {
                        e.target.files && setFiles(e.target.files[0]);
                        e.target.files && onChange(e.target.files[0]);
                      }}
                      style={{ display: "none" }}
                      required
                    />
                  )}
                />
              </div>
              <div className="flex_form">
                <div className="nom_contact">
                  <div className="formInput">
                    <label>Titre</label>
                    <input
                      type="text"
                      //   value={titre}
                      //   onChange={(e) => setTitre(e.target.value)}
                      {...register("titreActvite")}
                      placeholder="Titre du projet"
                    />
                  </div>
                  <div className="formInput">
                    <label>Déscription</label>
                    <textarea
                      //   value={description}
                      //   onChange={(e) => setDescription(e.target.value)}
                      {...register("descActivite")}
                    ></textarea>
                  </div>
                
                </div>

                <div>
                <div className="formInput">
                      <label>Statut du projet</label>
                      <input
                        type="text"
                        // value={statut}
                        // onChange={(e) => setStatut(e.target.value)}
                        {...register("statutProjet")}
                      />
                      <label>Durée du projet</label>
                      <input
                        type="text"
                        // value={duree}
                        // onChange={(e) => setDuree(e.target.value)}
                        {...register("dureeProjet")}
                      />
                    </div>
                </div>
              </div>
              <Button type="submit" variant="contained">
                Ajouter
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProjet;
