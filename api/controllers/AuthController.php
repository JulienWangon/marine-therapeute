<?php
require_once __DIR__ . '/../models/AuthModel.php';
require_once __DIR__ . '/../repository/UserRepository.php';
require_once __DIR__ . '/../classes/Validator.php';
require_once __DIR__ . '/../classes/ResponsesHelper.php';


use Firebase\JWT\JWT;
use Firebase\JWT\Key;
use Firebase\JWT\ExpiredException;

class AuthController {

  private $authModel;
  private $userRepository;
  private $validator;

  public function __construct(UserRepository $userRepository, AuthModel $authModel, Validator $validator) {
    $this->userRepository = $userRepository;
    $this->authModel = $authModel;
    $this->validator = $validator;
  }

  public function login() {
    try {
      $data = json_decode(file_get_contents('php://input'), true);

      if (!$this->validator->validateJsonFormat($data)) {
        ResponseHelper::sendResponse($this->validator->getErrors(), 400);
        return;
      }
      $requireKeys =["userEmail", "userPassword"];
        foreach ($requireKeys as $key) {
            if (!isset($data[$key])) {

                ResponseHelper::sendResponse(["status" => "error", "message" => "La clé $key est manquante"], 400);
                return;
            }
        }

      $userEmail = $data["userEmail"];
      $userPassword = $data["userPassword"];

      $validUserEmail = $this->validator->validateEmail($userEmail);
      $validUserPassword = $this->validator->validatePassword($userPassword);

      if(!$validUserEmail || !$validUserPassword) {
        $errors = $this->validator->getErrors();
        ResponseHelper::sendResponse(["status" => "error", "message" => $errors], 400);
        return;
      }

      $user = $this->userRepository->getUserByEmail($userEmail);
      if(!$user || !password_verify($userPassword, $user->getPassword())) {
        ResponseHelper::sendResponse(['status' => 'error', 'message' => "Les informations d'identification fournies sont incorrectes"], 401);
        return;
      }

      $id = $user->getId();
      $firstName = $user->getFirstName();

      $jwtData = $this->authModel->createJWTForUser($user);
      $jwt = $jwtData['jwt'];
      $expiryTime = $jwtData['exp'];
      $csrfToken = $jwtData['csrfToken'];

      setcookie("token", $jwt, [
        "expires" => $expiryTime,
        "path" => '/',
        "domain" => "",
        "secure" => true,
        "httponly" => true,
        "samesite" => "None"
      ]);

      ResponseHelper::sendResponse([
        'status' => 'success',
        'message' => 'connexion réussie',
        'user' => [
          'id' => $id,
          'firstName' => $firstName
        ],
        'csrfToken' => $csrfToken
      ]); 
    } catch (Exception $e) {
      ResponseHelper::sendResponse(['status' => 'error', 'message' => $e->getMessage()], 500);
    }
  }

  public function logout() {
    try {
      if(isset($_COOKIE['token'])) {
        unset($_COOKIE['token']);
        setcookie('token', '', [
          "expires" => time() - 3600, // Heure dans le passé pour effacer le cookie
          "path" => '/',
          "domain" => "", 
          "secure" => true,
          "httponly" => true,
          "samesite" => 'None', 
        ]);

        ResponseHelper::sendResponse(['status' => 'succes', 'message' => 'Déconnexion réussie']);
      } else {
        ResponseHelper::sendResponse(['staus' => 'error', 'message' => 'Aucun utilisateur connecté'], 401);
      }

    } catch (Exception $e) {
      ResponseHelper::sendResponse(['status' => 'error', 'message' => $e->getMessage()], 500);
    }
  }

}