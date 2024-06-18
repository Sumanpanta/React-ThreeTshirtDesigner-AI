import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();         //setting up express application by running ..
app.use(cors());                                           //set up the middleware by app.use command and need to pass the cors.//otherwise cors problems
app.use(express.json({limit: '50mb'}))             //to specify the weight of the pillow begn sent, limitof 

app.get('/',(req, res) => {
    res.status(200).json({ message: "hello dude"})
});           //demo.route by doing app.get run by forward slash
        // there we can simply res that status of 200 and then .json where can pass message hello dude
