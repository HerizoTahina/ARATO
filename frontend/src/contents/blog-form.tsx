import { Button } from "@mui/material";
import { Input, InputFile, Select, Textarea } from "../components/field";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { serialize } from 'object-to-formdata';
import axios from "axios";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import { modalToast } from "../components/modal";
import useAuthenticated from "../hooks/useAuthenticated";
import useLoader from "../hooks/useLoader";
import { IBlog } from "../types/IBlog";
import { blogFormSchema, IBlogForm } from '../schema/blog-schema'
import { BASE_URL } from "../constants/env";
import Loader from "../components/loader";
import { wait } from "../helpers/wait";
import { useAppDispatch, useAppSelector } from "../hooks/store";
import { getAllBlogs } from "../store/data.reducer";

const places = [{ text: "Fianarantsoa", value: "Fianarantsoa" },
{ text: "Antananarivo", value: "Antananarivo" },
{ text: "Fianarantsoa", value: "Fianarantsoa" },
];

function BlogForm() {
  const { token } = useAuthenticated()
  const { loading, toggleLoading } = useLoader()
  const { domaines } = useAppSelector(state => state.data)
  const [previewImage, setPreviewImage] = useState<null | string>(null)
  const [domaineDefined, setDomaineDefined] = useState<Array<{ text: string, value: string }>>([])
  const dispatch = useAppDispatch()

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
    let copyData: IBlogForm = data;
    copyData.domaine = `/api/domaines/${data.domaine}`;
    const copyDataToFormData = serialize(copyData)
    console.log(BASE_URL)
    axios.post(`${BASE_URL}/api/publication_evenements`, copyDataToFormData, {
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "multipart/form-data"
      }
    }).then(async (res) => {
      dispatch(getAllBlogs())
      await wait()
      toggleLoading()
      Swal.close()
      modalToast('Votre publication a été publié', 'success')
    })
      .catch(err => toggleLoading())
  }


  useEffect(() => {
    if (domaines) {
      const domaineCopy: Array<{ text: string, value: string }> = []
      domaines.forEach((domaine) => {
        domaineCopy.push({ text: domaine.titreDomaine, value: domaine.id.toString() })
      })
      setDomaineDefined(domaineCopy)
    }
  }, [domaines])

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
        values={domaineDefined}
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
