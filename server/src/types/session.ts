import dotenv from 'dotenv'
// important lib
import session from 'express-session'
dotenv.config()
// setup session
export const sessionMiddleware = session({
  secret: process.env.SESSION_SECRET as unknown as string,
  saveUninitialized: false,
  resave: false,
  name: process.env.SESSION_NAME || 'sid',
  cookie: {
    // 1 day
    maxAge: 1000 * 60 * 60 * 24,
    // true if using https
    secure: process.env.NODE_ENV === 'production', 
    // prevents client-side JS from accessing the cookie
    httpOnly: true, 
  },
})
