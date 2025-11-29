// database.ts
import mongoose from 'mongoose'
import * as process from 'process'
import MONGO_URI from '../config/mongoatls-uri'
import * as console from 'console'
// initial connection with mongoDB
export const connectToMongo = async (): Promise<void> => {
  try {
    await mongoose.connect(MONGO_URI)
    console.log('✅ MongoDB connected via Mongoose')
  } catch (err) {
    console.error('❌ MongoDB connection failed:', err)
    process.exit(1)
  }
}

export default connectToMongo
