<?php
header('Content-Type: application/json');

class DatabaseTester {
    private $pdo;

    public function __construct() {
        // 1. Fetch the credentials Docker injected into the environment
        $host     = getenv('DB_HOST') ?: 'mysql';
        $db       = getenv('DB_DATABASE') ?: 'my_database';
        $user     = getenv('DB_USERNAME') ?: 'dev_user';
        $pass     = getenv('DB_PASSWORD') ?: 'dev_password';
        $port     = getenv('DB_PORT') ?: '3306';
        $charset  = 'utf8mb4';

        // 2. Set up secure PDO options
        $dsn = "mysql:host=$host;dbname=$db;port=$port;charset=$charset";
        $options = [
            PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION, // Throws exceptions on SQL errors
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,       // Protects data structure formats
            PDO::ATTR_EMULATE_PREPARES   => false,                  // Disables emulation to force real prepared statements (SQL Injection protection)
        ];

        try {
            $this->pdo = new PDO($dsn, $user, $pass, $options);
        } catch (\PDOException $e) {
            // If it fails, output the error message securely
            echo json_encode([
                "status" => "error",
                "message" => "Database connection failed!",
                "debug" => $e->getMessage()
            ]);
            exit;
        }
    }

    public function testConnection() {
        try {
            // Run a quick native test query
            $stmt = $this->pdo->query("SELECT VERSION() as version");
            $row = $stmt->fetch();
            
            echo json_encode([
                "status" => "success",
                "message" => "Connected perfectly to the MySQL container!",
                "mysql_version" => $row['version']
            ]);
        } catch (\PDOException $e) {
            echo json_encode([
                "status" => "error",
                "message" => "Query execution failed.",
                "debug" => $e->getMessage()
            ]);
        }
    }
}

// Execute the test
$tester = new DatabaseTester();
$tester->testConnection();
