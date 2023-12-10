import * as Yup from "yup";

const projetFormSchema = Yup.object().shape({
    titreActivite: Yup.string().required("Titre activite obligatoire"),
    descActivite: Yup.string().required("Description activité obligatoire"),
    statutProjet: Yup.string().required("Statut du projet obligatoire"),
    dureeProjet: Yup.string().required("Durée du projet obligatoire"),
    file: Yup.mixed(),
});

type projetForm = Yup.InferType<typeof projetFormSchema>;
export type { projetForm};
export {projetFormSchema};