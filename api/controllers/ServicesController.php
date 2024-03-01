<?php

require_once __DIR__ . '/../models/Services.php';
require_once __DIR__ . '/../repository/ServicesRepository.php';
require_once __DIR__ . '/../classes/ResponsesHelper.php';

class ServicesController {
  private $servicesRepository;

  public function __construct(ServicesRepository $servicesRepository) {
    $this->servicesRepository = $servicesRepository;
  }

  public function getAllServices() {
    try {
      $services = $this->servicesRepository->getServices();

      if (empty($services)) {
        ResponseHelper::sendResponse(['status' => 'error', 'message' => 'Aucunes informations trouvées.']);
        return;
      }

      $servicesArray = array_map(function($service) {
        return [
          'idService' => $service->getId(),
          'serviceName' => $service->getName(),
          'pathImage' => $service->getPathImage()
        ];
      }, $services);
      ResponseHelper::sendResponse(['status' => 'success', 'data' => $servicesArray]);
    } catch (Exception $e) {
      ResponseHelper::sendResponse(['status' => 'error', 'message' => $e->getMessage()], 400);
    }
  }
  
    
  
}