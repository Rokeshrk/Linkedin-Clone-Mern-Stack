const mongoose = require('mongoose');
//const config = require('config');
const db = "mongodb+srv://Rokeshrk:nadAUGhIf6ItHYPs@cluster0.ynacqbs.mongodb.net/devconnector?retryWrites=true&w=majority"

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
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
