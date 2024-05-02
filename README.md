## Description
- This Node JS Express application can send emails automatically on a customer's birthday.

- The cron job will run every night when hour at 00 and minute at 00 to check if any customers have a birthday today. If found it'll then send a simple birthday email to all the customers has found.

## How to run

#### Requirements
  - NodeJs version: 20 or later
  - MongoDB

1. `cd` into project directory
2. Rename `example.env` to `.env`
3. Update values inside `.env`
4. Then run `npm install`
5. Now run `npm start` to start the application or `npm run dev` in development mode

#### Run using Docker - (For a quick start)
1. `cd` into the project directory
2. Rename `example.env` to `.env`
3. (Optional) Update values inside `.env`
4. Now run `docker compose up -d` it should bring the backend server and MongoDB database up, running, and connected.
   - Server will expose on http://localhost:5001

## Example API request and payload

Endpoint: `{host:port}/api/v1/customer/register` - Register a new customer

Request body:
```
{
  "name": "Customer one",
  "email": "customer@domain.com",
  "company": "ABC",
  "birthday": "2024-05-04"
}
```
- NOTE: `birthday` is `YYYY/mm/DD` format
