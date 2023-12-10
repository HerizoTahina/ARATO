import * as Yup from "yup";

const commentThematique = Yup.object().shape({
    contenuCommentaire: Yup.string().required("Contenu commentaire obligatoire"),
    publicationThematique: Yup.string().required("Publication path obligatoire"),
});

type commentThematiqueForm = Yup.InferType<typeof commentThematique>;
export type {commentThematiqueForm};
export {commentThematique};