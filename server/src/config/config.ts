import dotenv from 'dotenv'
import path from 'path'
import * as process from 'process'
dotenv.config({ path: path.resolve(__dirname, '../../.env') })

// config/config.ts
export interface EnvConfig {
  NODE_ENV: string
  SERVER_PORT: number
  MONGO_DB_NAME: string
  MONGO_DB_USER: string
  MONGO_DB_PASSWORD: string
  MONGO_CLUSTER_URL: string
  SALT_ROUNDS?: string
  peppar?: string
  ACCESS_TOKEN_EXPIRE_TIME?: string
  REFRESH_TOKEN_EXPIRE_TIME?: string
  secureToken?: string
}

const config: EnvConfig = {
  NODE_ENV: process.env.NODE_ENV?.trim() || 'development',
  SERVER_PORT: parseInt(process.env.SERVER_PORT?.trim() || '5000', 10),
  MONGO_DB_NAME: process.env.MONGO_DB_NAME?.trim() || 'test',
  MONGO_DB_USER: process.env.MONGO_DB_USER?.trim() || '',
  MONGO_DB_PASSWORD: process.env.MONGO_DB_PASSWORD?.trim() || '',
  MONGO_CLUSTER_URL: process.env.MONGO_CLUSTER_URL?.trim() || '',
  SALT_ROUNDS: process.env.SALT_ROUNDS?.trim() || '10',
  peppar: process.env.peppar?.trim() || 'some-peppar-string',
  ACCESS_TOKEN_EXPIRE_TIME: process.env.ACCESS_TOKEN_EXPIRE_TIME?.trim() || '1h',
  REFRESH_TOKEN_EXPIRE_TIME: process.env.REFRESH_TOKEN_EXPIRE_TIME?.trim() || '7d',
  secureToken: process.env.secureToken?.trim() || 'admin@123'
}

export default config
