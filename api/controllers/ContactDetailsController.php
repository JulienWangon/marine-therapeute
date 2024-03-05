<?php

require_once __DIR__ . '/../models/ContactDetails.php';
require_once __DIR__ . '/../repository/ContactDetailsRepository.php';
require_once __DIR__ . '/../classes/ResponsesHelper.php';

class ContactDetailsController {
    private $contactDetailsRepository;

    public function __construct(ContactDetailsRepository $contactDetailsRepository) {
        $this->contactDetailsRepository = $contactDetailsRepository; 
    }

    public function getContactDetails() {
        try {
            $contactDetails = $this->contactDetailsRepository->getAllContactDetails();

            if (empty($contactDetails)) {
                ResponseHelper::sendResponse(['status' => 'error', 'message' => 'Aucunes informations trouvées.']);
                return;
            }

            $contactDetailsArray = array_map(function ($contactDetail) {
                return [
                    'id' => $contactDetail->getId(),
                    'numero' => $contactDetail->getNumero(),
                    'rue' => $contactDetail->getRue(),
                    'codePostal' => $contactDetail->getCodePostale(),
                    'ville' => $contactDetail->getVille(),
                    'phone' => $contactDetail->getPhone()

                ];
            }, $contactDetails);

            ResponseHelper::sendResponse(['status' => 'success', 'data' => $contactDetailsArray]);
        } catch (Exception $e) {
            ResponseHelper::sendResponse(['status' => 'error', 'message' => $e->getMessage()], 400);
        }
    } 


}