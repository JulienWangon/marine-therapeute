import { useState, useEffect } from "react";
import { fetchAllTestimonies } from "../testimoniesService";

const useFetchAllTestimonies = () => {
  const [testimonies, setTestimonies] = useState({ "attente": [], "valide": [], "rejet": []});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
       const data = await fetchAllTestimonies();
       setTestimonies(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { testimonies, setTestimonies, isLoading, error};
}

export default useFetchAllTestimonies;