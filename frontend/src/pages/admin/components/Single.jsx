import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import '../CSS/Single.scss';
import Charts from './Charts';


const Single = ({Id,admin,setshowSingle}) => {
    const selected = admin.filter((e)=> e.id === Id);
    const [picture,setPicture] = useState(selected[0].picture);
    const [nom,setNom] = useState(selected[0].name);
    const [contact,setContact] = useState(selected[0].contactUser);
    const [email,setEmail] = useState(selected[0].email);

    return (
        <div className="singleContainer">
            <div className='single'>
                    <div className="top">
                        <div className="left">
                            <div className="editButton">Edit</div>
                            <h1 className="title">Information</h1>
                            <div className="item">
                                <img 
                                    src={`http://127.0.0.1:8000/storage/${picture}`} 
                                    alt='' 
                                    className='itemImg'
                                />
                                <div className='details'>
                                    <h1 className="itemTitle">A propos de l'utilisateur {nom}</h1>
                                    <div className="detailItem">
                                        <span className="itemKey">Nom :</span>
                                        <span className="itemValue">{nom}</span>
                                    </div>
                                    <div className="detailItem">
                                        <span className="itemKey">Contact :</span>
                                        <span className="itemValue">{contact}</span>
                                    </div>
                                    <div className="detailItem">
                                        <span className="itemKey">Email:</span>
                                        <span className="itemValue">{email}</span>
                                    </div>
                                    
                                </div>
                            </div>
                            <button className='btn-retour' onClick={()=>setshowSingle('')}>Annuler</button>
                        </div>
                        <div className="right">
                            <Charts aspect={2 / 1} />
                        </div> 
                        
                    </div>
            </div>
           
        </div>
    );
};

export default Single;