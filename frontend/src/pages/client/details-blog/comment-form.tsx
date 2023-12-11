import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { commentFormSchema } from "../../../schema/comment-schema";
import useAuthenticated from "../../../hooks/useAuthenticated";
import axios from "axios";
import { BASE_URL } from "../../../constants/env";
import { Textarea } from "../../../components/field";
import { useAppDispatch } from "../../../hooks/store";
import { getAllBlogs } from "../../../store/data.reducer";

function CommentForm({ blogId }: { blogId?: number }) {
    const dispatch = useAppDispatch()
    const {
        register,
        formState: { isValid, errors },
        reset,
        getValues,
        handleSubmit,
    } = useForm({
        mode: "onChange",
        resolver: yupResolver(commentFormSchema),
    });
    const { token } = useAuthenticated();

    function newComment(e: { comment: string }) {

        const content = {
            contenuCommentaire: getValues("comment"),
            publicationEvenement: `/api/publication_evenements/${blogId}`,
        };

        axios
            .post(`${BASE_URL}/api/commentaire_evenements`, content, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            })
            .then((res) => {
                reset()
                dispatch(getAllBlogs())
            })
            .catch((err) => console.log(err));
    }

    return (
        <form onSubmit={handleSubmit(newComment)}>
            <Textarea
                id="comment"
                label="Commentaire"
                type="text"
                register={register("comment")}
                placeholder="Mon commentaire..."
                row={3}
            />
            <button className="comment-btn" type="submit" /*onClick={newComment}*/ disabled={!isValid}>
                Envoyer
            </button>
        </form>
    );
}


export default CommentForm