<?php
// Allow your React container to access this API in development
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

// Database credentials (adjust to match your docker-compose environment variables)
$host = 'mysql_container_name'; 
$db   = 'my_database';
$user = 'root';
$pass = 'root_password';
$charset = 'utf8mb4';

$dsn = "mysql:host=$host;dbname=$db;charset=$charset";

try {
     $pdo = new PDO($dsn, $user, $pass, [
         PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
         PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
     ]);
     
     // Simple query to fetch data
     $stmt = $pdo->query('SELECT id, name, description FROM products LIMIT 5');
     $products = $stmt->fetchAll();

     // Return data as clean JSON
     echo json_encode($products);

} catch (\PDOException $e) {
     http_response_code(500);
     echo json_encode(["error" => "Database connection failed: " . $e->getMessage()]);
}
