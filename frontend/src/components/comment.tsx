import React, { useEffect, useState } from 'react'
import { ICommentary } from '../types/IBlog'
import { BASE_URL } from '../constants/env'
import { ReactSVG } from 'react-svg'
import axios from 'axios'
import { IUser } from '../types/IUser'

type Props = {
    comment: ICommentary
}

function Comment({ comment }: Props) {
    const [image, setImage] = useState<string>("")

    useEffect(() => {
        if (comment) {
            axios.get<IUser>(`${BASE_URL}/api/utilisateurs/${comment.utilisateur.id}`)
                .then((res) => setImage(res.data.contentUrl))
                .catch(err => console.log(err))
        }
    }, [comment])

    return (
        <div className='comment'>
            <div className='comment__left'>
                <img src={`${BASE_URL}${image}`} alt={`comment-${comment.id}`}/>
            </div>

            <div className='comment__right'>
                <div className='top'>
                    <p className='top__name'>{comment.utilisateur.nom}</p>
                    <ReactSVG src='/svg/dot.svg' className='top__dot' />
                    <p className='top__date'>{comment.dateCreationCommentaire.split('T')[0]}</p>
                </div>

                <p className='content'>{comment.contenuCommentaire}</p>
            </div>
        </div>
    )
}

export default Comment