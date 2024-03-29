<?php

require_once __DIR__ . '/../models/Database.php';
require_once __DIR__ . '/../models/ContactDetails.php';

class ContactDetailsRepository extends Database {

    public function getAllContactDetails() :array {
        try {
            $db = $this->getBdd();
            $req = "SELECT * FROM contactinfo";

            $stmt = $db->prepare($req);
            $stmt->execute();
            $contactDetailsData = $stmt->fetchAll(PDO::FETCH_ASSOC);

            $contactDetails = [];
            foreach($contactDetailsData as $contactDetailData) {
                $contactDetail = new ContactDetails(
                    $contactDetailData["numero"],
                    $contactDetailData["rue"],
                    $contactDetailData["codepostal"],
                    $contactDetailData['ville'],
                    $contactDetailData['telephone'],
                    $contactDetailData['id']
                );
                $contactDetails[] = $contactDetail;
            }
            return $contactDetails;
        } catch (PDOException $e) {
            $this->handleException($e, "extraction des informations de contact.");
        }
    }

}