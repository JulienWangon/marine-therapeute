import React from 'react';
import DiplomeList from '../DiplomesList/DiplomeList';
import { useDiplomes } from '../../../context/DiplomesContext';

import lact from '../../../assets/img/LACT.webp';
import paris8 from '../../../assets/img/PARIS8.webp';
import saclay from '../../../assets/img/SACLAY.webp';
import syprene from '../../../assets/img/SYPRENE.webp';

import './diplomeSection.css';

const DiplomeSection = () => {
  const { diplomes, isLoading, error } = useDiplomes();

  if(isLoading) return <div>Chargement des services...</div>;
  if(error) return <div>Erreur lors du chargement des diplômes: {error}</div>;

  return (
    <>
      <h2>Mes formations</h2>
        <ul className="diplomeList">
          {diplomes.map((diplome) => (
              <DiplomeList
                key={diplome.id}
                diplome={diplome.diplome}
                intitule={diplome.intitule}
                lieu={diplome.lieu}
              />
          ))}
        </ul>
        <p className="infoText">Je suis également en cours de spécialisation en thérapie brève systémique et stratégique à LACT, représentant Ecole de Palo Alto pour obtenir le diplôme de Systémicienne et clinitienne de la relation.</p>
        <div className="logoDiplomeWrapper">
          <div className="logoLine1">
            <img className="logo1" src={syprene} alt="université Paris 8"/>
            <img className="logo2" src={saclay} alt="université Paris Saclay"/>
          </div>
          <div className="logoLine1">
            <img className="logo3" src={paris8} alt="université Paris 8"/>
            <img className="logo4" src={lact} alt="systemic practice research network"/>
          </div>        
        </div>
    </>
  );
};

export default DiplomeSection;