<?php

require_once __DIR__ . '/../models/Database.php';
require_once __DIR__ . '/../models/Testimonies.php';

class TestimoniesRepository extends Database {
  
  public function getTestimonies() :array {
    try {
      $db = $this->getBdd();
      $req = "SELECT * FROM testimonies";

      $stmt = $db->prepare($req);
      $stmt->execute();
      $testimoniesData = $stmt->fetchAll(PDO::FETCH_ASSOC);

      $testimonies = [];
      foreach($testimoniesData as $testimonyData) {
        $testimony = new Testimonies(
          $testimonyData['firstName'],
          $testimonyData['content'],
          $testimonyData['rating'],
          $testimonyData['status'],
          $testimonyData['id']
        );

        $testimonies[] = $testimony;
      }

      return $testimonies;
      
    } catch (PDOException $e) {
      $this->handleException($e, "extraction des avis patients");
    }
  }
}