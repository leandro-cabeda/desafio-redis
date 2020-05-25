const {server , verifyExistsKey}= require("../middlewares/middleware");
const client = require("../connection/connection");
const { callbackSet, callbackGet, callbackDel} = require("../callbacks/callback");
client.flushall(); // Remove all keys in database Redis

// Welcome Site
server.get("/",(req,res)=>{
    res.status(200).send("<h1>Welcome Service Redis</h1>");
});

// SET Key and Value in Redis
// verifyExistsKey => checks if the key has already been registered
server.post("/set",verifyExistsKey,(req,res)=>{

     const key = req.body.key;
     const value = req.body.value;

     if(key==undefined || value==undefined) return res.status(400).json("Key and value fields are required!");

    client.set(key, value,(error,result)=>{

        callbackSet(error,result,`SET key: ${key} Value: ${value}`,201,res)
    });
    
});

// GET Key in Redis
server.get("/set/:key",(req,res)=>{

   const key = req.params.key;

    if(key==undefined) return res.status(400).json("Key field is invalid!");

   client.get(key, (error,result)=>{
       callbackGet(error,result,`GET key: ${key}`,res);
    });
   
});

// SET Key, Value, Mode and Time in Redis
// verifyExistsKey => checks if the key has already been registered
server.post("/set/expire",verifyExistsKey,(req,res)=>{

const key = req.body.key;
const value = req.body.value;
const mode = req.body.mode;
const time = req.body.time;

    if(key==undefined || value==undefined || mode==undefined || time==undefined)
    {
        return res.status(400).json("All fields are required!");
    }

   client.set(key,value,mode,time,(error,result)=>{
       callbackSet(error,result,
        `SET key: ${key} Value: ${value} Mode: ${mode} Time: ${time}`,
        201,res);
    });
   
});

// DEL Key in Redis
server.delete("/set/:key",(req,res)=>{

   const key = req.params.key;

    if(key==undefined) return res.status(400).json("Key field is invalid!");

    client.del(key, (error,result)=>{
         callbackDel(error,result,res);
    });

});

// (PUT) Increment Key in Redis
server.put("/set/:key",(req,res)=>{

   const key = req.params.key;

    if(key==undefined) return res.status(400).json("Key field is invalid!");

   client.incr(key, (error,result)=>{
        callbackSet(error,result,`PUT Increment key: ${key}`,200,res);
    });

});

// GET DBSIZE in Redis
server.get("/set",(req,res)=>{

   client.dbsize((error,result)=>{
       callbackGet(error,result,`GET DBSIZE!`,res);
    });

});

// SET Key, Score and Value in Ordered List in Redis
server.post("/set/ordered-list",(req,res)=>{

const key = req.body.key;
const value = req.body.value;
const score = req.body.score;

  if(key==undefined || value==undefined || score==undefined)
  {
      return res.status(400).json("All fields are required");
  }

 client.zadd(key,score,value,(error,result)=>{
     callbackSet(error,result,
        `SET key: ${key} Value: ${value} Score: ${score} in Ordered List`,201,res);
    });

});

// GET Key in Ordered List in Redis
server.get("/set/ordered-list/:key",(req,res)=>{

const key = req.params.key;

    if(key==undefined) return res.status(400).json("Key field is invalid!");

   client.zcard(key, (error,result)=>{
       callbackGet(error,result,`GET Key: ${key} Ordered List of All Members!`,res);
    });
   
});

// GET Key and Value in Ordered List for Index in Redis
server.get("/set/ordered-list/:key/:value",(req,res)=>{

const key = req.params.key;
const value = req.params.value;

    if(key==undefined || value==undefined) return res.status(400).json("Key and value fields are required!");

   client.zrank(key,value, (error,result)=>{
       callbackGet(error,result,
        `GET Key: ${key} in Ordered List for Index of Value: ${value}`,res);
    });
   
});

// GET Key, Index Start and Index Stop in Ordered List for Range and return values in Redis
server.get("/set/ordered-list/:key/:indexStart/:indexStop",(req,res)=>{

    const key = req.params.key;
    const indexStart = req.params.indexStart;
    const indexStop = req.params.indexStop;

    if(key==undefined || indexStart==undefined || indexStop==undefined)
    {
        return res.status(400).json("All fields are required!");
    }

   client.zrange(key,indexStart,indexStop, (error,result)=>{
       callbackGet(error,result,
        `GET Key: ${key} in Ordered List for Range with Index Start: ${indexStart} ... Index Stop: ${indexStop}`
        ,res);
    });
   
});


module.exports=server;