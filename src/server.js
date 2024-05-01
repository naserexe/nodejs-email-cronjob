import app from './app.js';
import config from './config/index.js';
import startEmailSenderCronJob from './cronjob/emailSenderJob.js';
import connectDB from './database/database.js';

const PORT = config.server.PORT;

app.listen(PORT, () => {
  connectDB();
  startEmailSenderCronJob();
  console.info(`Server running in ${config.env} on port ${PORT} 🚀`);
});
