<?php

require_once __DIR__ . '/../models/Database.php';
require_once __DIR__ . '/../models/Services.php';

class ServicesRepository extends Database {

  public function getServices() :array {
    try {
      $db = $this->getBdd();
      $req = "SELECT * FROM `services` ORDER BY `services`.`id` ASC";

      $stmt = $db->prepare($req);
      $stmt->execute();
      $servicesData = $stmt->fetchAll(PDO::FETCH_ASSOC);

      $services = [];
      foreach($servicesData as $serviceData) {
          $service = new Services(        
            $serviceData['name'],
            $serviceData['pathImg'],
            $serviceData['id'],
          );
          $services[] = $service;
      }
      return $services;


    } catch (PDOException $e) {
      $this->handleException($e, "extraction de la liste des services");
    }
  }

}

