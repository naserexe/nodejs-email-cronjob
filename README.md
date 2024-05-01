## Description
- This is a NodeJS Express application that can send email automatically on customers birthday.

## Requirements
 - NodeJs version: 20 or later
 - MongoDB
## How to run

1. `cd` into project directory
2. Rename `example.env` to `.env`
3. Update values inside `.env`
4. Then run `npm install`
5. Now run `npm start` to start the application or `npm run dev` as development mode

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
- NOTE: `birthday` is ` #YYYY/mm/DD` format