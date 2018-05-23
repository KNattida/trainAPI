import * as nodecron from "node-cron";

nodecron.schedule("41 15 * * *", ()=>{
    console.log("run on node-cron" + new Date());
});

console.log("job scheduler has been start... ");