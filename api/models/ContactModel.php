<?php

class Contact {
  private int $id;
  private string $firstName;
  private string $lastName;
  private string $email;
  private string $subject;
  private string $content;

  public function __construct(string $firstName = null, string $lastName = null, string $email = null, string $subject = null, string $content = null, int $id = null) {
    $this->firstName = $firstName;
    $this->lastName= $lastName;
    $this->email = $email;
    $this->subject = $subject;
    $this->content = $content;
  }

  public function getId(): int {
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

  public function getSubject(): string {
    return $this->subject;
  }

  public function getContent(): string {
    return $this->content;
  }

  public function setId(int $id): void {
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

  public function setSubject(string $subject): void {
    $this->subject = $subject;
  }

  public function setContent(string $content): void {
    $this->content = $content;
  }

}