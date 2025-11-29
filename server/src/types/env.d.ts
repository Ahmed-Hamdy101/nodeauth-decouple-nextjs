export default interface EnvConfig {
  NODE_ENV: string
  PORT: number
  MONGO_URI: string
  MONGO_DB_USER: string
  MONGO_DB_PASSWORD?: string
  MONGO_DB_NAME: string
  MONGO_DB_PORT: number
}
