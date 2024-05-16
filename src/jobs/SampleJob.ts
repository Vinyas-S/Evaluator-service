import { Job } from "bullmq";

import { Ijob } from "../types/bullMqJobDefinition";

export default class SampleJob implements Ijob{
    name:string;
    payload: Record<string, unknown>;
    constructor(payload:Record<string,unknown>){
        this.payload=payload;
        this.name=this.constructor.name;
    }

    handle = (job?: Job) =>{
        console.log("Handle of the job called");
        console.log(this.payload);
        console.log(job?.id,job?.name);
    };

    failed = (job?: Job) : void =>{
        console.log("job failed");
        if(job){
            console.log(job.id); 
        }
    };
}