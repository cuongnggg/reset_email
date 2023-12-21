const mongoose = require('mongoose');

const url = 'mongodb://hsdev:hsdev1234@mongo.likequiz.com:27017/hsdev';

// MongoClient.connect(url,(err,db) => {
//   if(err){
//     console.log('Fail to connect to the mongoDB server! Error:', err);
//   } else {
//     console.log('Connected to ', url);

//     db.close();
//   }
// });

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
const mailTemplate = mongoose.Schema({
  _id: String,
  slug: String,
  title: {
    userFName: String
  },
  content: {
    userFName: String,
    resetUrl: String
  }
})

const email = mongoose.model("mail_templates", mailTemplate);

module.exports = email;

// Lưu vào cơ sở dữ liệu
// newFile.save((err) => {
//     if (err) throw err;
//     console.log('File saved to MongoDB');
//     mongoose.connection.close(); // Đóng kết nối sau khi lưu
// });
