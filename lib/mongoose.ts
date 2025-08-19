import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://jdivya1322:opportunet@cluster0.83frpot.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

if (!MONGODB_URI) {
  throw new Error("❌ Please define the MONGODB_URI environment variable inside .env.local");
}

let cached = (global as any).mongoose || { conn: null, promise: null };

export async function connectToDatabase() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      dbName: "opportunet",
    }).then((mongoose) => mongoose);
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

