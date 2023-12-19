import express, { json } from 'express';
import path from 'path';
// import { jsonData } from '../data/getData.js';
const router = express.Router();
let jsonData = [];

// router.post('/',(req, res) => {
//     //lấy dữ liệu yêu cầu
//     const inputData = req.body.inputData;

//     const templatePath = path.join(__dirname, 'template/html');

//     //Đọc nội dung template HTML
//     fs.readFile(templatePath, 'utf8', (err,templateContent) => {
//         if(err) return res.status(500).send('err reading template file');
//         //thay thế placeholder 
//         const finalHTML = templateContent.replace('{{inputData}}', inputData);

//         res.send(finalHTML);

//     })
// })

function sendMail(html, callback) {
    console.log(html);
    callback();
};

router.post('/', (req, res) => {
    //Lấy dữ liệu JSON từ client
    const data = req.body;
    jsonData.push({...data});
    // console.log(jsonData.data.userFName);
    // console.log(('output.ejs',{jsonData}));
    let html = ('output.ejs',{jsonData});
    sendMail(html, () => {
        res.json({ status: 'success', message: 'successfully' });
    });
})

router.get('/', (req, res) => {
    //render HTML bằng EJS và trả result
    console.log(jsonData);
})

export default router;