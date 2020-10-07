DROP DATABASE IF EXISTS employeeTracker_db;
CREATE DATABASE employeeTracker_db;

USE employeeTracker_db;

CREATE TABLE employee(
  firstName VARCHAR(30);
  lastName VARCHAR(30);
  --roleId   int fk
  --managerId  int fk
  --all employees get id int ai pk

);

CREATE TABLE role(
--id - INT PRIMARY KEY
--title - VARCHAR(30) to hold role title
--salary - DECIMAL to hold role salary
--department_id - INT to hold reference to department role belongs to

);

CREATE TABLE department(
--id - INT PRIMARY KEY
--name - VARCHAR(30) to hold department name

);