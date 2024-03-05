import React, { createContext, useContext } from "react";
import useFetchAllDiplomes from "../components/Diplomes/hooks/useFetchAllDiplomes";

const DiplomesContext = createContext();

export const DiplomesProvider = ({ children }) => {
  const { diplomes, setDiplomes, loading, error } = useFetchAllDiplomes();

  return (
    <DiplomesContext.Provider value={{ diplomes, setDiplomes, loading, error }}>
      {children}
    </DiplomesContext.Provider>
  );
};

export const useDiplomes = () => useContext(DiplomesContext);