-- Database: public

-- DROP DATABASE IF EXISTS public;

-- CREATE DATABASE public
--     WITH 
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'English_United States.1252'
--     LC_CTYPE = 'English_United States.1252'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1;
	
-- INSERT INTO customer_profile (cus_id, registration_date, adress)
-- VALUES ('1','2021/02/12', 'calle 2 edificio 2'),
-- 	('2','2021/06/05', 'shelomo street, building 2'),
-- 	('3','2022/01/01', 'benyahya strasse, hausnummer 3')
	
SELECT customer.first_name, customer.last_name, customer_profile.adress, customer_profile.registration_date
FROM customer
INNER JOIN customer_profile
ON customer.customer_id = customer_profile.cus_id;