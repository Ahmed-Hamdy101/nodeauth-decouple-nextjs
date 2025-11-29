import 'express-session'

declare module 'express-session' {
  interface SessionData {
    userId?: string
    username?: boolean
    isAdmin?: boolean
  }
}
