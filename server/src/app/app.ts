import express, { Application } from 'express'
import passport from 'passport'
import multer from 'multer'
import { sessionMiddleware } from '@src/types/session'

// Initialize express app
const app: Application = express()

// handle file uploads
app.use(multer({ dest: 'uploads/' }).single('file'))

// make sure to use the session middleware before passport.session()
app.use(sessionMiddleware)

// passport configuration
app.use(passport.initialize())
app.use(passport.session())

export default app