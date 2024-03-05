import React, { createContext, useContext } from "react";
import useFetchAllContactInfo from '../components/ContactInfo/hooks/useFetchAllContactInfo';

const ContactInfoContext = createContext();

export const ContactInfoProvider = ({ children }) => {
  const { contactInfo, setContactInfo, loading, error } = useFetchAllContactInfo();

  return (
    <ContactInfoContext.Provider value={{ contactInfo, setContactInfo, loading, error }}>
      {children}
    </ContactInfoContext.Provider>
  );
};

export const useContactInfo = () => useContext(ContactInfoContext);