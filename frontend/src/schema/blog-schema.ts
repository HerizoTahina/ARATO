import * as Yup from "yup";

const blogFormSchema = Yup.object().shape({
  titre: Yup.string().required("Titre du blog obligatoire"),
  description: Yup.string().required("Description du blog obligatoire"),
  placeEvenement: Yup.string(),
  domaine: Yup.string().required("Domaine du blog obligatoire"),
  file: Yup.mixed(),
});

type IBlogForm = Yup.InferType<typeof blogFormSchema>;
export type { IBlogForm };
export { blogFormSchema };
