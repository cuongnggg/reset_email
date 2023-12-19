import express from "express";
import bodyParser from 'body-parser';
import usersRoutes from './routes/users.js';
import sendEmailRoute from './routes/sendEmail.js';
import path from 'path';

const app = express();
const PORT = 3500;
app.set('view engine', 'ejs');
app.set('views',path.join(process.cwd(),'views'));

app.use(bodyParser.json());

app.use('/users', usersRoutes);
app.use('/send-email', sendEmailRoute);


app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));

