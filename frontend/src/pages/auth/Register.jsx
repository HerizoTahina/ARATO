import React, { useState } from 'react';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import NavBar from '../../components/nav-bar';
import './css/Register.css';
import profile from './../../assets/image/images_10.png';
import { register } from '../../store/auth.reducer';


const Register = () => {
    const [photo,setFiles] = useState("");
    const [name,setName] = useState('');
    const [contactUser,setcontactUser] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [password_confirmation,setPasswordConfirmation] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [role,setRole] = useState('utilisateur');

    const handleSubmit = (e)=>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('photo',photo);
        formData.append('name',name);
        formData.append('contactUser',contactUser);
        formData.append('email',email);
        formData.append('password',password);
        formData.append('password_confirmation',password_confirmation);
        formData.append('role',role);
        dispatch(register(formData));
       
        navigate('/login');
    };
   
    


    return (
        <>
        <header>
            <NavBar/>
        </header>
        <div className='fond'>
            <div className="inscription_title">
                    <h3>Créer un compte</h3>
                </div>
            <div className='inscription'>
                <form action="" onSubmit={handleSubmit}>
                    <div className='profile_image'>
                        <img src={photo ? URL.createObjectURL(photo) : profile}  alt='files'/>
                    </div>
                    <label htmlFor='file'>
                        Image :<DriveFolderUploadIcon className='Icon'/>
                    </label>
                    <input 
                        className='form-control'
                        type='file'
                        name='photo'
                        id='file'
                        onChange={(e) => {setFiles(e.target.files[0])}}
                        style={{display:'none'}}
                    
                    />
                    <input
                        className='form-control'
                        name='name'
                        type='text'
                        placeholder='Saisir votre nom!'
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                    <input
                        className='form-control'
                        name='contactUser'
                        type='text'
                        placeholder='Saisir votre contact!'
                        onChange={(e) => setcontactUser(e.target.value)}
                        value={contactUser}
                    />
                    <input
                        className='form-control'
                        name='email'
                        type='email'
                        placeholder='Saisir votre email'
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                    <input
                        className='form-control'
                        name='password'
                        type='password'
                        placeholder='Saisir votre password!'
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                    <input
                        className='form-control'
                        name='password_confirmation'
                        type='password'
                        placeholder='Confirmer votre password!'
                        onChange={(e) => setPasswordConfirmation(e.target.value)}
                        value={password_confirmation}
                    />
                    <input
                        className='form-control'
                        name='role'
                        value={role}
                        placeholder='Utilisateur'
                        disabled
                    /><br/>
                    <Button type='submit' className='inscrire_btn'>Inscrire</Button>
                </form>
                <p>Aller au champ de connéxion <Link to='/login'><span>Login!</span></Link></p>
            </div>
        </div>
        </>
    );
};

export default Register;