import express, { NextFunction, Request, Response } from 'express';
import { HttpError } from 'http-errors';
import logger from './config/logger';

const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to the Auth Service');
});

//global error handler(must be the last middleware)
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: HttpError, req: Request, res: Response, next: NextFunction) => {
  logger.error(err.message, { stack: err.stack });
  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    error: [
      {
        type: err.name,
        message: err.message,
        path: '',
        locatioin: '',
      },
    ],
  });
});

export default app;
