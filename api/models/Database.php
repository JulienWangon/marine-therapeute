<?php

abstract class Database {
    private static $pdo;

    private static function setBdd() {
        try {
            self::$pdo = new PDO("mysql:host=localhost;dbname=ottaviani;charset=utf8", "root", "");
            self::$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);
        } catch (PDOException $e) {
            error_log("Erreur de base de donnée: " . $e->getMessage() . " dans " . $e->getFile() . ' ligne ' . $e->getLine());
            throw new Exception("Erreur de connexion à la base de données.");
        }
    }


    protected function getBdd() {
        if(self::$pdo === null) {
            self::setBdd();
        }
        return self::$pdo;
    }


    protected function handleException(PDOException $e, $action = "effectuer l'opération") {
        $errorMsg = "Erreur lors de la tentative de: " . $action . ": "
        . "Fichier: " . $e->getFile() 
        . " à la ligne " . $e->getLine()
        . ". Erreur: " . $e->getMessage();        
        error_log($errorMsg);
        throw new Exception("Une erreur est survenue, veuillez réessayer plus tard.");
    }
}