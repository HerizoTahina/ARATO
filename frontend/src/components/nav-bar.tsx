import React from 'react'
import { modalWithTitle } from './modal';
import BlogForm from '../contents/blog-form';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {Nav, Navbar,Container, NavDropdown} from 'react-bootstrap';

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
                <div>
                <Navbar expand='lg' className='navigation'>
                    <Container className='navigations'>
                
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav
                     className="me-auto my-2 my-lg-0"
                     style={{maxHeight: '100px'}}
                     navbarScroll
                >
                   
                    
                    <Nav.Link as={Link} to='/' className='espace'>Accueil</Nav.Link>
                    <NavDropdown title="Axes stratégiques" className='espace'  id="collapsible-nav-dropdown">
                        
                            <NavDropdown.Item className='dropDown'>
                                <Link to='/ressource' id='navig'>Gouvernances des ressources naturelle</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item className='dropDown'>
                                <Link to='/securiteAlimentaire' id='navig'>Securité alimentaire</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item className='dropDown'>
                                <Link to='/changementClimatique' id='navig'>Changement climatique</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item className='dropDown'>
                                <Link to='/infoEducComm' id='navig'>Information, Education et communication</Link>
                            </NavDropdown.Item>
                       
                       
                    </NavDropdown>
                    <NavDropdown title="Le corridor forrestier"  className='espace' id="collapsible-nav-dropdown">
                        <NavDropdown.Item className='dropDown'>
                            <Link to='carateristique' id='navig'>Caractéristiques et role</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item className='dropDown'>
                           <Link to='enjeux' id='navig'>Les enjeux</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item className='dropDown'>
                            <Link to='perspective' id='navig'>Perspective</Link>
                        </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link className='espace'>Vidéo et photo</Nav.Link>
                </Nav>
                    
                </Navbar.Collapse>
                {/* {token ? <div className='items'>
                    <div className="profile_nom">
                        <p>{user.name}<KeyboardArrowDownOutlinedIcon/></p>
                    </div>
                    <div className="item">
                        <img className='profile' src={`http://127.0.0.1:8000/storage/${user.picture}`} alt=''/>
                    </div>
                </div> : ''}

                {!token ? <Link to='/login'><button className='btn-connecter'>Se connecter</button></Link> : <button className='btn-deconnecter' onClick={handleLogout}>Déconnexion</button>} */}
                
            </Container>
    </Navbar>
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