import * as Yup from "yup";

const commentFormSchema = Yup.object().shape({
    comment: Yup.string().required('Votre commentaire est obligatoire')
});

export { commentFormSchema };