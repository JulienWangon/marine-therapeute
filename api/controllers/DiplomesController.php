<?php

require_once __DIR__ . '/../models/Diplomes.php';
require_once __DIR__ . '/../repository/DiplomesRepository.php';
require_once __DIR__ . '/../classes/ResponsesHelper.php';

class DiplomesController {
  
  private $diplomesRepository;

  public function __construct(DiplomesRepository $diplomesRepository) {
    $this->diplomesRepository = $diplomesRepository;
  }

  public function getAllDiplomes() {
    try {
      $diplomes = $this->diplomesRepository->getDiplomes();

      if (empty($diplomes)) {
        ResponseHelper::sendResponse(['status' => 'error', 'message' => 'Aucunes informations trouvées.']);
        return;
      }

      $diplomesArray = array_map(function($diplome) {
        return [
          'idDiplome' => $diplome->getId(),
          'diplome' => $diplome->getDiplome(),
          'intitule' => $diplome->getIntitule(),
          'lieu' => $diplome->getLieu()
        ];
      }, $diplomes);
      ResponseHelper::sendResponse(['status' => 'success', 'data' => $diplomesArray]);
    } catch (Exception $e) {
      ResponseHelper::sendResponse(['status' => 'error', 'message' => $e->getMessage()], 400);
    }
  }
}