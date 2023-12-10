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




const Sidebar =   () => {
    const {http,logout} = AuthUser();
    const handleLogout = async () =>{
        const res = await http.get('/logout');

        if(res.status === 200){
            sessionStorage.clear();
            window.location.href = '/';
        }
        
    }

    
   

    return (
        <div className='sidebar'>
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
                            <span>Dashboard</span>
                        </li>
                    </Link>
                    <p className="title">LISTS</p>
                    <Link to='/users'>
                        <li>
                            <PersonOutlineOutlinedIcon className='Icon'/>
                            <span>Users</span>
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
                    <li>
                        <CorporateFareOutlinedIcon className='Icon'/>
                        <span>ONG</span>
                    </li>
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
                    <div className="colorOption"></div>
                    <div className="colorOption"></div>
            </div>
        </div>
    );
};

export default Sidebar;