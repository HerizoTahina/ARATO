import * as Yup from "yup";

const commentEvent = Yup.object().shape({
    contenuCommentaire: Yup.string().required("Contenu du commentaire Obligatoire"),
});

type commentEventForm = Yup.InferType<typeof commentEvent>;
export type {commentEventForm};
export {commentEvent};