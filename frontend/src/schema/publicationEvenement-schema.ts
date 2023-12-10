import * as Yup from "yup";

const publicationEventSchema = Yup.object().shape({
    titre: Yup.string().required("Titre publication obligatoire"),
    description: Yup.string().required("Description publication obligatoire"),
    placeEvenement: Yup.string().required("Place évènement obligatoire"),
    domaine: Yup.string().required("Domaine publication obligatoire"),
    file: Yup.mixed(), 
});

type publicationForm = Yup.InferType<typeof publicationEventSchema>;
export type {publicationForm};
export {publicationEventSchema};