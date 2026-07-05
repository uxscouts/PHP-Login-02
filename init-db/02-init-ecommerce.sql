USE ecommerce_db;

CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(150) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    stock_count INT DEFAULT 0
);

CREATE TABLE IF NOT EXISTS orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    product_id INT,
    quantity INT NOT NULL,
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (product_id) REFERENCES products(id)
);

-- Dummy Data Insertion
INSERT INTO users (name, email) VALUES 
('Alice Johnson', 'alice@example.com'),
('Bob Smith', 'bob@example.com'),
('Charlie Brown', 'charlie@example.com'),
('Diana Prince', 'diana@example.com'),
('Evan Wright', 'evan@example.com');

INSERT INTO products (title, price, stock_count) VALUES 
('Wireless Mechanical Keyboard', 89.99, 45),
('Ergonomic Wireless Mouse', 49.50, 120),
('4K Ultra-Wide Monitor', 349.99, 15),
('Noise-Canceling Headphones', 199.99, 30),
('USB-C Multi-Port Hub', 25.00, 200);

INSERT INTO orders (user_id, product_id, quantity) VALUES 
(1, 2, 1),
(1, 5, 2),
(2, 1, 1),
(3, 4, 1),
(4, 3, 1),
(5, 2, 2),
(2, 5, 1);
