const express =  require ('express');
const ejs = require ("ejs");

const router = express.Router();
let jsonData = [];
const  mongoose = require ('mongoose');
const MailTemplate = require('../data/data.js');
const db = require('../data/mongodb.js');

function sendMail(html, callback) {
    console.log(html);
    callback();
};

router.post('/', async (req, res) => {
    //Lấy dữ liệu JSON từ client
    const data = req.body;
    jsonData.push({...data});

    
    let docs = await MailTemplate.findOne({ "slug": "reset_password" }).exec();
    console.log("day la docs",docs);
    // res.render('./views/template.ejs',{docs});
    let html = ejs.renderFile('docs', {db});
    // res.render(html);
    console.log(html);


    // sendMail(html, () => {
    //     mongoose.connection.close();
    //     res.json({ status: 'success', message: 'successfully' });
    // });
    
    // let html = ejs.renderFile('./views/output.ejs',{jsonData});
    // sendMail(html, () => {
    //     mongoose.connection.close();
    //     res.json({ status: 'success', message: 'successfully' });
    // });
})

// router.get('/', (req, res) => {
//     //render HTML bằng EJS và trả result
//     console.log(jsonData);
//     res.render('mail_template', {jsonData});
// })



module.exports = router;