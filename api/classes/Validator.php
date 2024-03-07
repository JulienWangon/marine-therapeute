<?php

class Validator {
  
  protected $errors = [];


  //Validation du format JSON
  public function validateJsonFormat($jsonData) :bool {

    if ($jsonData === null && json_last_error() !== JSON_ERROR_NONE) {
          $this->errors["json"][] = ["status" => "error", "message" => "Format JSON invalide " . json_last_error_msg()];
          return false;
    }

    return empty($this->errors["json"]);
  }

  //Validation du format d'un email
  public function validateEmail($email) {

    // Check if e-mail exists
    if(!$email || $email == "") {
        $this->errors["email"][] = ["status" => "error", "message" => "L'adresse e-mail est requise."];
        return false;
    }

    // Check e-mail format with filter_var()
    if(!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $this->errors["email"][] = ["status" => "error", "message" => "L'adresse e-mail n'est pas valide."];
        return false;
    }

    return empty($this->errors["email"]);
  }

   //Retourner les erreurs de validation
  public function getErrors() {
    return $this->errors;
  }

  }

