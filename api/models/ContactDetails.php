<?php

class ContactDetails {
    private ?int $id;
    private string $numero;
    private string $rue;
    private int $codePostale;
    private string $ville;
    private string $phone;

    public function __construct(int $numero, string $rue, int $codePostale, string $ville, string $phone, ?int $id = null ) {
        $this->numero = $numero;
        $this->rue = $rue;
        $this->codePostale = $codePostale;
        $this->ville = $ville;
        $this->phone = $phone;
        $this->id = $id;   
    }

    public function getId(): ?int {
        return $this->id;
    }

    public function getNumero(): string {
        return $this->numero;
    }

    public function getRue(): string {
        return $this->rue;
    }

    public function getCodePostale(): int {
        return $this->codePostale;
    }

    public function getVille(): string {
        return $this->ville;
    }

    public function getPhone(): string {
        return $this->phone;
    }

    public function setId(?int $id): void {
        $this->id = $id;
    }

    public function setNumero(string $numero): void {
        $this->numero = $numero;
    }

    public function setRue(string $rue): void {
        $this->rue = $rue;
    }

    public function setCodePostale(int $codePostale): void {
        $this->codePostale = $codePostale;
    }

    public function setVille(string $ville): void {
        $this->ville = $ville;
    }

    public function setPhone(string $phone): void {
        $this->phone = $phone;
    }  
}

