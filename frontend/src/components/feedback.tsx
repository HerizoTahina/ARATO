import React from 'react'
import { ReactSVG } from 'react-svg'

type Props = {}

function Feedback({ }: Props) {
    return (
        <article className='feedback'>
            <div className='feedback__icon'>
                <ReactSVG src='/svg/quotes-ltr.svg' />
            </div>

            <div className='feedback__content'>
                <p className='description'>
                    Lorem ipsum dolor sit amet consectetur. Et amet magna cursus leo amet justo. At rhoncus nec sem placerat facilisis tortor etiam morbi accumsan. Imperdiet lobortis tortor morbi nisl tellus. Sapien.
                </p>
                <div className='user'>
                    <img src='/images/user-1.png' alt='user' className='user__image' />
                    <div className='user__about'>
                        <p className='name'>ROBUSTE Manohisafidy</p>
                        <p className='role'>Utilisateur</p>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default Feedback