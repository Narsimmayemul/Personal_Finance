# Personal Finance Management System

### About
This project is a backend system for managing personal finances. It includes features for budgeting, expense tracking, and financial reporting. The system is built with Node.js and Express, uses Prisma for database management, and implements JWT for user authentication.

## Overview
This project is a backend system for managing personal finances. It includes features for budgeting, expense tracking, and financial reporting. The system is built with Node.js and Express, uses Prisma for database management, and implements JWT for user authentication.

## Features
- User registration and authentication
- CRUD operations for income and expenses
- Budget creation and tracking
- Monthly financial reports
- Category-wise expense tracking (e.g., groceries, rent, entertainment)

## Technologies Used
- Node.js
- Express.js
- Prisma ORM
- PostgreSQL
- JWT (JSON Web Tokens)

## Database Schema
- **Users Table**: Stores user information.
- **Transactions Table**: Tracks income and expenses.
- **Categories Table**: Stores expense categories.
- **Budgets Table**: Stores budget information.

## API Endpoints

### User Authentication
#### Register a new user
- **URL**: `POST /register`
- **Request Body**:
  ```json
  {
    "username": "string",
    "password": "string"
  }
Login a user
URL: POST /login
Request Body:
json
Copy code
{
  "username": "string",
  "password": "string"
}
Categories
Get all categories
URL: GET /categories
Requires authentication
Create a new category
URL: POST /category
Requires authentication
Request Body:
json
Copy code
{
  "name": "string"
}
Update an existing category
URL: PUT /category/:id
Requires authentication
Request Body:
json
Copy code
{
  "name": "string"
}
Delete an existing category
URL: DELETE /category/:id
Requires authentication
Transactions
Get all transactions
URL: GET /transactions
Requires authentication
Create a new transaction
URL: POST /transaction
Requires authentication
Request Body:
json
Copy code
{
  "amount": "number",
  "type": "string",  // "income" or "expense"
  "categoryId": "number"
}
Update an existing transaction
URL: PUT /transaction/:id
Requires authentication
Delete an existing transaction
URL: DELETE /transaction/:id
Requires authentication
Budgets
Get all budgets
URL: GET /budget
Requires authentication
Create a new budget
URL: POST /budget
Requires authentication
Request Body:
json
Copy code
{
  "amount": "number",
  "month": "number",
  "year": "number"
}
Update an existing budget
URL: PUT /budget/:id
Requires authentication
Delete an existing budget
URL: DELETE /budget/:id
Requires authentication
Reports
Get category-wise transaction report
URL: GET /report/category-wise
Requires authentication
Get monthly transaction report
URL: GET /report/monthly
Requires authentication
Setup
Prerequisites
Node.js
PostgreSQL
Installation
Clone the repository:
sh
Copy code
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name
Install dependencies:
sh
Copy code
npm install
Set up environment variables: Create a .env file in the root directory and add the following:
makefile
Copy code
DATABASE_URL="postgresql://user:password@localhost:5432/your-database-name"
JWT_SECRET="your-secret-key"
Set up the database:
sh
Copy code
npx prisma migrate dev
Start the server:
sh
Copy code
npm start
Usage
Register a new user via the /register endpoint.
Authenticate the user via the /login endpoint to receive a JWT token.
Use the token to access other authenticated routes (e.g., creating transactions, budgets).
