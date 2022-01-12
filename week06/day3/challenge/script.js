/*
Instructions
You are going to practice tables relationships

Create 2 tables : Customer and Customer profile. They have a One to One relationship. Use all the types of Joins to display the data.
Create 2 other tables : Product and Order. Order is a table with a Many to Many relationship with the Customer and Product tables. Use all the types of Joins to display the data.
*/

CREATE TABLE customer(
    customer_id SERIAL PRIMARY KEY,
    first_name VARCHAR (50) NOT NULL,
    last_name VARCHAR (500) NOT NULL,
    age DATE NOT NULL
	);
   
CREATE TABLE customer_profile(
    cus_id INTEGER NOT NULL,
    registration_date DATE,
    adress VARCHAR (100) NOT NULL,
    PRIMARY KEY (cus_id),
    CONSTRAINT cus_id FOREIGN KEY (cus_id) REFERENCES customer (customer_id)
  );


  INSERT INTO customer (first_name, last_name, age)
VALUES ('David', 'Pardo', '1961/05/02'),
	('Menase', 'Ben Israel', '1950/03/04'),
	('Johanan', 'Ibn Yahya', '1943/02/09');

    INSERT INTO customer_profile (cus_id, registration_date, adress)
VALUES ('1','2021/02/12', 'calle 2 edificio 2'),
	('2','2021/06/05', 'shelomo street, building 2'),
	('3','2022/01/01', 'benyahya strasse, hausnummer 3');






    SELECT customer.first_name, customer.last_name, customer_profile.adress, customer_profile.registration_date
    FROM customer
    INNER JOIN/ LEFT OUTER JOIN / RIGHT OUTER JOIN/ FULL OUTER JOIN  customer_profile
    ON customer.customer_id = customer_profile.cus_id;



   CREATE TABLE product(
    product_id SERIAL PRIMARY KEY,
    first_name VARCHAR (50) NOT NULL,
    last_name VARCHAR (100) NOT NULL,
    age DATE NOT NULL,
    number_oscars SMALLINT NOT NULL
   )


   CREATE TABLE order (
    customer_id INTEGER NOT NULL,
    product_id INTEGER NOT NULL,
    total_sum SMALLINT NOT NULL,
    is_ready BOOLEAN NOT NULL,
    PRIMARY KEY (customer_id, product_id)
    FOREIGN KEY (customer_id) REFERENCES customer(customer_id) ON UPDATE CASCADE,
    FOREIGN KEY (product_id) REFERENCES product(product_id) ON UPDATE CASCADE
  );
