<?php
// Allow requests from your Vite frontend app
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

$host = 'mysql'; // Service name from docker-compose
$db   = 'my_database';
$user = 'dev_user';
$pass = 'dev_password';
$charset = 'utf8mb4';

$dsn = "mysql:host=$host;dbname=$db;charset=$charset";

try {
     $pdo = new PDO($dsn, $user, $pass, [
         PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
         PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
     ]);
     echo json_encode(["status" => "success", "message" => "Connected to MySQL successfully!"]);
} catch (\PDOException $e) {
     echo json_encode(["status" => "error", "message" => $e->getMessage()]);
}