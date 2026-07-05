USE hr_db;

CREATE TABLE IF NOT EXISTS departments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    dept_name VARCHAR(100) NOT NULL,
    budget DECIMAL(12, 2) NOT NULL
);

CREATE TABLE IF NOT EXISTS employees (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    department_id INT,
    hire_date DATE NOT NULL,
    salary DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (department_id) REFERENCES departments(id)
);

-- Dummy Data Insertion
INSERT INTO departments (dept_name, budget) VALUES 
('Engineering', 750000.00),
('Marketing', 320000.00),
('Human Resources', 150000.00),
('Finance', 250000.00);

INSERT INTO employees (first_name, last_name, department_id, hire_date, salary) VALUES 
('John', 'Doe', 1, '2021-03-15', 95000.00),
('Jane', 'Miller', 1, '2022-06-01', 110000.00),
('Sarah', 'Jenkins', 2, '2023-01-10', 65000.00),
('Michael', 'Chang', 4, '2020-11-20', 88000.00),
('Emily', 'Ross', 3, '2024-02-01', 58000.00),
('David', 'Foster', 1, '2023-08-16', 78000.00);
