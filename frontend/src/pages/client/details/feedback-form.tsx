import React from 'react'
import { Input, Textarea } from '../../../components/field'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { IFeedbackForm, feedbackFormSchema } from '../../../schema/feedback-schema'
import axios from 'axios'
import { BASE_URL } from '../../../constants/env'
import { useAppDispatch } from '../../../hooks/store'
import { wait } from '../../../helpers/wait'
import { getAllProjects } from '../../../store/data.reducer'
import { modalToast } from '../../../components/modal'
import useAuthenticated from '../../../hooks/useAuthenticated'

type Props = {
    projectId?: string
}

function FeedbackForm({ projectId }: Props) {
    const dispatch = useAppDispatch()
    const { token, currentUser } = useAuthenticated()

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        mode: 'onSubmit',
        resolver: yupResolver(feedbackFormSchema)
    })

    const handleClickSubmit = (data: IFeedbackForm) => {
        const copyData: IFeedbackForm & { projet: string, utilisateur: string } = {
            ...data,
            projet: `/api/projets/${projectId}`,
            utilisateur: `/api/utilisateurs/${currentUser?.id}`
        }

        axios.post(`${BASE_URL}/api/feedback`, copyData, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
            .then(async res => {
                modalToast('Votre feedback a été enregistré', 'success')
                dispatch(getAllProjects())
                reset()
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='feedback-form'>
            <h3 className='feedback-form__title'>FEEDBACK</h3>
            <p className='feedback-form__desc'>Entrer votre avis sur le projet</p>
            <form onSubmit={handleSubmit(handleClickSubmit)}>
                <div className='input-inline'>
                    <Input id='nom' label='Nom' placeholder='Votre nom' type='text' register={register('nomFeedback')} />
                    <Input id='email' label='Email' placeholder='Votre adresse e-mail' type='email' register={register('email')} />
                </div>
                <div className='input-inline'>
                    <Input id='objet' label='Objet' placeholder='Votre objet' type='text' register={register('objetMail')} />
                    <Input id='point' label='Point de vue' placeholder='Votre point de vue' type='text' register={register('pointDeVue')} />
                </div>
                <Textarea id='appreciation' label='Appreciation' placeholder='Votre appreciation' type='text' register={register('appreciation')} />
                <button type='submit' className='send-feedback'>Envoyer</button>
            </form>
        </div>
    )
}

export default FeedbackForm