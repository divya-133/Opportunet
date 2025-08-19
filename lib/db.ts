// import mongoose from "mongoose";

// const MONGODB_URI = process.env.MONGODB_URI;

// if (!MONGODB_URI) {
//   throw new Error("Please define the MONGODB_URI in .env.local");
// }

// let cached = (global as any).mongoose || { conn: null, promise: null };

// async function dbConnect() {
//   if (cached.conn) return cached.conn;

//   if (!cached.promise) {
//     cached.promise = mongoose.connect(MONGODB_URI, {
//       bufferCommands: false
//     }).then(m => m);
//   }

//   cached.conn = await cached.promise;
//   return cached.conn;
// }

// export default dbConnect;
// lib/db.ts
import mongoose from "mongoose";

export const connectDB = async () => {
  if (mongoose.connection.readyState === 1) {
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI!, {
      dbName: "opportunet",
    });
    console.log("✅ MongoDB connected");
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error);
    throw new Error("MongoDB connection failed");
  }
};
