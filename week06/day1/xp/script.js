/*
CREATE TABLE items(
    item_id SERIAL PRIMARY KEY,
    item_name VARCHAR (50) NOT NULL,
    item_price SMALLINT NOT NULL
)

INSERT INTO items (item_name, item_price)
VALUES
('Small Desk', 100),
('Large Desk', 300),
('fan', 80);


CREATE TABLE customers(
	customer_id SERIAL PRIMARY KEY,
	fname VARCHAR (50) NOT NULL,
	lname VARCHAR (50) NOT NULL)
	
INSERT INTO customers(fname, lname)
VALUES
('Greg', 'Jones'),
('Sandra', 'Jones'),
('Scott', 'Scott'),
('Trevor', 'Green'),
('Melanie', 'Johnson');

SELECT * FROM customers

SELECT * FROM items WHERE item_price > 80;

SELECT * FROM items WHERE item_price <=300;

SELECT * FROM customers WHERE lname = 'Smith';

SELECT * FROM customers WHERE lname = 'Jones';

SELECT * FROM customers WHERE fname != 'Matt';


*/

