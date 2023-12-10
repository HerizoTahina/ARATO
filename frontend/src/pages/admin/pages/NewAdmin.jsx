import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import '../CSS/NewAdmin.scss';
import noImg from '../image/images.png';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { register } from '../../../store/auth.reducer';

const NewAdmin = () => {

    const theme = useSelector(state => state.theme);
    const [name,setName] = useState('');
    const [contactUser,setcontactUser] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [password_confirmation,setPasswordConfirmation] = useState('');
    const [role,setRole] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [photo,setFiles] = useState('');

    
  
    const handleRegister = (e) => {
        e.preventDefault();
        // const values = {
        //     photo,
        //     name,
        //     contactUser,
        //     email,
        //     password,
        //     password_confirmation
        //  }
        const formData = new FormData();
        formData.append('photo',photo);
        formData.append('name',name);
        formData.append('contactUser',contactUser);
        formData.append('email',email);
        formData.append('password',password);
        formData.append('password_confirmation',password_confirmation);
        formData.append('role',role);
        dispatch(register(formData));
        
        navigate('/users');
        // setFile('');
        // setNom('');
        // setContact('');
        // setMail('');
        // setPassword(''); 
    };
    return (
        <div className={theme ? 'new dark': 'new'}>
            <Sidebar/>
            <div className="newContainer">
                <Navbar/>
                <div className="top">
                    <h1>Ajout d'un nouveau admin</h1>
                </div>
                <div className="bottom">
                    <div className="left">
                        <img src={photo ? URL.createObjectURL(photo) : noImg}  alt='files'/>
                    </div>
                    <div className="right">
                       <form action="" onSubmit={handleRegister}>
                            <div className="formInput">
                                <label htmlFor='file'>
                                    Image :<DriveFolderUploadIcon className='Icon'/>
                                </label>
                                <input type='file' id='file' name="photo"  onChange={(e) => {setFiles(e.target.files[0])}} style={{display:'none'}} required/>
                            </div>
                            <div className="flex_form">
                                <div className="nom_contact">
                                    <div className="formInput">
                                        <label>Nom</label>
                                        <input type='text'  value={name} name="name" onChange={(e) => setName(e.target.value)} placeholder='Votre Name !' required/>
                                    </div>
                                    <div className="formInput">
                                        <label>Contact</label>
                                        <input type='text' value={contactUser} name="contactUser" onChange={(e) => setcontactUser(e.target.value)} placeholder='Votre contact !' required/>
                                    </div>
                                    <div className="formInput">
                                        <label>Role</label>
                                        <select
                                          className="form-control"
                                          value={role}
                                          name='role'
                                          required
                                          onChange={(e) => setRole(e.target.value)}
                                        >
                                          <option>Selectionner ici</option>
                                          <option value="administrateur">Administrateur</option>
                                          <option value="utilisateur">Utilisateur</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="mail_password">
                                     <div className="formInput">
                                         <label>Email</label>
                                         <input type='email' value={email} name="email" onChange={(e) => setEmail(e.target.value)} placeholder='Votre email !' required/>
                                     </div>
                                     <div className="formInput">
                                         <label>Mot de passe</label>
                                         <input type='password' value={password} name="password" onChange={(e) => setPassword(e.target.value)} placeholder='Mot de passe !' required/>
                                     </div>
                                     <div className="formInput">
                                         <label>Confirmation mot de passe</label>
                                         <input type='password' value={password_confirmation} name="password_confirmation" onChange={(e) => setPasswordConfirmation(e.target.value)} placeholder='Mot de passe !' required/>
                                     </div>
                                     
                                </div>
                            </div>
                            <button type='submit'>Ajouter</button>
                            
                       </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewAdmin;