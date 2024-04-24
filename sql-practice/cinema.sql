-- Creating tables

create table Movies (
			movie_id int,
    			title varchar(255),
    			duration int,
   			primary key (movie_id)
);

create table Schedule (
			schedule_id int,
    			movie_id int,
    			start_time datetime,
    			primary key (schedule_id),
    			foreign key (movie_id) references Movies(movie_id)
);

create table TicketPrices (
			price_id int,
			schedule_id int,
			price decimal(5,2),
    			primary key (price_id),
    			foreign key (schedule_id) references Schedule(schedule_id)
);

create table SoldTickets (
			ticket_id int,
    			schedule_id int,
    			seat_number int,
    			customer_name varchar(255),
    			primary key (ticket_id),
    			foreign key (schedule_id) references Schedule(schedule_id)
);

-- Filling in tables

INSERT INTO Movies(movie_id, title, duration)
  VALUES
	(1, 'Avatar', 120),
        (2, 'Mad Wedding', 90),
        (3, 'Dune', 120),
        (4, 'Lovers', 90),
        (5, 'Dovbush', 120);

INSERT INTO Schedule (schedule_id, movie_id, start_time)
VALUES 
    	(1, 5, '2024-04-24 10:00:00'),
    	(2, 2, '2024-04-24 12:00:00'),
    	(3, 3, '2024-04-24 13:30:00'),
    	(4, 5, '2024-04-24 15:30:00'),
    	(5, 2, '2024-04-24 17:30:00'),
    	(6, 3, '2024-04-24 19:00:00'),
    	(7, 4, '2024-04-24 21:00:00');
    
INSERT INTO TicketPrices(price_id, schedule_id, price)
  VALUES
	(1, 1, 150),
	(2, 2, 100),
        (3, 3, 150),
        (4, 4, 200),
        (5, 5, 150),
        (6, 6, 200),
        (7, 7, 200);
	
