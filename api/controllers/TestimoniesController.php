<?php

require_once __DIR__ . '/../models/Testimonies.php';
require_once __DIR__ . '/../repository/TestimoniesRepository.php';
require_once __DIR__ . '/../classes/ResponsesHelper.php';

class TestimoniesController {
  private $testimoniesRepository;

  public function __construct(TestimoniesRepository $testimoniesRepository) {
    $this->testimoniesRepository = $testimoniesRepository;
  }

  public function getAllTestimonies() {
    try {
      $testimonies = $this->testimoniesRepository->getTestimonies();
      if(empty($testimonies)) {
        ResponseHelper::sendResponse(['status' => 'error', 'message' => 'Aucuns avis patient trouvés']);
        return;
      }

      $sortedTestimonies = [
        'attente' => [],
        'valide' => [],
        'rejet' => []
      ];

      foreach($testimonies as $testimony) {
        $status = $testimony->getStatus();
        $sortedTestimonies[$status][] = [
          'id' => $testimony->getId(),
          'firstName' => $testimony->getFirstName(),
          'content' => $testimony->getContent(),
          'rating' => $testimony->getRating(),
          'status' => $testimony->getStatus()
        ];
      }

      ResponseHelper::sendResponse(['status' => 'success', 'data' => $sortedTestimonies]);

    } catch (Exception $e) {
      ResponseHelper::sendResponse(['status' => 'error', 'message' => $e->getMessage()], 400);
    }

  }
}