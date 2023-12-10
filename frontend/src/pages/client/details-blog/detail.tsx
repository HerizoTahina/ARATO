import React, { useEffect, useState } from 'react'
import { ReactSVG } from 'react-svg'
import { IProject } from '../../../types/IProject'
import { IBlog } from '../../../types/IBlog'
import { BASE_URL } from '../../../constants/env'
import useAuthenticated from '../../../hooks/useAuthenticated'
import axios from 'axios'
import CommentForm from './comment-form'
import Comment from '../../../components/comment'

type Props = {
    blog: IBlog | null
}

function Detail({ blog }: Props) {
    const { currentUser, token } = useAuthenticated()
    const [myLikeId, setMyLikeId] = useState<number | null>(null)
    const [numberReaction, setNumberReaction] = useState<number>(0)
    const [isLiked, setIsLiked] = useState<boolean>(false)


    function toggleLike() {
        if (isLiked && myLikeId) {
            axios.delete(`${BASE_URL}/api/reagir_evenements/${myLikeId}`)
                .then(res => {
                    setIsLiked(false)
                    setMyLikeId(null)
                    setNumberReaction(currentValue => currentValue - 1)
                })
        } else {
            axios.post<{ id: number }>(`${BASE_URL}/api/reagir_evenements`, {
                publicationEvenement: `/api/publication_evenements/${blog?.id}`
            }, { headers: { "Authorization": `Bearer ${token}` } }).then(res => {
                setIsLiked(true)
                setMyLikeId(res.data.id)
                setNumberReaction(currentValue => currentValue + 1)
            }).catch(err => console.log(err))
        }
    }

    useEffect(() => {
        if (blog) {
            setNumberReaction(blog.nombreReaction)
        }
    }, [blog])

    useEffect(() => {
        if (blog) {

            const isPresent = blog.reagirEvenements.find((item) => item.utilisateur.id === currentUser?.id)
            if (isPresent) {
                setMyLikeId(isPresent.id)
                setIsLiked(true)
            } else {
                setIsLiked(false)
            }
        }
    }, [blog, currentUser])

    return (
        <>
            {blog ? <article className='detail'>
                <div className='detail__content'>
                    <div className="date">
                        <span className="date__item">
                            <ReactSVG src="/svg/date.svg" />
                            &nbsp; {blog.datePublication.split('T')[0]}
                        </span>
                        <span className="date__item">
                            <ReactSVG src="/svg/time.svg" />
                            &nbsp; Domaine : {blog.domaine.titreDomaine}
                        </span>
                    </div>

                    <h2 className="title">
                        {blog.titre}
                    </h2>
                    <p className="description">
                        {blog.description}
                    </p>

                    <div className='image'>
                        <img src={`${BASE_URL}/${blog.contentUrl}`} alt={`blog-${blog.id}`} />
                    </div>

                    <div className="actions">
                        <div onClick={toggleLike} className="actions__item">
                            {isLiked ? <ReactSVG src="/svg/heart.svg" className="actions__icon" /> : <ReactSVG src="/svg/heart-outline.svg" className="actions__icon" />}
                            <p>{numberReaction}</p>
                        </div>

                        <div className="actions__item">
                            <ReactSVG src="/svg/comment.svg" className="actions__icon" />
                            <p>5</p>
                        </div>
                    </div>

                    <div className='my-comment'>
                        <CommentForm blogId={blog.id} />
                    </div>

                    <div className='comments'>
                        {blog.commentaireEvenements.map((comment, index) => <Comment key={index} comment={comment} />)}
                    </div>
                </div>
            </article> : null}

        </>
    )
}

export default Detail