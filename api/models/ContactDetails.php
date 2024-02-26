<?php

class ContactDetails {
    private ?int $idContactDetail;
    private string $address;
    private string $phone;

    public function __construct(string $address = null, string $phone = null, ?int $idContactDetail = null ) {
        $this->idContactDetail = $idContactDetail;
        $this->address = $address;
        $this->phone = $phone;
    }

    public function getIdContactDetail() :int {
        return $this->idContactDetail;
    }

    public function getAddress() :string {
        return $this->address;
    }

    public function getPhone() :string {
        return $this->phone;
    }

    public function setIdContactDetail($idContactDetail) :void {
        $this->idContactDetail = $idContactDetail;
    }

    public function setAddress($address) :void {
        $this->address = $address;
    }

    public function setPhone($phone) :void {
        $this->phone = $phone;
    }          
}

