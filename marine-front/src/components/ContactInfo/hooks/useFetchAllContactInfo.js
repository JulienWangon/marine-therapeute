import { useState, useEffect } from "react";

import { fetchAllContactInfo } from "../contactInfoService";

const useFetchAllDiplomes = () => {

  const [contactInfo, setContactInfo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await fetchAllContactInfo();
        setContactInfo(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false)
      }
    };

    fetchData();
  }, []);

  return { contactInfo, setContactInfo, loading, error};
}

export default useFetchAllDiplomes;