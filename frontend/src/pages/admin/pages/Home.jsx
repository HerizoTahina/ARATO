import React, { useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import '../CSS/Home.scss'
import Navbar from '../components/Navbar';
import Widgets from '../components/Widgets';
import Charts from '../components/Charts';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const Home = () => {
    // const {getToken,http} = AuthUser();
    const [token,setToken] = useState(null);
    const theme = useSelector(state => state.theme);
console.log(theme);
    
    // if(!getToken()){
    //     return <Accueil/>;
    // }
    
    

    
    return (
        <div className={theme.isLight ?'home': 'home dark'}>
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