import React from 'react'
import { modalWithTitle } from './modal'
import BlogForm from '../contents/blog-form'
import { useNavigate } from 'react-router-dom'

type Props = {}

function NavBar({ }: Props) {
    const navigate = useNavigate()

    function openBlog() {
        modalWithTitle("Nouveau blog", <BlogForm />)
    }

    function redirectLoginPage() {
        navigate('/login')
    }

    function redirectHomePage() {
        navigate('/')
    }

    return (
        <nav className='nav-bar'>
            {/* <div className='nav-bar__slogan'>
                <img src='/logoTandavanala.png' alt='logo-tandavanala' className='logo' />
                <p className='description-text'>
                    Corridor Forestier Mieux Géré Et Bien Gouverné, Au Service Des Coummunautés Locales Vivant Dans Une Meilleure Condition De Vie Et Jouissant D'un Climat Juste.
                </p>
            </div> */}

            <div className='nav-bar__content'>
                <div className='left'>
                    <img src='/logoTandavanala.png' alt='logo-tandavanala' className='logo' onClick={redirectHomePage} />
                </div>
                <div className='right'>
                    <div>
                        <button onClick={redirectLoginPage} className='btn-auth'>Se connecter</button>
                    </div>
                    <button onClick={openBlog} className='btn-pub'>Nouveau blog</button>

                </div>
            </div>
        </nav>
    )
}

export default NavBar