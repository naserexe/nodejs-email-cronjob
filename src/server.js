import app from './app.js';
import config from './config/index.js';
import connectDB from './database/database.js';

const PORT = config.server.PORT;

app.listen(PORT, () => {
  connectDB();
  console.info(`Server running in ${config.env} on port ${PORT} 🚀`);
});
