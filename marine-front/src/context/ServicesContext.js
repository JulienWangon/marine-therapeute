import React, { createContext, useContext } from "react";
import useFetchAllServices from "../components/ServicesCard/hooks/useFetchAllServices";

const ServicesContext = createContext();

export const ServicesProvider = ({ children }) => {
  const { services, setServices, loading, error } = useFetchAllServices();

  return (
    <ServicesContext.Provider value={{ services, setServices, loading, error }}>
      {children}
    </ServicesContext.Provider>
  );
};

export const useServices = () => useContext(ServicesContext);