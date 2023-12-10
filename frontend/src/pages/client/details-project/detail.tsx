import React from 'react'
import { ReactSVG } from 'react-svg'
import { IProject } from '../../../types/IProject'

type Props = {
    project: IProject | null
}

function Detail({ project }: Props) {


    return (
        <>
            {project ? <article className='detail'>
                <div className='detail__content'>
                    <div className="date">
                        <span className="date__item">
                            <ReactSVG src="/svg/date.svg" />
                            &nbsp; {project.dateCreation.split('T')[0]}
                        </span>
                        <span className="date__item">
                            <ReactSVG src="/svg/time.svg" />
                            &nbsp; Durée : {project.dureeProjet}
                        </span>
                    </div>

                    <h2 className="title">
                        {project.titreActvite}
                    </h2>
                    <p className="description">
                        {project.descActivite}
                    </p>
                </div>
            </article> : null}

        </>
    )
}

export default Detail