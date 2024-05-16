import express,{Express} from "express";

import serverConfig from "./config/serverConfig";
import sampleQueuProducer from "./producers/sampleQueuProducer";
import apiRouter from "./routes";
import SampleWorker from "./workers/SampleWorker";


const app: Express = express();

app.use('/api', apiRouter);

app.listen(serverConfig.PORT, ()=>{
    console.log(`Server started at *:${serverConfig.PORT}`);

    SampleWorker('SampleQueue');
    sampleQueuProducer('SampleJob',{
        name: "Vinyas",
        country:"Bharat"
    });
});