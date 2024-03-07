<?php

require_once './api/vendor/autoload.php';
require_once './api/util/SecurityUtil.php';

use Firebase\JWT\ExpiredException;
use Firebase\JWT\JWT;
use Firebase\JWT\Key;

class AuthModel {

  private const TOKEN_EXPIRY_SECONDS = 3600;

  //creation JWT token 
  public function createJWTForUser($user) {
    $secretKey = $_ENV['SECRET_KEY'];

    if(!$secretKey) {
      throw new Exception("clé secrète introuvable");
    }

    $issueAt = time();
    $expiryTime = $issueAt + self::TOKEN_EXPIRY_SECONDS;
    $csrfToken = SecurityUtil::generateSecureToken();

    $payload = [
      "iat" => $issueAt,
      "exp" => $expiryTime,
      "id" => $user['id'],
      "csrfToken" => $csrfToken
    ];

    $jwt = JWT::encode($payload, $secretKey, "HS256");
    $jwtData = ["jwt" => $jwt, "exp" => $expiryTime, "csrfToken" => $csrfToken];

    return $jwtData;
  }


  public function decodeJwtFromCookie() {
    $secretKey = $_ENV['SECRET_KEY'];

    if(!isset($_COOKIE['token'])) {
      throw new Exception("JWT non trouvé dans le cookie");
    }

    try {
      $jwt = $_COOKIE['token'];
      $decoded = JWT::decode($jwt, new Key($secretKey, "HS256"));

      if(!isset($decoded->id)) {
        error_log("JWT décodé manque des champs requis: " . json_encode($decoded));
                  throw new Exception ("Données JWT incomplètes.");
      }

      return [
        'id' => $decoded->id,
        'csrfToken' => $decoded->csrfToken
      ];
      
    } catch (ExpiredException $e) {
      throw new Exception("JWT expiré");
    } catch (Exception $e) {
      throw new Exception("Erreur lors du décodage du JWT: " . $e->getMessage());
    }
  }
}