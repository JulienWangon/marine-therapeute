import React, { createContext, useContext } from "react";
import useFetchAllTestimonies from "../components/Testimonies/hooks/useFetchAllTestimonies";

const TestimoniesContext = createContext();

export const TestimoniesProvider = ({ children }) => {
  const { testimonies, setTestimonies, isLoading, error } = useFetchAllTestimonies();

  return (
    <TestimoniesContext.Provider value={{ testimonies, setTestimonies, isLoading, error }}>
      {children}
    </TestimoniesContext.Provider>
  );
};

export const useTestimonies = () => useContext(TestimoniesContext);

