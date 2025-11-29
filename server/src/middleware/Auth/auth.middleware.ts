import { Request, Response, NextFunction, RequestHandler } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) {
  throw new Error('JWT_SECRET is not defined in environment variables');
}

export interface JwtPayload {
  id: string;
  email: string;
}

// Extend the Request interface to include user property
export interface AuthenticatedRequest extends Request {
  user?: JwtPayload;
}

// Middleware to authenticate JWT token
const authenticateToken: RequestHandler = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

  if (!token) {
    return res.status(401).json({ message: 'Access Token Required' });
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      if (err.name === 'TokenExpiredError') {
        return res.status(401).json({ message: 'Unauthorized' });
      } else if (err.name === 'JsonWebTokenError') {
        return res.status(403).json({ message: 'Forbidden' });
      } else {
        return res.status(403).json({ message: 'Invalid Token' });
      }
    }

    // Attach user info to request object using type assertion
    (req as AuthenticatedRequest).user = user as JwtPayload;
    next();
  });
};

export default authenticateToken;