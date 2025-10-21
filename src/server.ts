import { Config } from './config/index.ts';
import app from './app.ts';
import logger from './config/logger.ts';

const startServer = () => {
  const PORT = Config.PORT;
  try {
    app.listen(PORT, () => {
      logger.info('Listening on port', { port: PORT });
    });
  } catch (error) {
    console.error('Error starting the server:', error);
    process.exit(1);
  }
};

startServer();
