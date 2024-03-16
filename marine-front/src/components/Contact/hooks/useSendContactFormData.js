import { useState } from "react";
import { sendContactFormData } from "../contactService";

const useSendContactFormData = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (formData) => {
    setIsSubmitting(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const response = await sendContactFormData(formData);

      if (response.data && response.data.status === 'success') {
        setSuccessMessage(response.data.message || "Le formulaire a été envoyé avec succès.");
      } 
    } catch (error) {
      if (error.response && error.response.data) {
        // Gérer les erreurs retournées par l'API
        setErrorMessage(error.response.data.message || "Une erreur s'est produite lors de l'envoi du formulaire.");
      } else {
        // Gérer les erreurs de réseau ou autres erreurs non liées à la réponse de l'API
        setErrorMessage("Problème de connexion ou erreur serveur.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return { handleSubmit, isSubmitting, successMessage, errorMessage };
};

export default useSendContactFormData;
