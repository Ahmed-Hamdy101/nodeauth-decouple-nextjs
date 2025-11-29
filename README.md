# Full-Stack Authentication Application

A modern, secure authentication system built with Next.js and Express, featuring user registration, login, and session management.

## 🚀 Tech Stack

### Frontend
- **Next.js** - React framework with SSR/SSG capabilities
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Axios** - HTTP client for API requests

### Backend
- **Express.js** - Node.js web framework
- **MongoDB Atlas** - Cloud database
- **Mongoose** - MongoDB object modeling
- **JWT** - Token-based authentication
- **bcrypt** - Password hashing
- **express-session** - Session middleware

## ✨ Features

- 🔐 Secure user authentication (register/login)
- 🎫 JWT token-based authorization
- 🔒 Password hashing with bcrypt + pepper
- 📱 Responsive UI with Tailwind CSS
- 🛡️ Protected dashboard routes
- ⚡ Fast development with hot reload
- 🧪 Testing setup with Jest
- 📝 TypeScript throughout the stack
- 🎨 Code formatting with ESLint & Prettier

## 📁 Project Structure
```
├── client/          # Next.js frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── types/
│   │   └── styles/
│   └── public/
│
└── server/          # Express backend
    ├── src/
    │   ├── controllers/
    │   ├── middleware/
    │   ├── models/
    │   ├── routes/
    │   ├── config/
    │   └── types/
    └── tests/
```

## 🛠️ Setup & Installation

### Prerequisites
- Node.js (v16+)
- npm or pnpm
- MongoDB Atlas account

### Environment Variables
Create `.env` files in both client and server directories:

**Server (.env)**
```env
NODE_ENV=development
SERVER_PORT=5000
MONGO_DB_NAME=your_db_name
MONGO_DB_USER=your_username
MONGO_DB_PASSWORD=your_password
MONGO_CLUSTER_URL=your_cluster_url
SALT_ROUNDS=10
peppar=your_secure_pepper
ACCESS_TOKEN_EXPIRE_TIME=1h
REFRESH_TOKEN_EXPIRE_TIME=7d
secureToken=your_secure_token
```

### Installation
```bash
# Clone repository
git clone <your-repo-url>

# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
```

### Running the Application
```bash
# Run server (from server directory)
npm run dev

# Run client (from client directory)
npm run dev
```

## 🧪 Testing
```bash
# Run tests (from server directory)
npm test
```

## 📝 API Endpoints

- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/user/profile` - Get user profile (protected)

## 🔒 Security Features

- Password hashing with bcrypt and pepper
- JWT token authentication
- Session management
- Environment variable protection
- Input validation and sanitization

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.