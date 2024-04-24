<div>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" title="mysql" alt="mysql" width="40" height="40"/>&nbsp
  <img src="https://asset.brandfetch.io/id4nWEruqq/idP6tbHvdl.svg" title="dbeaver" alt="dbeaver" width="40" height="40"/>&nbsp
</div>

Tasks about the cinema:
There is a cinema, movies are shown there. The movie has a title, duration (let it be 60, 90 or 120 minutes for simplicity), ticket price (can be different at different times and days), start time (one movie can be shown several times at different times for different prices) . There is also information about purchased tickets (ticket number, for which session).

Tasks:

make a competent normalized scheme for storing this data in the database. Enter 4-5 films, the schedule for one day and several sold tickets.
Make queries that count and output in an understandable form:

1) How many tickets were sold for any one movie
2) How many tickets were sold for any one session
3) Display a list of all ticket buyers for one session with their seat numbers
4) Show the total number of tickets sold for each movie
5) Show the total amount of fees for each film
6) Show the total amount of fees for all films
7) Combine requests 5 and 6, add the number of tickets sold
8) Show the amount of fees and how many tickets were sold for each screening separately, indicating the name of the film

Implementation: https://github.com/VR-Store-Neural/sql-practice/blob/master/cinema.sql

--------------------------------------------------------------------------------

Task: Create tables department(id, name_department), employees(id, department_id, name_employee), customers(id, customer_id, location_customer), contract(id, customer_id, amount), executor(tab_no, contract_id) to track contracts with customers and by the respective executors of the orders. Fill the tables with data. Make inquiries:

1) Get information about all contracts related to employees from the "Logistic" department. Show contract_id, employee_name
2) Obtain the average cost of contracts concluded with a John Smith employee. Show the average value of amount
3) Get the location that is most often found among customers. Show location, count
4) Get contracts of equal value. Show count, amount
5) Get the name of the customer with the lowest average value of the contracts. Show customer_name, average amount
6) Find the department that concluded contracts for the largest amount. Show: department_name, sum

Implementation: https://github.com/VR-Store-Neural/sql-practice/blob/master/company.sql