INSERT INTO SoldTickets (ticket_id, schedule_id, seat_number, customer_name)
VALUES
    	(1, 1, 1, 'John Doe'),
    	(2, 2, 2, 'Jane Smith'),
    	(3, 3, 3, 'Michael Johnson'),
    	(4, 4, 4, 'Emily Brown'),
    	(5, 5, 5, 'Christopher Davis'),
    	(6, 6, 6, 'Jessica Wilson'),
    	(7, 7, 7, 'David Martinez'),
    	(8, 1, 8, 'Amanda Taylor'),
    	(9, 2, 9, 'Daniel Anderson'),
    	(10, 3, 10, 'Sarah Thomas'),
    	(11, 4, 11, 'Joseph Hernandez'),
    	(12, 5, 12, 'Ashley Lopez'),
    	(13, 6, 13, 'Matthew Scott'),
    	(14, 7, 14, 'Olivia Green'),
    	(15, 1, 15, 'Andrew Adams'),
    	(16, 2, 16, 'Sophia Baker'),
    	(17, 3, 17, 'Ryan Hall'),
    	(18, 4, 18, 'Elizabeth King'),
    	(19, 5, 19, 'Nathan Rivera'),
    	(20, 6, 20, 'Isabella Hughes'),
    	(21, 7, 1, 'James Carter'),
    	(22, 1, 2, 'Madison Mitchell'),
    	(23, 2, 3, 'Joshua Perez'),
    	(24, 3, 4, 'Chloe Young'),
    	(25, 4, 5, 'Ethan Lee'),
    	(26, 5, 6, 'Emma Evans'),
    	(27, 6, 7, 'Alexander White'),
    	(28, 7, 8, 'Mia Allen'),
    	(29, 1, 9, 'Jacob Hall'),
    	(30, 2, 10, 'Lily Baker'),
    	(31, 3, 11, 'William Nelson'),
    	(32, 4, 12, 'Victoria Clark'),
    	(33, 5, 13, 'Benjamin Adams'),
    	(34, 6, 14, 'Ava Wright'),
    	(35, 7, 15, 'Samuel Turner'),
    	(36, 1, 16, 'Natalie Morris'),
    	(37, 2, 17, 'Christopher Hill'),
    	(38, 3, 18, 'Ella Mitchell'),
    	(39, 4, 19, 'Gabriel Murphy'),
    	(40, 5, 20, 'Hannah Lewis'),
    	(41, 6, 20, 'Dylan Cooper'),
    	(42, 7, 2, 'Grace King'),
    	(43, 1, 3, 'Jackson Bailey'),
    	(44, 2, 4, 'Addison Reed'),
    	(45, 3, 5, 'Avery Perry'),
    	(46, 4, 6, 'Julian Richardson'),
    	(47, 5, 7, 'Samantha Turner'),
    	(48, 6, 8, 'Lucas Price'),
    	(49, 7, 9, 'Aubrey Butler'),
    	(50, 1, 10, 'Leah Ward'),
    	(51, 2, 12, 'Sophie Johnson'),
    	(52, 3, 13, 'David Wilson'),
    	(53, 4, 14, 'Oliver Martinez'),
    	(54, 5, 15, 'Ella Taylor'),
    	(55, 6, 16, 'Lucas Brown'),
    	(56, 7, 17, 'Charlotte Thomas'),
    	(57, 1, 18, 'Benjamin Davis'),
    	(58, 2, 19, 'Amelia Jackson'),
    	(59, 3, 20, 'Daniel White'),
    	(60, 4, 1, 'Sophia Harris'),
    	(61, 5, 2, 'Jack Evans'),
    	(62, 6, 3, 'Emily Allen'),
    	(63, 7, 4, 'Harry King'),
    	(64, 2, 5, 'Scarlett Clark'),
    	(65, 3, 6, 'Mason Turner'),
    	(66, 4, 7, 'Lily Scott'),
    	(67, 5, 8, 'George Green'),
    	(68, 6, 9, 'Ruby Adams'),
    	(69, 7, 10, 'Oscar Mitchell'),
    	(70, 1, 11, 'Grace Lewis'),
    	(71, 2, 12, 'Evie Turner'),
    	(72, 3, 13, 'Leo Walker'),
    	(73, 4, 14, 'Poppy Perez'),
    	(74, 5, 15, 'Freddie Baker'),
    	(75, 6, 16, 'Harper Mitchell'),
    	(76, 7, 17, 'Isla Thompson'),
    	(77, 1, 18, 'Thomas Wright'),
    	(78, 2, 19, 'Aria Hall'),
    	(79, 3, 20, 'Elijah Adams'),
    	(80, 4, 1, 'Millie Ward'),
    	(81, 5, 2, 'Aiden Carter'),
    	(82, 6, 3, 'Matilda Turner'),
    	(83, 7, 4, 'Finn Hughes'),
    	(84, 1, 5, 'Maisie Collins'),
    	(85, 2, 6, 'Luca Adams'),
    	(86, 3, 7, 'Sienna Morris'),
    	(87, 4, 8, 'Ezra Hill'),
    	(88, 5, 9, 'Ellie Murphy'),
    	(89, 6, 10, 'Caleb Ross'),
    	(90, 7, 11, 'Arabella Cox'),
    	(91, 1, 12, 'Harrison Butler'),
    	(92, 2, 13, 'Layla Watson'),
    	(93, 3, 14, 'Daisy Foster'),
    	(94, 4, 15, 'Austin Brooks'),
    	(95, 5, 16, 'Imogen Richardson'),
    	(96, 6, 17, 'Zachary Bell'),
    	(97, 7, 18, 'Esme Bennett'),
    	(98, 1, 19, 'Harvey Murphy'),
    	(99, 2, 20, 'Erin Gray'),
    	(100, 3, 1, 'Rosie Watson');

-- Checking whether sold tickets are duplicates:

SELECT schedule_id, seat_number, COUNT(*)
	FROM SoldTickets
	GROUP BY  schedule_id, seat_number
	HAVING COUNT(*) > 1;

-- It turned out that there are duplicate tickets.
-- Therefore, I manually changed the data in the table "SoldTickets"

UPDATE SoldTickets
	SET seat_number = 19
	WHERE ticket_id = 20;
UPDATE SoldTickets
	SET seat_number = 11
	WHERE ticket_id = 51;
UPDATE SoldTickets
	SET seat_number = 12
	WHERE ticket_id = 52;
UPDATE SoldTickets
	SET seat_number = 13
	WHERE ticket_id = 53;
UPDATE SoldTickets
	SET seat_number = 14
	WHERE ticket_id = 54;
UPDATE SoldTickets
	SET seat_number = 15
	WHERE ticket_id = 55;
UPDATE SoldTickets
	SET seat_number = 16
	WHERE ticket_id = 56;
UPDATE SoldTickets
	SET seat_number = 17
	WHERE ticket_id = 57;
UPDATE SoldTickets
	SET seat_number = 3
	WHERE ticket_id = 83;
UPDATE SoldTickets
	SET seat_number = 2
	WHERE ticket_id = 82;
