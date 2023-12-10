import React, { useEffect, useState } from 'react'
import { ReactSVG } from 'react-svg'
import { IFeedback } from '../types/IFeedback'
import axios from 'axios'
import { BASE_URL } from '../constants/env'

type Props = {
    url: string
}

function Feedback({ url }: Props) {
    const [content, setContent] = useState<IFeedback | null>(null)

    function getContent() {
        axios.get(`${BASE_URL}${url}`)
            .then(res => {
                setContent(res.data)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getContent()
    }, [url])
    


    return (
        <>
            {content ? <article className='feedback'>
                <div className='feedback__icon'>
                    <ReactSVG src='/svg/quotes-ltr.svg' />
                </div>

                <div className='feedback__content'>
                    <p className='description'>
                        {content.appreciation}
                    </p>
                    <div className='user'>
                        <img src={`${BASE_URL}${content.utilisateur.contentUrl}`} alt='user' className='user__image' />
                        <div className='user__about'>
                            <p className='name'>{content.utilisateur.nom}</p>
                            <p className='role'>{content.pointDeVue}</p>
                        </div>
                    </div>
                </div>
            </article> : null}
        </>
    )
}

export default Feedback