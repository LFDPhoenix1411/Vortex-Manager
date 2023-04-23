<h1 align="center"> Vortex Manager@0.1.2-alpha </h1>


$${\color{yellow}WARNING\ \ NOT\ \ READY\ \ FOR\ \ USE}$$

<br></br>

<h1 align="center"> ⚙ Setup </h1>

## Requirements :

- MySQL server
- NodeJS v20


## Instructions :
1. Clone the repository
2. Install dependencies by running `npm i`
3. Edit the `.env.example` file in the root directory to `.env`
4. And have it look something like this : 
  ```js
  SQL_HOST=127.0.0.1
  SQL_USER=root
  SQL_PASSWORD=password
  SQL_DATABASE=vortex
  ```

## Setting up some SQL :

to create the users table:

```sql
CREATE TABLE `users` (
  `ID` varchar(18) NOT NULL,
  `NAME` varchar(255) NOT NULL,
  `BALANCE` varchar(255) NOT NULL,
  `RANK` varchar(255) NOT NULL,
  `IMAGE_URL` varchar(255) NOT NULL
)
```

to create the tickets table:

```sql
CREATE TABLE `tickets` (
  `ID` varchar(18) NOT NULL,
  `REPORTED_USER` varchar(18) NOT NULL,
  `CATEGORY` varchar(255) NOT NULL,
  `REASON` varchar(255) NOT NULL
)
```

And that should be everything! :P

Enjoy!
