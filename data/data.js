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

//Định nghĩa schema cho collection 'file'
const mailTemplate = new mongoose.Schema({
  _id: String,
  slug: String,
  title: String,
  content: String
})


const email = mongoose.model("mail_templates", mailTemplate);

module.exports = email;
