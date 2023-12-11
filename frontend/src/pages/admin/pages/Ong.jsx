import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../components/Navbar';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload'
import Sidebar from '../components/Sidebar';
import noImg from '../image/images.png';

const Ong = (props) => {
    const theme = useSelector(state => state.theme);
    const [logo, setFiles] = useState('');
    const [facebook,setFacebook] = useState('');
    const [youtube,setYoutube] = useState('');
    const [twitter,setTwitter] = useState('');
    const [mail,setMail] = useState('');
    const [adresse,setAdresse] = useState('');
    const [nom,setNom] = useState('');
    const [telephone,setTelephone] = useState('');
    const [slogan,setSlogan] = useState('');
    return (
        <div className={theme.isLight ? 'new':'new dark'}>
            <Sidebar/>
            <div className="newContainer">
                <Navbar/>
                <div className="top">
                    <h1>Ajout de l'à propos</h1>
                </div>
                <div className="bottom">
                    <div className="left">
                        <img src={logo ? URL.createObjectURL(logo) : noImg}  alt='files'/>
                    </div>

                    <div className="right">
                        <form action="">
                            <div className="formInput">
                                <label htmlFor="file">
                                    Image : <DriveFolderUploadIcon className='Icon'/>
                                </label>
                                <input type='file' id='file' name="photo"  onChange={(e) => {setFiles(e.target.files[0])}} style={{display:'none'}} required/>
                            </div>
                            <div className="flex_form">
                                <div className="nom_contact">
                                    <div className="formInput">
                                        <label>Nom de l'ONG</label>
                                        <input type='text' value={nom} onChange={(e) => setNom(e.target.value)} placeholder="Nom de l'ONG"/>
                                    </div>
                                    <div className="formInput">
                                        <label>Facebook</label>
                                        <input type='text' value={facebook} onChange={(e) => setFacebook(e.target.value)} placeholder="Nom facebook de l'ONG"/>
                                    </div>
                                    <div className="formInput">
                                        <label>Youtube</label>
                                        <input type='text' value={youtube} onChange={(e)=> setYoutube(e.target.value)} placeholder="Youtube de l'ONG"/>
                                    </div>
                                    <div className="formInput">
                                        <label>Twitter</label>
                                        <input type='text' value={twitter} onChange={(e)=>setTwitter(e.target.value)} placeholder="Twitter de l'ONG"/>
                                    </div>
                                   
                                </div>
                                <div className="mail_password">
                                    <div className="formInput">
                                        <label>Adresse</label>
                                        <input type="text" value={adresse} onChange={(e)=>setAdresse(e.target.value)} placeholder="Adresse de l'ONG"/>
                                    </div>
                                    <div className="formInput">
                                        <label>Mail</label>
                                        <input type='text' value={mail} onChange={(e)=>setMail(e.target.value)} placeholder="Email de l'ONG"/>
                                    </div>
                                    <div className="formInput">
                                        <label>Contact</label>
                                        <input type='text' value={telephone} onChange={(e)=>setTelephone(e.target.value)} placeholder="Contact de l'ONG"/>
                                    </div>
                                    <div className='formInput'>
                                        <label>Slogan</label>
                                        <input type='text' value={slogan} onChange={(e)=>setSlogan(e.target.value)} placeholder="Slogan de l'ONG"/>
                                    </div>
                                    </div>
                                </div>
                                <button type='submit'>Ajouter</button> 
                                </form> 
                            </div>
                    </div>
                </div>
            </div>);
};

export default Ong;