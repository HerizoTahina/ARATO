import React from 'react';
import Navigation from '../../../components/nav-bar';
import '../../../styles/pages/Gouvernance.css';
 import Footer from '../../../components/footer';

const Gouvernance = () => {
    return (
        <div>
            <Navigation/>
            <div className="fond_gouv">
                <div className='fond_transparent'>
                    <div className='titre_cadre'>
                        <div className="line"></div>
                        <h1 className='gouvernance'>Gouvernance des ressources naturelle</h1>
                        <div className="line"></div>     
                    </div>
                </div>
            </div>
            <div className="corps">
                <div className="subtitles">
                    <div className="line_gradient1"></div>
                        <h1 className='subtitle'>OBJECTIFS SPECIFIQUES</h1>
                    <div className="line_gradient2"></div>
                </div>
                
                <p className='text'>Renforcer la gouvernance des Ressources Naturelles du corridor forestier de Fianarantsoa.</p>
                <div className="subtitles">
                    <div className="line_gradient1"></div>
                        <h1 className="subtitle">Principes</h1>
                    <div className="line_gradient2"></div>
                </div>
                <p className='text'>Efficience et efficacité, Transparence, Ouverture et culture du dialogue, Subsidiarité, Redevabilités, Participation Responsabilisation.</p>
                <div className="subtitles">
                    <div className="line_gradient1"></div>
                        <h1 className="subtitle">Points stratégiques</h1>
                    <div className="line_gradient2"></div>
                </div>
                <p className='text'>Opérationnaliser une ingénierie de formation des Communes, des Coba et des associations ouvrant à la sauvegarde du corridor forestier, aux fins de les permettre de s'approprier de leurs missions, r�les et responsabilités 
                (législation, plan d'aménagement, PTA...)
                Faciliter l'opérationnalisation des COBA dans leur role de plaidoyer, de gestion durable des ressources naturelles (fonctionnement, missions de controle et de sensibilisation)
                Mettre en place un système de collaboration entre les autorités locales, décideurs et communautés de base (Région, Communes, Justice, Administration forestière) 
                pour assurer la mise en oeuvre des activités de bonne gouvernance environnementale dans la gestion du Corridor forestier, 
                et un cadre de concertation de la société civile, du secteur privé et de l'Etat dans la conception et la mise en oeuvre de la politique environnementale
                Renforcer le système de veille environnementale par District qui implique la société civile, le secteur privé et l'Etat
                Et faciliter les missions conjointes d'observation et de sensibilisation sur terrain.</p>
                <div className="subtitles">
                    <div className="line_gradient1"></div>
                        <h1 className="subtitle">Les résultats attendus</h1>
                    <div className="line_gradient2"></div>
                </div>
                <p className="text">Dans le cadre de cet axe stratégique, l'ONG Tandavanala espère atteindre les résultats suivants en 2015 : <br />
                <p className="elements">
                    - Les capacités organisationnelles et techniques des COBA sont renforcées,
                    - Des actions de plaidoyer et des prises de responsabilités dans la gestion dur corridor sont palpables,
                    - Un système de collaboration entre autorités, décideurs et COBA / Un cadre de concertation fonctionnel pour le renforcement de la politique environnemental sont mis en place
                    - Système de veille mis en place et opérationnel par District / Des missions d'observation effectuées</p>
                </p>
            </div>
            <Footer/>
        </div>
    );
};

export default Gouvernance;