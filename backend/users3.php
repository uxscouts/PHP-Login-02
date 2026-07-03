<?php
// 1. Handle CORS securely and fix the Allow-Credentials wildcard bug
$origin = $_SERVER['HTTP_ORIGIN'] ?? '*';
header("Access-Control-Allow-Origin: $origin"); 
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Credentials: true");
header("Content-Type: application/json; charset=UTF-8");

// 2. Handle Preflight instantly
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit();
}

/*
$host = 'localhost'; 
$db   = 'your_database_name';
$user = 'your_db_username';
$pass = 'your_db_password';
*/

// 3. Database Credentials
$host = getenv('DB_HOST') ?: 'mysql';
$db   = getenv('DB_DATABASE') ?: 'my_database';
$user = getenv('DB_USERNAME') ?: 'dev_user';
$pass = getenv('DB_PASSWORD') ?: 'dev_password';
$charset = 'utf8mb4';




$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    die(json_encode(["success" => false, "message" => "Connection failed: " . $conn->connect_error]));
}

// HANDLE POST REQUEST: Add a new user
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);
    
    if (isset($data['username']) && isset($data['email'])) {
        $username = $conn->real_escape_string($data['username']);
        $email = $conn->real_escape_string($data['email']);

        $sql = "INSERT INTO users (username, email) VALUES ('$username', '$email')";

        if ($conn->query($sql) === TRUE) {
            echo json_encode(["success" => true, "message" => "User added successfully"]);
        } else {
            echo json_encode(["success" => false, "message" => "Error: " . $conn->error]);
        }
    } else {
        echo json_encode(["success" => false, "message" => "Missing required fields"]);
    }
    
    $conn->close();
    exit();
}

// HANDLE GET REQUEST: Fetch all users
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $sql = "SELECT id, username, email, created_at FROM users ORDER BY created_at DESC";
    $result = $conn->query($sql);
    
    $users = [];
    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            $users[] = $row;
        }
    }
    
    echo json_encode($users);
    $conn->close();
    exit();
}
?>
