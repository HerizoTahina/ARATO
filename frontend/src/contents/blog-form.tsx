import { Button } from "@mui/material";
import { Input, InputFile, Select, Textarea } from "../components/field";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { serialize } from 'object-to-formdata';
import axios from "axios";
import Swal from "sweetalert2";
import { useState } from "react";
import { modalToast } from "../components/modal";
import useAuthenticated from "../hooks/useAuthenticated";
import useLoader from "../hooks/useLoader";
import { IBlog } from "../types/IBlog";
import {blogFormSchema,IBlogForm} from '../schema/blog-schema'
import { BASE_URL } from "../constants/env";
import Loader from "../components/loader";
import { wait } from "../helpers/wait";

const domaines = [{ text: "Electronique", value: 1 }];
const places = [
  { text: "Antananarivo", value: "Antananarivo" },
  { text: "Fianarantsoa", value: "Fianarantsoa" },
];

function BlogForm() {
  const { token } = useAuthenticated()
  const { loading, toggleLoading } = useLoader()
  const [previewImage, setPreviewImage] = useState<null | string>(null)

  const {
    formState: { errors },
    handleSubmit,
    register,
    control,
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(blogFormSchema),
  });

  function handleClickSubmit(data: IBlogForm) {
    toggleLoading()
    let copyData : IBlogForm = data;
    copyData.domaine = `/api/domaines/${data.domaine}`;
    const copyDataToFormData = serialize(copyData)
    console.log(BASE_URL)
    axios.post(`${BASE_URL}/api/publication_evenements`, copyDataToFormData, {
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "multipart/form-data"
      }
    }).then(async (res) => {
      await wait()
      toggleLoading()
      Swal.close()
      modalToast('Votre publication a été publié', 'success')
    })
      .catch(err => toggleLoading())
  }


  return (
    <form className="blog-form" onSubmit={handleSubmit(handleClickSubmit)}>
      <Input
        placeholder="Mon titre"
        label="Titre du blog"
        id="title"
        register={register("titre")}
        error={errors.titre?.message}
      />
      <Textarea
        placeholder="Mon description"
        label="Description du blog"
        id="description"
        register={register("description")}
        error={errors.description?.message}
      />
      <Select
        id="domaine"
        label="Domaine"
        values={domaines}
        register={register("domaine")}
        placeholder="domain"
        error={errors.domaine?.message}
      />
      <Select
        id="Place"
        label="Place"
        values={places}
        placeholder="place"
        register={register("placeEvenement")}
        error={errors.placeEvenement?.message}
      />
      <Controller
        control={control}
        name="file"
        render={({ field: { onChange, value }, fieldState, formState }) => (
          <InputFile
            label="Image du blog"
            id="image-blog"
            preview={previewImage}
            onChange={(e) => {
              e.target.files && onChange(e?.target?.files[0])
              e.target?.files && setPreviewImage(URL.createObjectURL(e?.target?.files[0]))
            }}
          />
        )}
      />

      <button type="submit" className="button-pub">
        {loading ? <Loader /> : "Publier"}
      </button>
    </form>
  );
}

export default BlogForm;
