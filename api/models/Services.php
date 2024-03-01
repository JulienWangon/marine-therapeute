<?php

class Services {
  private ?int $id;
  private string $name;
  private string $pathImage;

  public function __construct(string $name, string $pathImage, ?int $id = null ) {
    $this->name = $name;
    $this->pathImage = $pathImage;
    $this->id = $id;
    
  }

  public function getId() :?int {
    return $this->id;
  }

  public function getName() :string {
    return $this->name;
  }

  public function getPathImage() :string {
    return $this->pathImage;
  }

  public function setId($id) :void {
    $this->id = $id;
  }

  public function setName($name) :void {
    $this->name = $name;
  }

  public function setPathImage($pathImage) :void {
    $this->pathImage = $pathImage;
  }
}

