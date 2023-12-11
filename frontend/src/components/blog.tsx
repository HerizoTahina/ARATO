import { Dispatch, SetStateAction, useState } from "react";
import { BASE_URL } from "../constants/env";
import { ReactSVG } from "react-svg";
import { Link } from "react-router-dom";
import moment from "moment";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import useAuthenticated from "../hooks/useAuthenticated";
import axios from "axios";
import { IBlog } from "../types/IBlog";
import { Textarea } from "./field";
import { commentFormSchema } from "../schema/comment-schema";

type BlogProps = {
  blog? : IBlog
  isMin? : boolean
  isLarge? : boolean
  showActions? : boolean
}

function Blog({ blog, isMin, isLarge, showActions } : BlogProps) {
  const [showComment, setShowComment] = useState(false);

  function toggleShowComment() {
    setShowComment((currentValue) => !currentValue);
  }

  return (
    <Link to={`/details-blog/${blog?.id}`} className={isMin ? "blog2 blog2--min" : "blog2"}>
      <div className="blog2__image">
        <img src={`${BASE_URL}${blog?.contentUrl}`} alt={`image-${blog?.id}`} />
      </div>
      <div className="blog2__about">
        <p className="title">{blog?.titre}</p>
        <div className="date-seen">
          <p className="date">
            {moment(blog?.datePublication).locale("fr").fromNow()} par{" "}
            <span>{blog?.utilisateur?.nom}</span>
          </p>
          <p className="seen">5 vues</p>
        </div>

        <div className="reaction">
          <ReactSVG src="/svg/heart.svg" className="reaction__logo" />
          <span className="reaction__number">25 réactions</span>
        </div>
        <p className="description">{blog?.description}</p>
        <button className="show-more">
          Lire la suite{" "}
          <ReactSVG src="/svg/arrowright.svg" className="show-more__icon" />
        </button>
        {showActions ? (
          <div className="actions">
            <div className="actions__item">
              <ReactSVG src="/svg/heart.svg" className="actions__icon" />
              <p>25</p>
            </div>

            <div onClick={toggleShowComment} className="actions__item">
              <ReactSVG src="/svg/comment.svg" className="actions__icon" />
              <p>5</p>
            </div>
          </div>
        ) : null}

        {isLarge ? (
          <div className="lists-comments">
            <h5 className="lists-comments__title">Commentaires</h5>
          </div>
        ) : null}

        {showComment ? (
          <div className="comment">
            <Comment blogId={blog?.id} setShowComment={setShowComment} />
          </div>
        ) : null}
      </div>
    </Link>
  );
}

function BlogLoading({ isMin, showActions } : BlogProps) {
  return (
    <article className={isMin ? "blog2 blog2--min" : "blog2"}>
      <div className="blog2__image"></div>
      <div className="blog2__about">
        <p className="skeleton skeleton__title"></p>
        <div className="date-seen">
          <p className="skeleton skeleton__title date"></p>
          <p className="skeleton skeleton__title seen"></p>
        </div>

        <div className="reaction">
          <p className="skeleton skeleton__icon"></p>
          <p className="skeleton skeleton__title"></p>
        </div>
        <p className="skeleton skeleton__description"></p>
        <button className="skeleton skeleton__button show-more"></button>
        {showActions ? (
          <div className="actions">
            <div className="actions__item">
              <p className="skeleton skeleton__icon"></p>
              <p className="skeleton skeleton__title"></p>
            </div>

            <div className="actions__item">
              <p className="skeleton skeleton__icon"></p>
              <p className="skeleton skeleton__title"></p>
            </div>
          </div>
        ) : null}
      </div>
    </article>
  );
}

function Comment({ blogId, setShowComment } : {blogId? : number, setShowComment : Dispatch<SetStateAction<boolean>>}) {
  const {
    register,
    formState: { isValid, errors },
    getValues,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(commentFormSchema),
  });
  const { token } = useAuthenticated();

  function newComment() {
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
        setShowComment(false);
      })
      .catch((err) => console.log(err));
  }

  return (
    <form>
      <Textarea
        id="comment"
        error={errors.comment?.message}
        label="Commentaire"
        type="text"
        register={register("comment")}
        placeholder="Mon commentaire..."
      />
      <button onClick={newComment}  disabled={!isValid}>
        Envoyer
      </button>
    </form>
  );
}

export { BlogLoading };
export default Blog;
