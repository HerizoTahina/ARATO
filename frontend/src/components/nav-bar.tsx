import React from 'react'

type Props = {}

function NavBar({ }: Props) {
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
                    <img src='/logoTandavanala.png' alt='logo-tandavanala' className='logo' />
                </div>
                <div className='right'>
                    <button className='btn-auth'>Nouveau blog</button>
                </div>
            </div>
        </nav>
    )
}

export default NavBar