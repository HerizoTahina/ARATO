import React from 'react'
import { ReactSVG } from 'react-svg'
import { IArticle } from '../types/IArticle'
import { BASE_URL } from '../constants/env'

type ArticleProps = {
  article : IArticle
}

function Article({article} : ArticleProps) {
  return (
    <article className='article'>
        <div className='article__header'>
            <img src={`${BASE_URL}/media/${article.filePath}`} alt='article-img' className='image'/>
            <div className='date'><ReactSVG src='/svg/date.svg'/> {article.dateCreation.split("T")[0]}</div>
        </div>

        <div className='article__body'>
            <h2 className='title'>{article.titreActivite}</h2>
            <p className='description'>{article.descActivite}</p>
            <button className='button'>Acceder</button>
        </div>
    </article>
  )
}

export default Article