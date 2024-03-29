<?php


class User {
  private ?int $id;
  private string $firstName;
  private string $lastName;
  private string $email;
  private string $password;

  public function __construct (string $firstName = null, string $lastName = null, string $email = null, string $password = null, ?int $id = null) {
    $this->firstName = $firstName;
    $this->lastName = $lastName;
    $this->email = $email;
    $this->password = $password;
    $this->id = $id;
  }


  public function getId(): ?int {
    return $this->id;
  }

  public function getFirstName(): string {
    return $this->firstName;
  }

  public function getLastName(): string {
    return $this->lastName;
  }

  public function getEmail(): string {
    return $this->email;
  }

  public function getPassword(): string {
    return $this->password;
  }

  
  public function setId(?int $id): void {
    $this->id = $id;
  }

  public function setFirstName(string $firstName): void {
    $this->firstName = $firstName;
  }

  public function setLastName(string $lastName): void {
    $this->lastName = $lastName;
  }

  public function setEmail(string $email): void {
    $this->email = $email;
  }

  public function setPassword(string $password): void {
    $this->password = $password;
  }
}
