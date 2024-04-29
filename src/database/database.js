import mongoose from 'mongoose';
import config from '../config/index.js';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(config.db.URI);
    console.info(`MongoDB Connected to: ${conn.connection.host} ✅`);
  } catch (err) {
    console.error(err);
  }
};

export default connectDB;
