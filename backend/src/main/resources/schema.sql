CREATE DATABASE IF NOT EXISTS chat;
USE chat;
CREATE TABLE IF NOT EXISTS users(
id INT PRIMARY KEY AUTO_INCREMENT,
accountName VARCHAR(50) NOT NULL UNIQUE,
accountPassword VARCHAR(255) NOT NULL
);


create database if not exists pizzeria;
use pizzeria;
drop table pizza;
create table if not exists Pizza(
	id INT primary key auto_increment,
    pizzaName VARCHAR(50) NOT NULL UNIQUE,
    pizzaDescription VARCHAR(255) NOT NULL,
    pizzaImageUrl VARCHAR(255) NOT NULL,
    price DECIMAL(4,2) NOT NULL
);

INSERT INTO Pizza (pizzaName, pizzaDescription, pizzaImageUrl, price)
VALUES
('Focaccia', 'Bread with italian olive oil and rosemary', 'pizzas/focaccia.jpg', 6.00),
('Pizza Margherita', 'Tomato and mozarella', 'pizzas/margherita.jpg', 10.00),
('Pizza Spinaci', 'Tomato, mozarella, spinach, and ricotta cheese', 'pizzas/spinaci.jpg', 12.00),
('Pizza Funghi', 'Tomato, mozarella, mushrooms, and onion', 'pizzas/funghi.jpg', 12.00),
('Pizza Salamino', 'Tomato, mozarella, and pepperoni', 'pizzas/salamino.jpg', 15.00),
('Pizza Prosciutto', 'Tomato, mozarella, ham, aragula, and burrata cheese', 'pizzas/prosciutto.jpg', 18.00);
