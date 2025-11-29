import mongoose, { Schema } from 'mongoose';
import { UserTypes } from '@src/types/user.types';
import * as bcrypt from 'bcrypt';

// User Schema
export const UserSchema: Schema<UserTypes> = new Schema<UserTypes>({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email:    { type: String, required: true, unique: true },
  access_token: { type: String },
}, { timestamps: true });

// Hash password
export const hashPassword = async (password: string): Promise<string> => {
  const saltRounds = 10;
  return await bcrypt.hash(password, saltRounds);
};

// Verify password
export const verifySignIn = async (password: string, hashedPassword: string): Promise<boolean> => {
  return await bcrypt.compare(password, hashedPassword);
};

// Mongoose Model
export const UserModel = mongoose.model<UserTypes>('User', UserSchema);
