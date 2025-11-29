# NodeAuth Server

This is the **server** for the NodeAuth project. It provides authentication, user profile management, and secure API endpoints using Node.js, Express, MongoDB, and JWT.

---

## Getting Started

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd <project-root>/nodeauth/server
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file in the `server` directory and add the following variables:

```env
SERVER_PORT=5000
HOST=localhost
MONGO_DB_NAME=users
MONGO_DB_USER=nodeauth
MONGO_DB_PASSWORD=mongodb5
NODE_ENV=development
MONGO_CLUSTER_URL=cluster0.mdyr9k5.mongodb.net
SALT_ROUNDS=10
JWT_SECRET=your_jwt_secret
secureToken=admin@123
ACCESS_TOKEN_EXPIRE_TIME=1h
REFRESH_TOKEN_EXPIRE_TIME=7d
```

> **Note:**  
> Replace `your_jwt_secret` and other values as needed for your environment.

---

## Running the Server

```bash
npm run dev
```

The server will start on the port specified in your `.env` file (default: `5000`).

---

## Project Structure

```
src/
  app/                # Express app setup
  config/             # Configuration files
  controllers/        # Route controllers
  database/           # MongoDB connection logic
  middleware/         # Custom middleware (e.g., auth)
  routes/             # API route definitions
  types/              # TypeScript types
  index.ts            # Server entry point
```

---

## API Endpoints

- `POST   /api/auth/login`      — User login
- `POST   /api/auth/register`   — User registration
- `GET    /api/auth/logout`     — User logout (protected)
- `GET    /api/profile/`        — Get user profile (protected)
- `PUT    /api/profile/edit