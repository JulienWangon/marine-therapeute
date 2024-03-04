<?php

class Diplomes {

  private ?int $id;
  private string $diplome;
  private string $intitule;
  private string $lieu;

  public function __construct(string $diplome, string $intitule, string $lieu, ?int $id = null) {
    $this->diplome = $diplome;
    $this->intitule = $intitule;
    $this->lieu = $lieu;
    $this->id = $id;
  }

  public function getId() :int {
    return $this->id;
  }

  public function getDiplome() :string {
    return $this->diplome;
  }

  public function getIntitule() :string {
    return $this->intitule;
  }

  public function getLieu() :string {
    return $this->lieu;
  }

  public function setId($id) :void {
    $this->id = $id;
  }

  public function setDiplome($diplome) :void {
    $this->diplome = $diplome;
  }

  public function setIntitule($intitule) :void {
    $this->intitule = $intitule;
  }

  public function setLieu($lieu) :void {
    $this->lieu = $lieu;
  }
}