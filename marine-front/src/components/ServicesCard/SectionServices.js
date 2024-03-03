import React from 'react';
import { useServices } from '../../context/ServicesContext';
import ServicesCard from './ServicesCard';

import './sectionService.css';

const SectionServices = () => {
  const { services, loading, error } = useServices();

  if(loading) return <div>Chargement des services...</div>;
  if(error) return <div>Erreur lors du chargement des services: {error}</div>;

  return (
    <>
      <div className="servicesWrapper">
        {services.map((service) => (
          <ServicesCard
            key={service.idService}
            serviceName={service.serviceName}
            pathImage={service.pathImage}
          />
        ))}
      </div>      
    </>
  );
};

export default SectionServices;