<?php

class Tesrtimonies {
  
  private ?int $id;
  private ?string $firstName;
  private ?string $content;
  private ?int $rating;
  private ?string $status;

  public function __construct(?string $firstName = null, ?string $content = null, ?int $rating = null, ?string $status = "attente", ?int $id = null) {
    $this->id = $id;
    $this->firstName= $firstName;
    $this->content = $content;
    $this->rating = $rating;
    $this->status = $status;
  }

  public function getId() :int {
    return $this->id;
  }

  public function getFirstName() :string {
    return $this->firstName;
  }

  public function getContent() :string {
    return $this->content;
  }

  public function getRating() :int {
    return $this->rating;
  }

  public function getStatus() :string {
    return $this->status;
  }

  public function setId($id) :void {
    $this->id = $id;
  }

  public function setFirstName($firstName) :void {
    $this->firstName = $firstName;
  }

  public function setContent($content) :void {
    $this->content = $content;
  }

  public function setRating($rating) :void {
    $this->rating = $rating;
  }

  public function setStatus($status) :void {
    $this->status = $status;
  }
}