UPDATE SoldTickets
	SET seat_number = 1
	WHERE ticket_id = 81;
UPDATE SoldTickets
	SET seat_number = 20
	WHERE ticket_id = 80;
UPDATE SoldTickets
	SET seat_number = 19
	WHERE ticket_id = 79;
UPDATE SoldTickets
	SET seat_number = 18
	WHERE ticket_id = 78;
    
-- Exercise 1: How many tickets were sold for the movie Dovbush?    
    
SELECT m.title AS movie_title, COUNT(st.ticket_id) AS tickets_sold
	FROM Movies m
	JOIN Schedule s ON m.movie_id = s.movie_id
	JOIN SoldTickets st ON s.schedule_id = st.schedule_id
	WHERE m.movie_id = 2
	GROUP BY m.title;
	
-- Exercise 2: How many tickets were sold for session at 2100?    
    
SELECT m.title AS movie_title, COUNT(st.ticket_id) AS tickets_sold
	FROM Movies m
	JOIN Schedule s ON m.movie_id = s.movie_id
	JOIN SoldTickets st ON s.schedule_id = st.schedule_id
	WHERE s.schedule_id = 7
	GROUP BY m.title;
    
--  Exercise 3: Show all ticket buyers for session 2100 with their seat numbers
    
SELECT ticket_id, seat_number, Customer_Name
	FROM SoldTickets st
	JOIN Schedule s on s.schedule_id = st.schedule_id
	WHERE start_time = '2024-04-24 21:00';
  
-- Exercise 4: Show the total amount of tickets sold for each movie 
  
SELECT m.title AS movie_title, COUNT(st.ticket_id) AS total_tickets
	FROM Movies m
	JOIN Schedule s ON m.movie_id = s.movie_id
	JOIN SoldTickets st ON s.schedule_id = st.schedule_id
	GROUP BY m.title; 

-- Exercise 5: Show the total amount of fees for each movie

SELECT m.title AS movie_title, SUM(tp.price) AS total_revenue
	FROM Movies m
	JOIN Schedule s ON m.movie_id = s.movie_id
	JOIN TicketPrices tp ON s.schedule_id = tp.schedule_id
	JOIN SoldTickets st ON s.schedule_id = st.schedule_id
	GROUP BY m.title
	ORDER BY total_revenue DESC;

-- Exercise 6: Show the total amount of fees for all films

SELECT 'Total', SUM(tp.price) AS total_revenue
	FROM Movies m
	JOIN Schedule s ON m.movie_id = s.movie_id
	JOIN TicketPrices tp ON s.schedule_id = tp.schedule_id
	JOIN SoldTickets st ON s.schedule_id = st.schedule_id;

-- Exercise 7: Combine the last two requests, add a column with the number of tickets sold in total and for each movie separately

SELECT movie_title, total_revenue, total_tickets_sold
	FROM (
    		SELECT m.title AS movie_title, SUM(tp.price) AS total_revenue, COUNT(st.ticket_id) AS total_tickets_sold
    			FROM Movies m
    			JOIN Schedule s ON m.movie_id = s.movie_id
    			JOIN TicketPrices tp ON s.schedule_id = tp.schedule_id
    			JOIN SoldTickets st ON s.schedule_id = st.schedule_id
    			GROUP BY m.title

		UNION ALL

		SELECT 'Total' AS movie_title, SUM(tp.price) AS total_revenue, COUNT(st.ticket_id) AS total_tickets_sold
			FROM Movies m
			JOIN Schedule s ON m.movie_id = s.movie_id
			JOIN TicketPrices tp ON s.schedule_id = tp.schedule_id
			JOIN SoldTickets st ON s.schedule_id = st.schedule_id
	) AS combined_data
  
-- Exercise 8: Show the number of tickets sold for each session, the amount for which the tickets were sold for each session, the name of the movie of the session

SELECT  s.schedule_id AS schedule, m.title as movie_title, COUNT(st.ticket_id) AS total_tickets_sold, SUM(tp.price) AS total_revenue
	FROM schedule s
	JOIN movies m ON s.movie_id = m.movie_id
	JOIN TicketPrices tp ON s.schedule_id = tp.schedule_id
	JOIN SoldTickets st ON s.schedule_id = st.schedule_id
	GROUP BY schedule
	ORDER BY schedule;
  
-- Deleting data from a table "SoldTickets" 
  
DELETE FROM SoldTickets;

-- Deleting a table "SoldTickets"

DROP TABLE SoldTickets;
