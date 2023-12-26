const express =  require ('express');
const ejs = require ("ejs");
const email = require('../data/data.js');
const result = require('../data/result.js');
const router = express.Router();

function sendMail(opts, callback) {
    console.log(opts.title, opts.html);
    callback(null, { status: 'OK', message: 'Send mail successfully' });
};

async function GetTemplate(slug) {
    try{
        const doc = await email.findOne({ slug });
        console.log("day la doc: ",doc);
        return doc;
    }catch (err) {
        console.error(err);
        throw err;
    }
}

router.post('/', async (req, res) => {
    const data = req.body;
    try{
        const { title, content } = await GetTemplate(data.template);
        let renderedTitle = ejs.render(title, data.data);
        let renderedHtml = ejs.render(content, data.data);

        let resultSchema = await result.create({
            receiver: data.to,
            title: renderedTitle,
            content: renderedHtml
        })
        
        sendMail({
            title: renderedTitle,
            html: renderedHtml
        }, (err, finall) => {
            if(err){
                res.status(500).json(err);
            }
            res.json(resultSchema || finall);
        })
        
    } catch (error) {
        console.log(error);
        res.json({ status: 'error', message: 'Error in post route'});
    }
})
module.exports = router;
