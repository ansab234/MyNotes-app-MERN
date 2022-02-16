const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      //   useCreateIndex: true,
    });
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error:${error.message}`);
    process.exit();
  }
};
module.exports = connectDB;
// MONGO_URI=mongodb://localhost:27017/myFirstDatabase?retryWrites=true&w=majority

// const connectDB = () => {
//    const conn =
//     mongoose
//     .connect(process.env.MONGO_URI)
//     .then(() => console.log("connection success.." ))

//     .catch((err) => console.log(err));
// };
// module.exports = connectDB;
