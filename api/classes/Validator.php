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

  public function validateEmail($email) {
    // Vérifier si l'email existe
    if(!$email || $email == "") {
        $this->errors["email"][] = ["status" => "error", "message" => "L'adresse e-mail est requise."];
        return false;
    }

    // Sanitisation de l'email
    $cleanEmail = filter_var($email, FILTER_SANITIZE_EMAIL);

    // Vérifier le format de l'email avec filter_var() après la sanitisation
    if(!filter_var($cleanEmail, FILTER_VALIDATE_EMAIL)) {
        $this->errors["email"][] = ["status" => "error", "message" => "L'adresse e-mail n'est pas valide."];
        return false;
    }

    //Retour de l'email validé et nettoyé
    return $cleanEmail; 
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


  //Validation format du numéro de téléphone
  public function validatePhoneNumber($phoneNumber, $type) {
    // Vérifier si le numéro de téléphone existe
    if (empty($phoneNumber)) {
        $this->errors[$type][] = ["status" => "error", "message" => "Le numéro de téléphone est requis."];
        return false;
    }

    // Vérifier le format du numéro de téléphone
    if (!preg_match("/^[0-9]{10}$/", $phoneNumber)) {
        $this->errors[$type][] = ["status" => "error", "message" => "Le format du numéro de téléphone est invalide."];
        return false;
    }

    return empty($this->errors[$type]);
  }

  
  //Validation des Nom et Prénom 
  public function validateStringForNames($input, $type, $maxLength = 50) {
    // Vérifie l'existence de la donnée
    if (!$input || $input === "") {
        $this->errors[$type][] = ["status" => "error", "message" => "Le champ $type est requis."];
        return false;
    }
    // Vérification de la longueur minimale
    else if (strlen($input) < 3) {
        $this->errors[$type][] = ["status" => "error", "message" => "Le champ $type doit comporter au moins 3 caractères."];
        return false;
    }
    // Vérification de la longueur maximale
    else if (strlen($input) > $maxLength) {
        // Correction du message d'erreur pour inclure "ne doit pas" au lieu de "ne doit pads"
        $this->errors[$type][] = ["status" => "error", "message" => "Le champ $type ne doit pas dépasser $maxLength caractères."];
        return false;
    }
    // Vérification du format
    else {
        if (!preg_match("/^[A-Za-z'\s-]+$/", $input)) {
            $this->errors[$type][] = ["status" => "error", "message" => "Le champ $type peut uniquement contenir des lettres (majuscule et minuscules), des apostrophes et des tirets."];
            return false;
        }
    }

    return empty($this->errors[$type]);
  }


   //Retourner les erreurs de validation
  public function getErrors() {
    return $this->errors;
  }

  }

