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

  //Validation format du mot de passe 
  public function validatePassword($password) {

    //Vérifie si le password est présent
    if(!$password || $password === ""){
        $this->errors["password"][] = ["status" => "error", "message" => "Le mot de passe est requis"];

    //Vérifie que le password a au moins une lettre majuscule
    } else if (strlen($password) < 8) {
        $this->errors["password"][] = ["status" => "error", "message" => "Le mot de passe doit contenir au moins 8 caractères."];

    } else if (!preg_match("/[A-Z]/", $password)) {
        $this->errors["password"][] = ["status" => "error", "message" => "Le mot de passe doit contenir au moins une lettre majuscule."];

    //Vérifie que le password a au moins une lettre minuscule    
    } else if (!preg_match("/[a-z]/", $password)) {
        $this->errors["password"][] = ["status" => "error", "message" => "Le mot de passe doit contenir au moins une lettre minuscule."];

    //Vérifie que le password à au moins un caratère spécial
    } else if (!preg_match("/[\W]/", $password)) {
        $this->errors["password"][] = ["status" => "error", "message" => "Le mot de passe doit contenir au moins un caractère spécial."];

    //Vérifie que le password a au moinsun chiffre
    }  else if (!preg_match("/[0-9]/", $password)) {
        $this->errors["password"][] = ["status" => "error", "message" => "Le mot de passe doit contenir au moins un chiffre."];
    }

    return empty($this->errors["password"]);
  } 


   //Retourner les erreurs de validation
  public function getErrors() {
    return $this->errors;
  }

  }

