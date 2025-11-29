// backend/types/user.types.ts
import { Document, Types } from 'mongoose';

export interface UserTypes {
  username: string;
  password: string; // hashed
  email: string;
}

export interface UserDocument extends UserTypes, Document {
  _id: Types.ObjectId;
  createdAt?: Date;
  updatedAt?: Date;
}

// Optional: what you send in API responses
export interface UserResponse {
  _id: string;
  username: string;
  email: string;
}
