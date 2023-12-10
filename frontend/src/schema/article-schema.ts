import * as Yup from "yup";

const articleFormSchema = Yup.object().shape({
    titreActivite: Yup.string().required("Titre de l'article obligatoire"),
    descActivite: Yup.string().required("Déscription de l'article obligatoire"),
    dateCreation: Yup.string().required("Date de creation de l'article obligatoire"),
    articleSource: Yup.string().required("Source de l'article obligatoire"),
    utilisateur: Yup.string().required("utilisateur obligatoire"),
});

type articleForm = Yup.InferType<typeof articleFormSchema>;
export type {articleForm};
export {articleFormSchema};