import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

let mails = []

router.get('/',(req,res)=> {
    res.send(mails);
})

router.post('/',(req, res) => {
    const mail = req.body;
    //unique id for every new born
    //push new user to arr with exacly id
    mails.push({...mail, id: uuidv4()});
    res.send(`New email: ${mail.template} has been send!`);
});
//get email through id
router.get('/:id', (req, res) => {
    // Destructuring assignment id
    const {id} = req.params;

    //if id params match the id of use then do find
    const foundUser = mails.find((mail) => mail.id === id);
    res.send(foundUser);
})

router.delete('/:id', (req, res) => {
    const {id} = req.params;

    //filter will return true value to arr if that id equal to userID
    //but it not operator so it will opposite
    mails = mails.filter((mail) => mail.id !== id);
    res.send(`User with the id ${id} deleted from the database`);
})

router.patch('/:id', (req, res) => {
    const {id} = req.params;
    const {to, template, data} = req.body;
    const mail = mails.find((user) => user.id === id);

    if(to){
        mail.to = to;
    }
    if(template){ 
        mail.template = template;
    }
    if(data){
        mail.data = data;
    }

    res.send(`User with the id ${id} has been updated`);

})

export default router;