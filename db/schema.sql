CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers(
   id INTEGER(11) AUTO_INCREMENT NOT NULL,
   burger_name VARCHAR(155) NOT NULL,
   devoured BOOLEAN DEFAULT false NOT NULL,
   date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
   primary key(id)
);
