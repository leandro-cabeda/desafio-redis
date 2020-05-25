const server= require("express")();
const bodyParser = require("body-parser");
const client = require("../connection/connection");

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
const verifyExistsKey=(req,res,next)=>{

    const key = req.body.key;
    client.exists(key,(err,reply)=>{

        if(err || reply)
        {
           return res.status(400)
            .json(
                {   "err":"This Key is already registered!",
                    "messageErr":err,
                    "exists":reply
                }
            );
            
        }
        else
        {
            next();
        }

    });

}


module.exports={
    server,
    verifyExistsKey
};