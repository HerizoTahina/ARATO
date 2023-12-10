import React from 'react'
import NavBar from '../../../components/nav-bar'
import Detail from '../../../components/detail'
import Other from '../../../components/other'
import FeedbackForm from './feedback-form'
import Feedback from '../../../components/feedback'
import Footer from '../../../components/footer'

type Props = {}

function Details({ }: Props) {
    return (
        <>
            <header>
                <NavBar />
            </header>
            <div className="details">
                <Detail />
                <div className='details__others'>
                    {[...new Array(3)].map((other, index) => {
                        return <Other key={index} ></Other>
                    })}
                </div>

                <div className='details__feedbacks'>
                    <FeedbackForm />
                    <div className='lists'>
                        {[...new Array(3)].map((other, index) => {
                            return <Feedback key={index} />
                        })}
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Details