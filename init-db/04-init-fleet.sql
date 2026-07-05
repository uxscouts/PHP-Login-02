USE fleet_db;

CREATE TABLE IF NOT EXISTS vehicles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    vin VARCHAR(17) UNIQUE NOT NULL,
    model VARCHAR(100) NOT NULL,
    status ENUM('active', 'maintenance', 'retired') DEFAULT 'active'
);

CREATE TABLE IF NOT EXISTS telemetry_logs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    vehicle_id INT,
    latitude DECIMAL(9, 6) NOT NULL,
    longitude DECIMAL(9, 6) NOT NULL,
    logged_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (vehicle_id) REFERENCES vehicles(id)
);

-- Dummy Data Insertion
INSERT INTO vehicles (vin, model, status) VALUES 
('1FA6P8CF0HXXXXXXX', 'Ford Transit Cargo Van', 'active'),
('5YJ3E1EA0JXXXXXXX', 'Tesla Model 3 Delivery', 'active'),
('1GCVKREC1EXXXXXXX', 'Chevy Silverado 1500', 'maintenance'),
('4T1BF1FKXFXXXXXXX', 'Toyota Prius Messenger', 'active');

INSERT INTO telemetry_logs (vehicle_id, latitude, longitude) VALUES 
(1, 40.712800, -74.006000),
(2, 34.052200, -118.243700),
(3, 41.878100, -87.629800),
(1, 40.713900, -74.007500),
(4, 29.760400, -95.369800),
(2, 34.054000, -118.245000);
