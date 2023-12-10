import React from 'react'
import { Input, Textarea } from '../../../components/field'

type Props = {}

function FeedbackForm({ }: Props) {
    return (
        <form className='feedback-form'>
            <h3 className='feedback-form__title'>FEEDBACK</h3>
            <p className='feedback-form__desc'>Entrer votre avis sur le projet</p>
            <div className='input-inline'>
                <Input id='nom' label='Nom' placeholder='Votre nom' type='text' />
                <Input id='email' label='Email' placeholder='Votre adresse e-mail' type='email' />
            </div>
            <div className='input-inline'>
                <Input id='objet' label='Objet' placeholder='Votre objet' type='text' />
                <Input id='point' label='Point de vue' placeholder='Votre point de vue' type='text' />
            </div>
            <Textarea id='appreciation' label='Appreciation' placeholder='Votre appreciation' type='text' />
            <button type='submit' className='send-feedback'>Envoyer</button>
        </form>
    )
}

export default FeedbackForm