<?php

require_once __DIR__ . '/../models/Database.php';
require_once __DIR__ . '/../models/Diplomes.php';

class DiplomesRepository extends Database {

  public function getDiplomes() :array {
    try{
      $db = $this->getBdd();
      $req = "SELECT * FROM listediplome";

      $stmt = $db->prepare($req);
      $stmt->execute();
      $diplomesData = $stmt->fetchAll(PDO::FETCH_ASSOC);

      $diplomes = [];
      foreach($diplomesData as $diplomeData) {
        $diplome = new Diplomes(        
          $diplomeData['diplome'],
          $diplomeData['intitule'],
          $diplomeData['lieu'],
          $diplomeData['id']
        );
        $diplomes[] = $diplome;
    }
    return $diplomes;

    } catch (PDOException $e) {
      $this->handleException($e, "extraction de la liste des diplômes.");
    }
  }
}
