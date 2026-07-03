To configure your Linode MySQL server to accept remote connections, you must modify the MySQL configuration file, update database user privileges, and configure your firewalls to allow incoming traffic on port 3306

Follow these steps to complete the configuration.

1. Update the Bind Address

By default, MySQL only listens for connections originating from your local machine (127.0.0.1). You must change this setting to allow external IPs.

Open your MySQL configuration file using a text editor like nano or vim. The location depends on your Linux distribution and version:

Ubuntu / Debian: sudo nano /etc/mysql/mysql.conf.d/mysqld.cnf

CentOS / RHEL / Older setups: sudo nano /etc/mysql/my.cnf or /etc/my.cnf

Find the line that specifies bind-address:

ini

bind-address = 127.0.0.1

Change it to 0.0.0.0 to listen on all available network interfaces. Alternatively, comment it out by adding a # at the beginning of the line:

ini

bind-address = 0.0.0.0

Save the file and exit the editor.

Restart the MySQL service to apply the updates:

bash

sudo systemctl restart mysql


----------------------


2. Grant User Privileges for Remote Hosts

MySQL restricts users based on where they are connecting from. You need to grant remote access permissions to your database user.

Log into your MySQL server as root:

bash

sudo mysql -u root -p

Run the following command to allow a user to connect from any remote IP (represented by %):

sql

GRANT ALL PRIVILEGES ON database_name.* TO 'your_user'@'%' IDENTIFIED BY 'your_password';

(Note: For MySQL 8.0+, you should split this into two commands: CREATE USER 'your_user'@'%' IDENTIFIED BY 'your_password'; followed by GRANT ALL PRIVILEGES ON database_name.* TO 'your_user'@'%';)

Security Recommendation: To restrict access only to a specific static IP address (e.g., 192.0.2.55), use that IP instead of the % wildcard:

sql

GRANT ALL PRIVILEGES ON database_name.* TO 'your_user'@'192.0.2.55';

Apply the changes and exit the prompt:

sql

FLUSH PRIVILEGES;
EXIT;


---------------------------

3. Open the Firewall Port

Your Linode might block external connections on the default MySQL port (3306). You must open this port in both your operating system firewall and Linode's Cloud Firewall

Using UFW (Ubuntu/Debian): Allow incoming traffic directly through your system firewall.

bash

sudo ufw allow 3306/tcp


Using Firewalld (CentOS/RHEL):

bash

sudo firewall-cmd --permanent --add-port=3306/tcp

sudo firewall-cmd --reload


Linode Cloud Firewall: If you have an active Linode Cloud Firewall attached to your instance, log into the Linode Cloud Manager, navigate to Firewalls, and add an Inbound Rule. Set the Protocol to TCP, Port to 3306, and restrict the source to your personal IP address for safety.


