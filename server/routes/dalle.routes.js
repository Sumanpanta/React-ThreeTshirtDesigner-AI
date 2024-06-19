import express from 'express';
import * as dotenv from 'dotenv';
import { Configuration, OpenAIApi} from 'openai';

dotenv.config();

const router = express.Router();                      //we can create so additional routes so we can specify routers, see docs(474-479  )
 
const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(config);

router.route('/').get((req, res) => {
    res.status(200).json({ message: "Hello from DaLL.E Gensu ROUTES"})
})                                      //lets create a couple of routes, see index.js(sabbai info xa)


router.route('/').post(async (req, res )=>{                   //see docs (488-492,496)
    try {
        const {prompt} = req.body;
        const response = await openai.createImage({
            prompt,
            n:1,
            size: '1024*1024',
            response_format: 'b64_json'
        });
        const image = response.data.data[0].b64_json;

        res.status(200).json({ photo: image });
        
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Something went wrong "})
        
    }

})

export default router;                    //have to export default router
//we have to connect all this inside index.js(to show , where is this going to be., what is this route.)
