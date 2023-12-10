import React from 'react'
import { ReactSVG } from 'react-svg'

type Props = {}

function Detail({ }: Props) {
    return (
        <article className='detail'>
            <div className='detail__content'>
                <div className="date">
                    <span className="date__item">
                        <ReactSVG src="/svg/date.svg" />
                        &nbsp; 01/05/2023
                    </span>
                    <span className="date__item">
                        <ReactSVG src="/svg/time.svg" />
                        &nbsp; Durée : 15:20
                    </span>
                </div>

                <h2 className="title">
                    Projet Sécurité Alimentaire"Household Food Security Initiatives"
                </h2>
                <p className="description">
                    Pour une meilleure condition de vie de la population riveraine du COFAV
                    La mise en place de la nouvelle aire protégée Ambositra-Vondrozo, NAP COFAV conçu pour préserver les écosystèmes et les ressources naturelles est une mesure nécessaire. Pourtant elle n’arrange pas beaucoup de chose au niveau social et économique. Au contraire, cette mesure fait augmenter d’un cran le niveau de vulnérabilité des populations vivant autour du corridor. Une étude récente dans le cadre de l’élaboration du PSS (Plan de Sauvegarde Social) du corridor indique que plus de 12 000 foyers sont négativement affectés par la mise en place de la nouvelle aire protégée du point de vue revenu et alimentation. L’accès de ces populations à certaines ressources (terres, bois, autres produits forestiers) sera plus restreint
                    CMP Tandavanala, est convaincu que les populations riveraines du corridor doivent être les principaux acteurs de conservation. De ce fait, leurs conditions de vie doivent être au centre de préoccupation pour pouvoir espérer une action de conservation efficace.
                    Par ailleurs, le projet HFSI (Hosehold Food Security Initiatives) est mis en œuvre depuis 2012 ; le projet est née des acquis positifs d’un projet antérieur qu’une entité membre du CMP, dénommée CCD-Namana a initié dans les années 2005-2007 dans quelques communes du corridor, qui visait le développement économique et social des populations forestières.
                </p>
            </div>
        </article>
    )
}

export default Detail