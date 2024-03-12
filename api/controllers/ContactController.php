<?php

require_once './api/models/ContactModel.php';
require_once './api/classes/Validator.php';
require_once './api/util/EmailService.php';

class ContactController {
  private $validator;

  public function __construct(Validator $validator) {
    $this->validator = $validator;
  }

  public function createContact() {
    
    if($_SERVER['REQUEST_METHOD'] !== 'POST') {
      ResponseHelper::sendResponse(['status' => 'error', 'message' => 'Méthode non autorisée'], 405);
      return;
    }

    $data = json_decode(file_get_contents('php://input'), true);

    if(!$this->validator->validateJsonFormat($data)) {
      ResponseHelper::sendResponse($this->validator->getErrors(), 400);
      return;
    }

    $requireKeys = ['firstName', 'lastName', 'email', 'subject', 'content'];
    foreach($requireKeys as $key) {
      if(!isset($data[$key])) {
        ResponseHelper::sendResponse(['status' => 'error', 'message' => 'La clé $key est manquante'], 400);
        return;
      }
    }

    $firstName = $data['firstName'];
    $lastName = $data['lastName'];
    $email = $data['email'];
    $subject = $data['subject'];
    $content = $data['content'];

    $validFirstName = $this->validator->validateStringForNames($firstName, 'prénom');
    $valideLastName = $this->validator->validateStringForNames($lastName, 'nom');
    $validEmail = $this->validator->validateEmail($email);
    $validSubject = $this->validator->validateString($subject, "sujet", 10, 50);
    $validContent = $this->validator->validateString($content, "message", 0, 3000 );
   
    if(!$validFirstName || !$valideLastName || !$validEmail || !$validSubject || !$validContent) {
      $errors = $this->validator->getErrors();
      ResponseHelper::sendResponse(['status' => 'error', 'message' => $errors], 400);
    }

    try {
      $emailService = new EmailService;

      if(!empty($validEmail)) {
        $marineEmail = "contact@marine-ottaviani.com";
        $marineSubject = "Nouveau contact à traiter de $lastName $firstName";
        $marineBody = "Vous avez reçu un message de $lastName $firstName.
                    <br/>Email: $validEmail
                    <br/> Sujet: $validSubject
                    <br/> Message: $validContent";
        $emailService->sendEmail($marineEmail, $marineSubject, $marineBody);

        ResponseHelper::sendResponse(['status' => 'success', 'message' => 'Votre message a été envoyé avec succès. '], 200);
      } else {
        ResponseHelper::sendResponse(['status' =>'error', 'message' => "Echec de l'envoi du message, veuillez reéssayer plustard"], 500);
      }
      
    } catch (Exception $e) {
      ResponseHelper::sendResponse(['status' => 'error', 'message' => $e->getMessage(), 500]);
    }
    
  }

}
