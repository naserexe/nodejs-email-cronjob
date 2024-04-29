export default {
  db: {
    URI: process.env.MONGO_URI,
  },
  server: {
    PORT: process.env.PORT || 5001,
  },
  env: process.env.NODE_ENV || 'DEVELOPMENT',
};
