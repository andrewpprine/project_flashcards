DROP DATABASE IF EXISTS flashcards_db;
CREATE DATABASE flashcards_db;
USE flashcards_db;

CREATE TABLE flashcards(
   id INT NOT NULL AUTO_INCREMENT,
   topic VARCHAR(50) NOT NULL,
   question VARCHAR(255) NOT NULL,
   answer VARCHAR(255) NOT NULL,
   PRIMARY KEY (id)
);