export default {
  db: {
    URI: process.env.MONGO_URI,
  },
  server: {
    PORT: process.env.PORT || 5001,
  },
  env: process.env.NODE_ENV || 'DEVELOPMENT',
  smtp: {
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    user: process.env.SMTP_EMAIL,
    pass: process.env.SMTP_PASSWORD,
    from: process.env.FROM_EMAIL,
  },
};
