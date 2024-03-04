import instanceAxios from "../../_utils/axios";

export const fetchAllDiplomes = async () => {
  try {
    const response = await instanceAxios.get('/diplomes');
    if(response.data && response.data.status === 'success') {
      return response.data.data
    } else {
      throw new Error("Données reçues non valide ou erreur de requête.");
    }

  } catch (error) {
    console.error('Erreur lors de la récupération des diplomes', error);
    throw error;
  }
}