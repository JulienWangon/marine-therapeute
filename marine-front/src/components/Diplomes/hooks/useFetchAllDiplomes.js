import { useState, useEffect } from "react";

import { fetchAllDiplomes } from "../diplomesService";

const useFetchAllDiplomes = () => {

  const [diplomes, setDiplomes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await fetchAllDiplomes();
        setDiplomes(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false)
      }
    };

    fetchData();
  }, []);

  return { diplomes, setDiplomes, loading, error};
}

export default useFetchAllDiplomes;