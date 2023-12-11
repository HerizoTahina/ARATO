import * as Yup from "yup";

const aboutFormSchema = Yup.object().shape({
    fb: Yup.string().required("Facebook de l'ONG  obligatoire"),
    Youtube: Yup.string().required("Youtube de l'ONG obligatoire"),
    Twitter: Yup.string().required("Twitter de l'ONG obligatoire"),
    Mail: Yup.string().required("Mail de l'ONG obligatoire"),
    Adresse: Yup.string().required("Adresse de l'ONG obligatoire"),
    Nom: Yup.string().required("Nom de l'ONG obligatoire"),
    Telephone: Yup.string().required("Telephone de l'ONG obligatoire"),
    file: Yup.mixed(),
    slogan: Yup.string().required("Slogan de l'ONG obligatoire"),
});

type aboutForm = Yup.InferType<typeof aboutFormSchema>;
export type {aboutForm};
export {aboutFormSchema};