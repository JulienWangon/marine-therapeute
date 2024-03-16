import instanceAxios from "../../_utils/axios";

export const sendContactFormData = async (formData) => {
  try {
    const response = await instanceAxios.post('/contact', formData);
    if(response.data && response.data.status === 'success') {
      return response.data;
    } else {
      throw response.data.message;
    }

  } catch (error) {
    console.error("Erreur lors de l'envoi des données du formulaire de contact", error);
    throw error;
  }
}