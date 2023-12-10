import React, { useEffect, useState } from 'react'
import NavBar from '../../../components/nav-bar'
import Detail from './detail'
import Other from '../../../components/other'
import FeedbackForm from './feedback-form'
import Feedback from '../../../components/feedback'
import Footer from '../../../components/footer'
import { useParams } from 'react-router-dom'
import { useAppSelector } from '../../../hooks/store'
import { IProject } from '../../../types/IProject'

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
                    {[...new Array(3)].map((other, index) => {
                        return <Other key={index} ></Other>
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