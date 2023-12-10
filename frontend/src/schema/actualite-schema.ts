import * as Yup from "yup";

const actualiteFormSchema = Yup.object().shape({
    TitreActivite: Yup.string().required("Titre de l'actualité obligatoire"),
    descActivite: Yup.string().required("Déscription de l'actualité obligatoire"),
    impactActualite: Yup.string().required("Impact de l'actualité obligatoire"),
});

type ActualiteForm = Yup.InferType<typeof actualiteFormSchema>;
export type {ActualiteForm};
export {actualiteFormSchema};