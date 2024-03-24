import React from 'react';

import './diplomeList.css';

const DiplomeList = ({id, diplome, intitule, lieu }) => {

  
  return (
    <li className="diplomeItem">{diplome} "{intitule}" - {lieu}</li>
  );
};

export default DiplomeList;