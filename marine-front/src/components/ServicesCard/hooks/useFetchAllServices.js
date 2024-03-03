import { useState, useEffect } from "react";

import { fetchAllServices } from "../serviceCardService";

const useFetchAllServices = () => {

  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await fetchAllServices();
        setServices(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false)
      }
    };

    fetchData();
  }, []);

  return { services, setServices, loading, error};
}

export default useFetchAllServices;