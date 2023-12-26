const mongoose = require('mongoose');
const url = 'mongodb://hsdev:hsdev1234@mongo.likequiz.com:27017/hsdev';
const connectDB = async () => {
    try{
      await mongoose.connect(url)
      console.log("Connected to mongoDB");
    }catch (error) {
      console.log(error);
      process.exit(1);
    }
  }
  
  connectDB();

const resultSchema = new mongoose.Schema({
    receiver: String,
    title: String,
    content: String,
    createdAt: { type: Date, default: Date.now },
  });


  const result = mongoose.model("mail_results", resultSchema);
  module.exports = result;