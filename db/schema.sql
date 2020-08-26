
-- Drops the adoptme if it exists currently --
DROP DATABASE IF EXISTS burger_db;
-- Creates the "adoptme_db" database --
CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE burgers (
 id INTEGER NOT NULL AUTO_INCREMENT,
 burger_name VARCHAR(64) NOT NULL,
 eaten BOOLEAN
);