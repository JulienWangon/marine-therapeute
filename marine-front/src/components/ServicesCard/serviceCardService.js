import instanceAxios from "../../_utils/axios";

//Optenir la liste des services
export const fetchAllServices = async () => {
  try {
    const response = await instanceAxios.get('/services');
    if(response.data && response.data.status === 'success') {
      return response.data.data
    } else {
      throw new Error("Données reçues non valide ou erreur de requête.");
    }

  } catch (error) {
    console.error('Erreur lors de la récupération des services', error);
    throw error;
  }
}