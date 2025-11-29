<<<<<<< HEAD
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.
=======
# NodeAuth  DEC _ ARCH

This Project is a full-stack ( **SERVER** / **CLIENT** ) FOR Decouple-ARCH   for the NodeAuth project. It provides authentication, user profile management, and secure API endpoints using Node.js, Express, MongoDB, and JWT.

---

- [Client]('./client')
- [Server]('./server')
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


>>>>>>> c437009f2ac613d4334e73da083f49073ff310f7
