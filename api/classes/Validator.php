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

  }

