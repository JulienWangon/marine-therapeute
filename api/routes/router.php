<?php

//configuration CORS

//localhost:3000 access (accès autorisé à l'API)
header("Access-Control-Allow-Origin: http://localhost:3000");
//allowed HTTP methods (méthode autorisées)
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
//Allowed headers (en-tête autorisés)
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-CSRF-TOKEN");
header("Access-Control-Allow-Credentials: true");


require_once __DIR__ . '/../controllers/ContactDetailsController.php';
require_once __DIR__ . '/../controllers/ServicesController.php';
require_once __DIR__ . '/../controllers/TestimoniesController.php';

require_once __DIR__ . '/../repository/ContactDetailsRepository.php';
require_once __DIR__ . '/../repository/ServicesRepository.php';
require_once __DIR__ . '/../repository/TestimoniesRepository.php';


if($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
  http_response_code(200);
  exit();
}

$contactDetailsRepo = new ContactDetailsRepository;
$servicesRepo = new ServicesRepository;
$testimoniesRepo = new TestimoniesRepository;

$controllers = [
    'contactDetails' => new ContactDetailsController($contactDetailsRepo),
    'services' => new ServicesController($servicesRepo),
    'testimonies' => new TestimoniesController($testimoniesRepo),
];

$routes = [
    'GET' => [
        '/marine-therapeute/contact-info' => [$controllers['contactDetails'], 'getContactDetails'],
        '/marine-therapeute/services' => [$controllers['services'], 'getAllServices'],
        '/marine-therapeute/testimonies' => [$controllers['testimonies'], 'getAllTestimonies']
    ]
];


$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

$requestMethod = $_SERVER['REQUEST_METHOD'];

$foundRoute = false;

//Vérification des routes exactes
if(isset($routes[$requestMethod][$uri])) {
  $routes[$requestMethod][$uri]();
  $foundRoute = true;
}

//Si la route n'est pas exacre contrôle les routes avec les regex
if (!$foundRoute) {

  foreach($routes[$requestMethod] as $pattern =>$function) {    
      if (preg_match($pattern, $uri, $matches)) {
 
          array_shift($matches); 
          $function(...$matches);
          $foundRoute = true;
          break;
      }
  }
}

//Retourne une erreur 404 si la route n est pas trouvée
if(!$foundRoute) {
header('HTTP/1.1 404 Not Found');
echo json_encode(['status' => 'error', 'message' => 'Route not found']);
}