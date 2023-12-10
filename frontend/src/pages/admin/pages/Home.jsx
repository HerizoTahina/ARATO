import React, { useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import '../CSS/Home.scss'
import Navbar from '../components/Navbar';
import Widgets from '../components/Widgets';
import Charts from '../components/Charts';
import { useState } from 'react';

const Home = () => {
    // const {getToken,http} = AuthUser();
    const [token,setToken] = useState(null);


    
    // if(!getToken()){
    //     return <Accueil/>;
    // }
    
    

    
    return (
        <div className='home'>
            <Sidebar/>
            <div className="homeContainer">
                <Navbar/>
                <div className="widgets">
                    <Widgets type='user'/>
                    <Widgets type='actualites'/>
                    <Widgets type='projets'/>
                    <Widgets type='axes strategiques'/>      
                </div>
                <div className="charts">
                    <Charts/>
                </div>
            </div> 
        </div>
    ); 
};

export default Home;