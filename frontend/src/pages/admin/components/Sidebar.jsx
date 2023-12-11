import React, { useEffect } from 'react';
import '../CSS/Sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LineWeightOutlinedIcon from '@mui/icons-material/LineWeightOutlined';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import RememberMeOutlinedIcon from '@mui/icons-material/RememberMeOutlined';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import DomainOutlinedIcon from '@mui/icons-material/DomainOutlined';
import CorporateFareOutlinedIcon from '@mui/icons-material/CorporateFareOutlined';
import DynamicFormOutlinedIcon from '@mui/icons-material/DynamicFormOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import { Link } from 'react-router-dom';
import AuthUser from '../../../api/AuthUser';
import { useDispatch, useSelector } from 'react-redux';
import { togleTheme } from '../../../store/theme.reducer';
import '../style/dark.scss';


const Sidebar =   () => {
    const theme = useSelector(state => state.theme);
    const {http,logout} = AuthUser();
    const dispatch = useDispatch();
    
    const handleLogout = async () =>{
        const res = await http.get('/logout');

        if(res.status === 200){
            sessionStorage.clear();
            window.location.href = '/';
        }
        
    }

    
   

    return (
        <div className={theme.isLight ? 'sidebar': 'sidebar dark'}>
            <div className='top'>
                <span className='logo'>Backoffice</span>
            </div>
            <hr />
            <div className='center'>
                <ul>
                    <p className="title">MAIN</p>
                    <Link to='/home'>
                        <li>
                            <DashboardIcon className='Icon'/>
                            <span>Tableau de bord</span>
                        </li>
                    </Link>
                    <p className="title">LISTS</p>
                    <Link to='/users'>
                        <li>
                            <PersonOutlineOutlinedIcon className='Icon'/>
                            <span>Utilisateur</span>
                        </li>
                    </Link>
                    <Link to='/actualites'>
                        <li>
                            <LineWeightOutlinedIcon className='Icon'/>
                            <span>Actualités</span>
                        </li>
                    </Link>
                    <li>
                        <AccountTreeOutlinedIcon className='Icon'/>
                        <span>Projets</span>
                    </li>
                   
                    <li>
                        <DomainOutlinedIcon className='Icon'/>
                        <span>Domaine d'intervention</span>
                    </li>
                    <Link to='/about'>
                        <li>
                            <CorporateFareOutlinedIcon className='Icon'/>
                            <span>ONG</span>
                        </li>
                    </Link>
                    <li>
                        <DynamicFormOutlinedIcon className='Icon'/>
                        <span>Axes stratégiques</span>
                    </li>
                    <li>
                        <ExitToAppOutlinedIcon className='Icon'/>
                        <span onClick={handleLogout}>Déconnexion</span>
                    </li>
                </ul>
            </div>
            <div className='bottom'>
                    <div className="colorOption" onClick={e => {
                        dispatch(togleTheme(true));
                        localStorage.setItem("theme","light")
                        }}></div>
                    <div className="colorOption" onClick={e => {
                        dispatch(togleTheme(false));
                        localStorage.setItem("theme","dark")
                    }}></div>
            </div>
        </div>
    );
};

export default Sidebar;