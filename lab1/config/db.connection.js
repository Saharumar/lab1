import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

async function dbConnect() {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('MongoDB connection error:', err);
  }
}

export default dbConnect;