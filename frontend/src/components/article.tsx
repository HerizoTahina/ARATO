import React from 'react'
import { ReactSVG } from 'react-svg'

function Article() {
  return (
    <article className='article'>
        <div className='article__header'>
            <img src='/article.jpeg' alt='article-img' className='image'/>
            <div className='date'><ReactSVG src='/svg/date.svg'/> 12/02/2023</div>
        </div>

        <div className='article__body'>
            <h2 className='title'>Débat public pour la bonne gestion des ressources naturelles dans les Districts d’Ambohimahasoa et Lalangiana</h2>
            <p className='description'>Compte tenu de la gravité des exploitations minières dans les Districts d’Ambohimahasoa et Lalangiana, un grand débat public a été organisé réunissant les Responsables Régionaux,</p>
            <button className='button'>Acceder</button>
        </div>
    </article>
  )
}

export default Article