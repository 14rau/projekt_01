CREATE DATABASE IF NOT EXISTS device_management;

USE device_management;

CREATE TABLE IF NOT EXISTS component_type(
id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT, 
type VARCHAR(255));

CREATE TABLE IF NOT EXISTS seal(
id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT, 
name VARCHAR(255),
criteria VARCHAR(255),
boundaries VARCHAR(255));

CREATE TABLE IF NOT EXISTS manufacturer(
id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT, 
name VARCHAR(255));

CREATE TABLE IF NOT EXISTS product_designation(
id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT, 
product_name VARCHAR(255),
-- price in cent
price INTEGER, 
performance VARCHAR(255),
type_id INTEGER,
manufacturer_id INTEGER,
FOREIGN KEY(type_id) REFERENCES component_type(id),
FOREIGN KEY(manufacturer_id) REFERENCES manufacturer(id));

CREATE TABLE IF NOT EXISTS product(
id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT, 
location VARCHAR(255),
designation_id INTEGER,
FOREIGN KEY(designation_id) REFERENCES product_designation(id));

CREATE TABLE IF NOT EXISTS special_requirements(
id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT, 
requirement VARCHAR(255));

CREATE TABLE IF NOT EXISTS product_seal(
product_id INTEGER NOT NULL, 
seal_id INTEGER NOT NULL,
FOREIGN KEY(product_id) REFERENCES product_designation(id),
FOREIGN KEY(seal_id) REFERENCES seal(id),
PRIMARY KEY(product_id,seal_id));

CREATE TABLE IF NOT EXISTS product_requirements(
product_id INTEGER NOT NULL, 
requirement_id INTEGER NOT NULL,
FOREIGN KEY(product_id) REFERENCES product_designation(id),
FOREIGN KEY(requirement_id) REFERENCES special_requirements(id),
PRIMARY KEY(product_id,requirement_id));
