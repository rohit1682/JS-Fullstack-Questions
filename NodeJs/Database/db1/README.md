# User Management System

A complete CRUD (Create, Read, Update, Delete) application using MongoDB, Express, and Node.js.

## Project Structure

```
database/
├── package.json            # Project dependencies and scripts
├── server.js               # Express server setup
├── index.html              # Main UI file
├── exampleDB.js            # Example MongoDB operations
│
├── controllers/            # Handle HTTP requests and responses
│   └── userController.js   # User HTTP endpoints controller
│
├── services/               # Business logic and database operations
│   └── userService.js      # User CRUD operations service
│
└── utils/                  # Utility functions and helpers
    └── connection.js       # MongoDB connection setup
```

## Setup

1. Install dependencies:

   ```
   cd database
   npm install
   ```

2. Start the server:

   ```
   npm start
   ```

3. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Features

- **Create users** with first name, last name, date of birth, phone number, and city
- **View all users** in a clean, responsive table
- **Update user details** through an easy-to-use form
- **Delete users** with confirmation
- Proper **error handling** and user feedback
- **Responsive UI** with TailwindCSS

## API Endpoints

- **GET /api/users**: Get all users
- **GET /api/users/:id**: Get a specific user by ID
- **POST /api/users**: Create a new user
- **PUT /api/users/:id**: Update an existing user
- **DELETE /api/users/:id**: Delete a user

## Notes

- The date format should be DD/MM/YYYY in the UI (stored as Date objects in MongoDB)
- MongoDB connection string is in `utils/connection.js` (special characters encoded with % codes)
