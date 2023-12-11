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

const NewActivite = () => {
  const { token } = useAuthenticated();
  const theme = useSelector((state) => state.theme);
  const navigate = useNavigate()
  const [photo, setFiles] = useState("");
  const [titre, setTitre] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [type, setType] = useState("");
  const [source, setSource] = useState("");
  const [impact, setImpact] = useState("");
  const [statut, setStatut] = useState("");
  const [duree, setDuree] = useState("");

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
                      placeholder="Titre de l'activité"
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
                  <div className="formInput">
                    <label>Date de l'activité</label>
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                    />
                  </div>
                </div>
                <div className="mail_password">
                  <div className="formInput">
                    <label>Type de l'activité</label>
                    <select
                      className="form-control"
                      value={type}
                      required
                      onChange={(e) => setType(e.target.value)}
                    >
                      <option>Selectionner ici</option>
                      <option value="article">Article</option>
                      <option value="actualite">Actualité</option>
                      <option value="projet">Projet</option>
                    </select>
                  </div>
                  {type === "article" ? (
                    <div className="formInput">
                      <label>Source de l'article</label>
                      <input
                        type="text"
                        value={source}
                        onChange={(e) => setSource(e.target.value)}
                      />
                    </div>
                  ) : (
                    ""
                  )}
                  {type === "actualite" ? (
                    <div className="formInput">
                      <label>Impact de l'actualite</label>
                      <input
                        type="text"
                        value={impact}
                        onChange={(e) => setImpact(e.target.value)}
                      />
                    </div>
                  ) : (
                    ""
                  )}
                  {type === "projet" ? (
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
                  ) : (
                    ""
                  )}
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

export default NewActivite;
