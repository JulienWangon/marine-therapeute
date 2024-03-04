import React, { createContext, useContext } from "react";
import useFetchAllDiplomes from "../components/Diplomes/hooks/useFetchAllDiplomes";

const DiplomesContext = createContext();

export const DiplomesProvider = ({ children }) => {
  const { services, setServices, loading, error } = useFetchAllDiplomes();

  return (
    <DiplomesContext.Provider value={{ services, setServices, loading, error }}>
      {children}
    </DiplomesContext.Provider>
  );
};

export const useServices = () => useContext(DiplomesContext);