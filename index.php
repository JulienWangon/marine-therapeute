<?php

require __DIR__ . '/api/vendor/autoload.php';

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__ . '/api');
$dotenv->load();

require_once '../marine-therapeute/api/routes/router.php';