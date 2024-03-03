import instanceAxios from '../../_utils/axios';

export const fetchAllTestimonies = async () => {
  try {
    const response = await instanceAxios.get('/testimonies');
    if(response.data && response.data.status === 'success') {
      return response.data.data;
    } else {
      throw new Error(response.data.message || "Données reçues non valide ou erreur de requête.")
    }

  } catch (error) {
    const errorMessage = error.response.data.message;
    throw new Error(errorMessage);
  }
}