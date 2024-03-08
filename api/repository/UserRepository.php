<?php

require_once __DIR__ . '/../models/Database.php';
require_once __DIR__ . '/../models/User.php';

class UserRepository extends Database {

  public function getUser() :array {
    try {
      $db = $this->getBdd();
      $req = "SELECT * FROM user";
      $stmt = $db->prepare($req);
      $stmt->execute();
      $usersData = $stmt->fetchAll(PDO::FETCH_ASSOC);

      $users = [];
      foreach($usersData as $userData) {
        $user = new User(
          $userData['firstName'],
          $userData['lastName'],
          $userData['email'],
          $userData['password'],
          $userData['id']
        );

        $users[] = $user;       
      }

      return $users;
       
    } catch (PDOException $e) {
      $this->handleException($e, "extraction des utilisateurs");
    }
  }

  public function updateUser(User $user) :bool {
    try {
      $db = $this->getBdd();
      $req = "UPDATE user SET firstName = :firstName, lastName = :lastName, email = :email WHERE id = :id";
      $stmt = $db->prepare($req);

      $stmt->bindValue(":firstName", $user->getFirstName(), PDO::PARAM_STR);
      $stmt->bindValue(":lastName", $user->getLastName(), PDO::PARAM_STR);
      $stmt->bindValue(":email", $user->getEmail(), PDO::PARAM_STR);
      $stmt->bindValue(":id", $user->getId(), PDO::PARAM_INT);
      
      $stmt->execute();
      return $stmt->rowCount() > 0;

    } catch (PDOException $e) {
      $this->handleException($e, "mise à jour de l'utilisateur");
    }
  }

  public function updatePassword($email, $hashedPassword) : bool {
    try {
      $db = $this->getBdd();
      $req = "UPDATE user SET password = :password WHERE email = :email";

      $stmt = $db->prepare($req);

      $stmt->bindValue(":password", $hashedPassword, PDO::PARAM_STR);
      $stmt->bindValue(":userEmail", $email, PDO::PARAM_STR);

      $stmt->execute();
      return $stmt->rowCount() > 0;

    } catch (PDOException $e) {
      $this->handleException($e, "mise à jour du mot de passe de l'utilisateur");   
    }
  }

  public function getUserByemail($email) {
    try {
      $db = $this->getBdd();
      $req = "SELECT id, firstName, lastName, email, password FROM user WHERE email = :email LIMIT 1";
      $stmt = $db->prepare($req);

      $stmt->bindValue(":email", $email, PDO::PARAM_STR);
      $stmt->execute();
      $userData = $stmt->fetch(PDO::FETCH_ASSOC);

      if($userData) {
        $user = new User(
          $userData['firstName'],
          $userData['lastName'],
          $userData['email'],
          $userData['password'],
          $userData['id']
        );

        return $user;
      } else {
        return null;
      }
    } catch (PDOException $e) {
      $this->handleException($e, "recherche de l'utilisateur");
    }
  }











}