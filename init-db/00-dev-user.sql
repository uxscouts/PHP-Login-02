-- Create the user if it doesn't exist, setting your desired password
CREATE USER IF NOT EXISTS 'dev_user'@'localhost' IDENTIFIED BY 'dev_password';

-- If the user already exists, update their password just to be sure
ALTER USER 'dev_user'@'localhost' IDENTIFIED BY 'dev_password';

GRANT ALL PRIVILEGES ON *.* TO 'dev_user'@'localhost' WITH GRANT OPTION;
FLUSH PRIVILEGES;

