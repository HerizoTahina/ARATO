import React, { useEffect, useState } from 'react'
import NavBar from '../../../components/nav-bar'
import Detail from './detail'
import FeedbackForm from './feedback-form'
import Feedback from '../../../components/feedback'
import Footer from '../../../components/footer'
import { useParams } from 'react-router-dom'
import { useAppSelector } from '../../../hooks/store'
import { IProject } from '../../../types/IProject'
import { BASE_URL } from '../../../constants/env'

type Props = {}

function Details({ }: Props) {
    const { projectId } = useParams<{ projectId: string }>()
    const { projects } = useAppSelector(state => state.data)
    const [projectSelected, setProjectSelected] = useState<IProject | null>(null)

    useEffect(() => {
        if (projectId) {
            const projectSearch = projects.find(project => project.id.toString() === projectId)
            if (projectSearch) {
                setProjectSelected(projectSearch)
            }
        }
    }, [projectId, projects])

    return (
        <>
            <header>
                <NavBar />
            </header>
            <div className="details">
                <Detail project={projectSelected}/>
                <div className='details__others'>
                    {projects.filter(projet => projet.id.toString() !== projectId).slice(0,3).map((other, index) => {
                        return <div key={index} className='other'>
                            <img src={`${BASE_URL}/media/${other.filePath}`} style={{width : '100%', height: '100%', objectFit : 'cover'}}/>
                        </div>
                    })}
                </div>

                <div className='details__feedbacks'>
                    <FeedbackForm projectId={projectId} />
                    {projectSelected ? <div className='lists'>
                        {projectSelected.feedback.map((url, index) => {
                            return <Feedback key={index} url={url} />
                        })}
                    </div> : null}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Details