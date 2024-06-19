import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import dalleRoutes from './routes/dalle.routes.js'       //tyo routes vanni dalleRoutes ho 

dotenv.config();

const app = express();         //setting up express application by running ..
app.use(cors());                                           //set up the middleware by app.use command and need to pass the cors.//otherwise cors problems
app.use(express.json({limit: '50mb'}))             //to specify the weight of the pillow begn sent, limitof 

app.use('/api/v1/dalle', dalleRoutes);                                                      //have to use or consume that dalleRoutes import or tya vitra ko kura 

app.get('/',(req, res) => {
    res.status(200).json({ message: "hello dude"})
});           //demo.route by doing app.get run by forward slash
        // there we can simply res that status of 200 and then .json where can pass message hello dude

app.listen(8080,() => 
    console.log('Server has started on port 8080'))  
                                            //run matrai vayo mathi start garera tara host vayena so using this
                                        //kun port ma listen garni(host) vanera tyo 8080 deko, 5000 dina ni sakxam
