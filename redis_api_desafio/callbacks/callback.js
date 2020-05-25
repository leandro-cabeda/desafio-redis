const callbackSet = (err,result, msg="",status, res)=>{

    if (err) {

      return res.status(400).json(
            {
                "message":"An unexpected error occurred!",
                "text":err,
                "result": result
            }
        );
    }

    if(!result)
    {
        return res.status(400).json(
            {
                "message":"This action could not be performed!",
                "result": result
            }
        );
        
    }
    
    res.status(status).json(
        {
            "message": status==201?"Successfully created!":"Successfully",
            "text":msg,
            "result": result
        }
    );
}

const callbackGet = (err,result, msg="", res)=>{

    if (err) {

      return res.status(400).json(
            {
                "message":"An unexpected error occurred!",
                "text":err,
                "result": result
            }
        );
    }

    if(!result)
    {
        return res.status(404).json(
            {
                "message":"Not Found!",
                "result": "No value found"
            }
        );
    }
    
    res.status(200).json(
        {
            "message":"Successfully!",
            "text":msg,
            "result": result
        }
    );
}

const callbackDel = (err,result, res)=>{

    if (err) {

      return res.status(400).json(
            {
                "message":"An unexpected error occurred!",
                "text":err,
                "result": result
            }
        );
    }

    if(!result)
    {
        return res.status(404).json(
            {
                "message":"Not Found!",
                "result": "No value found to delete"
            }
        );
    }
    
    res.status(204).end();
}


module.exports={
    callbackSet,
    callbackGet,
    callbackDel
};