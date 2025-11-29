import express, { Application, Request, Response } from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import cors from 'cors';
import endPointRoutes from '@src/routes';
import { connectToMongo } from '@src/database/database';
import config from './config/config';
import logger from 'jet-logger';
const app: Application = express();
const port: number | string = config.SERVER_PORT || 5000;

// ✅ 1. Security headers
app.use(helmet());

// ✅ 2. Request logging
app.use(morgan('short'));

// ✅ 3. Rate limiting
app.use(rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 100,             // allow 100 requests per minute
  standardHeaders: true,
  legacyHeaders: false,
}));

// ✅ Fix CORS properly
app.use(cors({
  origin: "http://localhost:3000",  // your frontend
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"], // allow the Bearer header
}));


// ✅ 5. Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ 6. Routes
app.use('/api', endPointRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Home Page');
});

// ✅ 7. Start server
connectToMongo()
  .then(() => {
    app.listen(port, () => {
      logger.info(`🚀 Server running on http://localhost:${port}`);
    });
  })
  .catch((err: Error) => {
    logger.err(`❌ MongoDB connection failed: ${err.message}`);
    process.exit(1);
  });
