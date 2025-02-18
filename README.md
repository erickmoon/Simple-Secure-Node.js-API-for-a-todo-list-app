# Secure To-Do List API

A secure REST API for managing to-do lists, built with Node.js and PostgreSQL.
A frontend app that consumes this api is equally available and is located [here](https://github.com/erickmoon/secure-react-frontend-app)
This API supports user registration, login, and CRUD operations for to-do items. It uses JWT for authentication and bcrypt for password hashing.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Setup](#setup)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Security](#security)
- [Contributing](#contributing)
- [License](#license)

## Features

- User registration and authentication
- Secure password storage with bcrypt
- JWT-based authentication
- CRUD operations for to-do items
- Authorization to ensure users can only access their own to-do lists

## Technologies

- Node.js
- PostgreSQL
- Express.js
- JWT (JSON Web Tokens)
- bcryptjs
- pg (PostgreSQL client for Node.js)

## Setup

### Prerequisites

- Node.js (v14 or higher)
- PostgreSQL

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/erickmoon/Simple-Secure-Node.js-API-for-a-todo-list-app
   cd secure-todo-api
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up the database:**

   Setup the a PostgreSQL database as in the [db.sql](db.sql) file, then configure your database credentials as well as other credentials in a `.env` file:

   ```plaintext
   PORT=5001
   JWT_SECRET=your_jwt_secret
   DB_USER=your_username
   DB_PASSWORD=your_password
   DB_HOST=localhost
   DB_PORT=5432
   DB_NAME=your_db_name
   ```

4. **Start the server:**

   ```bash
   npm run dev
   ```

   The server will start on `http://localhost:5001` or whichever port number you set on PORT variable in your `.env` file.

## Usage

### Register a User

**POST** `/api/register`

**Request Body:**

```json
{
  "email": "user@example.com",
  "password": "yourpassword"
}
```

**Response:**

```json
{
  "message": "User registered successfully"
}
```

### Login a User

**POST** `/api/login`

**Request Body:**

```json
{
  "email": "user@example.com",
  "password": "yourpassword"
}
```

**Response:**

```json
{
  "token": "your_jwt_token"
}
```

### Create a To-Do Item

**POST** `/api/todos`

**Headers:**

- Authorization: `Bearer <your_jwt_token>`

**Request Body:**

```json
{
  "text": "Buy groceries"
}
```

**Response:**

```json
{
  "id": 1,
  "user_id": 1,
  "text": "Buy groceries"
}
```

### Get All To-Do Items

**GET** `/api/todos`

**Headers:**

- Authorization: `Bearer <your_jwt_token>`

**Response:**

```json
[
  {
    "id": 1,
    "user_id": 1,
    "text": "Buy groceries"
  }
]
```

### Update a To-Do Item

**PUT** `/api/todos/:id`

**Headers:**

- Authorization: `Bearer <your_jwt_token>`

**Request Body:**

```json
{
  "text": "Buy groceries and cook dinner"
}
```

**Response:**

```json
{
  "id": 1,
  "user_id": 1,
  "text": "Buy groceries and cook dinner"
}
```

### Delete a To-Do Item

**DELETE** `/api/todos/:id`

**Headers:**

- Authorization: `Bearer <your_jwt_token>`

**Response:**

```json
{
  "message": "To-do item deleted successfully"
}
```

## Security

- **Password Hashing:** Passwords are hashed using `bcryptjs` before storing in the database.
- **JWT Authentication:** JSON Web Tokens are used to secure endpoints and verify user identity.
- **SQL Injection Prevention:** Parameterized queries are used to prevent SQL injection attacks.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Create a new Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
