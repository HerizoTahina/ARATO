import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import '../CSS/User.scss';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { border, borderRadius } from '@mui/system';
import Single from '../components/Single';
import { Link } from 'react-router-dom';
import { deleteUser } from '../../../store/auth.reducer';


const User = () => {
    const adminList = useSelector(state => state.users);
    const theme = useSelector(state => state.theme);
    const dispatch = useDispatch();
    const admin = adminList.admin;
  
    const [showSingle,setshowSingle] = useState('');
    
    const handleDelete = (id) => {
      dispatch(deleteUser(id));
    };

    
    return (
        <div className={theme ? 'home' : 'home dark'}>
            <Sidebar/>
            <div className="homeContainer">
                <Navbar/>
                {showSingle === '' ? (<div className="listeUsers">
                    <h1>Liste des utilisateurs</h1>
                <div className="btn_search">
                    <Link to='/addNewAdmin'>
                      <button className='add-btn'>
                          <AddCircleOutlineOutlinedIcon className='Icons'/>
                          Ajouter
                      </button>
                    </Link>
                    <div className="search">
                        <input type="text" placeholder='recherche...' />
                        <SearchOutlinedIcon/>
                    </div>
                </div>
                
                <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                          <TableHead>
                            <TableRow>
                              <TableCell className='tableCell'>Picture</TableCell>
                              <TableCell className='tableCell'>Nom</TableCell>
                              <TableCell className='tableCell'>Contact</TableCell>
                              <TableCell className='tableCell'>Email</TableCell>
                              <TableCell className='tableCell'>Role</TableCell>
                              <TableCell className='tableCell'>Action</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {admin?.map((admin) => (
                              <TableRow
                                key={admin.id}                              
                              >
                                <TableCell><img className='profilPict' src={`http://127.0.0.1:8000/storage/${admin.picture}`} width='50px' height='50px'/></TableCell>
                                <TableCell>{admin.name}</TableCell>
                                <TableCell>{admin.contactUser}</TableCell>
                                <TableCell>{admin.email}</TableCell>
                                <TableCell>{admin.role}</TableCell>
                                <TableCell className='cellAction'>
                                  <div className="viewButton" onClick={()=>setshowSingle(admin.id)}>Voir</div>
                                  <div className="deleteButton" onClick={()=>handleDelete(admin.id)}>Supprimer</div>
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                </TableContainer>
                </div>) : <Single Id={showSingle} admin={admin} setshowSingle={setshowSingle}/>}
            </div>
        </div>
    );
};

export default User;