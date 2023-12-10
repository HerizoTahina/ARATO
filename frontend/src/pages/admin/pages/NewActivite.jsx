import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import noImg from '../image/images.png';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload'
import { useSelector } from 'react-redux';

const NewActivite = () => {
    const theme = useSelector(state => state.theme);
    const [photo,setFiles] = useState('');
    const [titre,setTitre] = useState('');
    const [description,setDescription] = useState('');
    const [date,setDate] = useState('');
    const [type,setType] = useState('');
    const [source,setSource] = useState('');
    const [impact,setImpact] = useState('');
    const [statut,setStatut] = useState('');
    const [duree,setDuree] = useState('');

    const formData = new FormData();
    formData.append('titreActivite', titre);
    formData.append('descActivite',description);
    formData.append('imageActivite', photo);
    formData.append('dateDeCreation', date);
   // formData.append('')

    return (
        <div className={theme ? 'new':'new dark'}>
            <Sidebar/>
            <div className="newContainer">
                <Navbar/>
                <div className="top">
                    <h1>Ajout d'un nouveau activité</h1>
                </div>
                <div className="bottom">
                    <div className="left">
                        <img src={photo ? URL.createObjectURL(photo) : noImg}  alt='files'/>
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
                                        <label>Titre</label>
                                        <input type='text' value={titre} onChange={(e) => setTitre(e.target.value)} placeholder="Titre de l'activité"/>
                                    </div>
                                    <div className="formInput">
                                        <label>Déscription</label>
                                        <textarea value={description} onChange={(e)=> setDescription(e.target.value)}></textarea>
                                    </div>
                                    <div className="formInput">
                                        <label>Date de l'activité</label>
                                        <input type='date' value={date} onChange={(e)=>setDate(e.target.value)}/>
                                    </div>
                                </div>
                                <div className="mail_password">
                                    <div className="formInput">
                                        <label>Type de l'activité</label>
                                        <select
                                          className="form-control"
                                          value={type}
                                          required
                                          onChange={(e) => setType(e.target.value)}
                                        >
                                          <option>Selectionner ici</option>
                                          <option value="article">Article</option>
                                          <option value="actualite">Actualité</option>
                                          <option value="projet">Projet</option>
                                        </select>
                                    </div>
                                    {type === 'article' ? <div className="formInput">
                                        <label>Source de l'article</label>
                                        <input type='text' value={source} onChange={(e)=>setSource(e.target.value)}/>
                                    </div> : ''}
                                    {type === 'actualite' ? <div className='formInput'>
                                        <label>Impact de l'actualite</label>
                                        <input type='text' value={impact} onChange={(e)=>setImpact(e.target.value)}/>
                                    </div> : ''}
                                    {type === 'projet' ? <div className='formInput'>
                                        <label>Statut du projet</label>
                                        <input type='text' value={statut} onChange={(e)=>setStatut(e.target.value)}/>
                                        <label>Durée du projet</label>
                                        <input type='text' value={duree} onChange={(e)=>setDuree(e.target.value)}/>
                                    </div> : ''}
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewActivite;