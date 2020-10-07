DROP DATABASE IF EXISTS employeeTracker_db;
CREATE DATABASE employeeTracker_db;

USE employeeTracker_db;

CREATE TABLE employee(
  id INT AUTO_INCREMENT,
  firstName VARCHAR(30) NOT NULL,
  lastName VARCHAR(30) NOT NULL,
  roleId INT NOT NULL,
  managerId INT,
  PRIMARY KEY (id)
);

CREATE TABLE role(
id INT AUTO_INCREMENT,
roleTitle VARCHAR(30) NOT NULL,
roleSalary DECIMAL(10,2) NOT NULL,
departmentId INT,
PRIMARY KEY (id)
);

CREATE TABLE department(
id INT AUTO_INCREMENT,
departmentName VARCHAR(30) NOT NULL,
PRIMARY KEY (id)
);