// import mongoose, { connect } from "mongoose";
// let cached = global.mongoose
// if(!cached) {
//     cached = global.mongoose = {conn: null, promise: null}
// }

// const dbConnect = async function connectDB() {
    

//     if(cached.conn) {
//         return cached.conn
//     }
//     if(!cached.promise) {
//         const opts = {
//             bufferCommands: false,
//         }
//         cached.promise = mongoose.connect(`${process.env.MONGODB_URI}/Project0`, opts).then((mongoose) => {
//             return mongoose
//         })
//     }
//     try {
//         cached.conn = await cached.promise
//         return cached.conn
//     } catch (e) {
//         cached.promise = null
//         throw e
//         }
// }
// export default dbConnect
import mongoose from "mongoose";

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

const connectDB = async () => {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose
      .connect(`${process.env.MONGODB_URI}/Project0`, opts)
      .then((mongoose) => mongoose);
  }

  try {
    cached.conn = await cached.promise;
    return cached.conn;
  } catch (error) {
    cached.promise = null;
    console.error("MongoDB connection error:", error);
    throw error;
  }
};

export default connectDB;
