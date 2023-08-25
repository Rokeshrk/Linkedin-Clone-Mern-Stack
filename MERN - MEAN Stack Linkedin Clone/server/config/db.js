const mongoose = require('mongoose');
//const config = require('config');
const db = "mongodb+srv://rokeshrk:vOYkw9HsWCNxj1I9@cluster0.ynacqbs.mongodb.net/?retryWrites=true&w=majority";

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    });

    console.log("MongoDB Connected...");
  } catch (err) {
    console.log("error is here");
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;


