const redis = require("redis");
const client=redis.createClient(6379,"127.0.0.1");

client.on("connect",()=>{
    console.log("Connected to Redis!");
});

client.on("error",e=>{
    console.log(e);
});

module.exports=client;