import * as Yup from "yup";

const utilisateurFormSchema = Yup.object().shape({
    email: Yup.string().required("Email de l'utilisateur obligatoire"),
    roles: Yup.string().required("Rôle de l'utilisateur obligatoire"),
    password: Yup.string().required("Password de l'utilisateur obligatoire"),
    nom: Yup.string().required("Nom de l'utilisateur obligatoire"),
    file: Yup.mixed(),
});

type utilisateurForm = Yup.InferType<typeof utilisateurFormSchema>;
export type {utilisateurForm};
export {utilisateurFormSchema};