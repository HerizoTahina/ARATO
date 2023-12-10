import * as Yup from "yup";

const feedbackFormSchema = Yup.object().shape({
    nomFeedback: Yup.string().required("Nom du feedback obligatoire"),
    email: Yup.string().required("Email obligatoire"),
    objetMail: Yup.string().required("Objet du mail obligatoire"),
    appreciation: Yup.string().required("Appréciation obligatoire"),
    pointDeVue: Yup.string().required("Point de vue obligatoire"),
});

type feedbackForm = Yup.InferType<typeof feedbackFormSchema>;
export type { feedbackForm };
export {feedbackFormSchema};