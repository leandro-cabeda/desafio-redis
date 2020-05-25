const axios = require("axios").default;

// Begin site
const testWelcome=()=> {
  
     axios.get("http://localhost:3000")
    .then(res=>{
      console.log("testWelcome");
        console.log("OK! "+res.data);
    })
    .catch(err=>{
      console.log("testWelcome");
        console.log("Error: "+err);
    });
}

// SET Key and Value
const testSetPost= ()=> {
  
   axios.post("http://localhost:3000/set",{
      key: 118,
      value: "206"
  })
  .then(res=>{
    console.log("testSetPost");
      console.log(res.data);
  })
  .catch(err=>{
    console.log("testSetPost");
      console.log(err.response.data);
  });

}

// SET Key and Value
const testSetPost2= ()=> {
  
   axios.post("http://localhost:3000/set",{
      key: 16,
      value: "506"
  })
  .then(res=>{
    console.log("testSetPost2");
      console.log(res.data);
  })
  .catch(err=>{
    console.log("testSetPost2");
      console.log(err.response.data);
  });

}

// SET Key and Value
const testSetPost3= ()=> {
  
  axios.post("http://localhost:3000/set",{

    key: 41,
    value: "901"

  })
  .then(res=>{
    console.log("testSetPost3");
      console.log(res.data);
  })
  .catch(err=>{
    console.log("testSetPost3");
      console.log(err.response.data);
  });

}

// SET Key and Value
const testSetPost4= ()=> {
  
   axios.post("http://localhost:3000/set",{

     key: 51,
     value: "701"

  })
  .then(res=>{
    console.log("testSetPost4");
      console.log(res.data);
  })
  .catch(err=>{
    console.log("testSetPost4");
      console.log(err.response.data);
  });

}

// SET Key and Value
const testSetPost5= ()=> {
  
   axios.post("http://localhost:3000/set",{

      key: 301,
      value: "Leo"

  })
  .then(res=>{
    console.log("testSetPost5");
      console.log(res.data);
  })
  .catch(err=>{
    console.log("testSetPost5");
      console.log(err.response.data);
  });

}

// GET Key
const testSetGet= ()=> {
  
   axios.get("http://localhost:3000/set/118")
  .then(res=>{
    console.log("testSetGet");
      console.log(res.data);
  })
  .catch(err=>{
    console.log("testSetGet");
      console.log(err.response.data);
  });

}

// GET DB SIZE
const testSetGetSIZE= ()=> {

   axios.get("http://localhost:3000/set")
  .then(res=>{
    console.log("testSetGetSIZE");
      console.log(res.data);
  })
  .catch(err=>{
    console.log("testSetGetSIZE");
      console.log(err.response.data);
  });

}

// SET Key, Value, Mode and Time to Expire
const testSetPostExpire= ()=> {
    
   axios.post("http://localhost:3000/set/expire",{
    
      key: 29,
      value: "444",
      mode:"EX",
      time:60

  })
  .then(res=>{
    console.log("testSetPostExpire");
      console.log(res.data);
  })
  .catch(err=>{
    console.log("testSetPostExpire");
      console.log(err.response.data);
  });

}

// SET Key, Value, Mode and Time to Expire
const testSetPostExpire2= ()=> {
  
   axios.post("http://localhost:3000/set/expire",{
  
      key: 39,
      value: "Priscila",
      mode:"EX",
      time:120

  })
  .then(res=>{
    console.log("testSetPostExpire2");
      console.log(res.data);
  })
  .catch(err=>{
    console.log("testSetPostExpire2");
      console.log(err.response.data);
  });

}

// SET Key, Value, Mode and Time to Expire
const testSetPostExpire3= ()=> {
  
   axios.post("http://localhost:3000/set/expire",{

      key: 34,
      value: "666",
      mode:"EX",
      time:60

  })
  .then(res=>{
    console.log("testSetPostExpire3");
      console.log(res.data);
  })
  .catch(err=>{
    console.log("testSetPostExpire3");
      console.log(err.response.data);
  });

}

// DEL Key
const testSetDelete=()=> {

   axios.delete("http://localhost:3000/set/301")
  .then(res=>{
    console.log("testSetDelete");
      console.log(res.data);
  })
  .catch(err=>{
    console.log("testSetDelete");
      console.log(err.response.data);
  });

}

// (PUT) Increment Key
const testSetPut= ()=> {
  
   axios.put("http://localhost:3000/set/41")
  .then(res=>{
    console.log("testSetPut");
      console.log(res.data);
  })
  .catch(err=>{
    console.log("testSetPut");
      console.log(err.response.data);
  });

}

// (PUT) Increment Key
const testSetPut2= ()=> {

   axios.put("http://localhost:3000/set/16")
  .then(res=>{
    console.log("testSetPut2");
      console.log(res.data);
  })
  .catch(err=>{
    console.log("testSetPut2");
      console.log(err.response.data);
  });

}

// SET Key, Score and Value in Ordered List
const testSetPostOrderedList= ()=> {
  
   axios.post("http://localhost:3000/set/ordered-list",{
    
      key: 71,
      value: "leandro",
      score:1
 
  })
  .then(res=>{
    console.log("testSetPostOrderedList");
      console.log(res.data);
  })
  .catch(err=>{
    console.log("testSetPostOrderedList");
      console.log(err.response.data);
  });

}

// SET Key, Score and Value in Ordered List
const testSetPostOrderedList2= ()=> {
  
   axios.post("http://localhost:3000/set/ordered-list",{
   
      key: 71,
      value: "leo",
      score:12

  })
  .then(res=>{
    console.log("testSetPostOrderedList2");
      console.log(res.data);
  })
  .catch(err=>{
    console.log("testSetPostOrderedList2");
      console.log(err.response.data);
  });

}

// SET Key, Score and Value in Ordered List
const testSetPostOrderedList3=()=> {

   axios.post("http://localhost:3000/set/ordered-list",{
   
      key: 71,
      value: "renata",
      score:3

  })
  .then(res=>{
    console.log("testSetPostOrderedList3");
      console.log(res.data);
  })
  .catch(err=>{
    console.log("testSetPostOrderedList3");
      console.log(err.response.data);
  });

}

// SET Key, Score and Value in Ordered List
const testSetPostOrderedList4= ()=> {
  
   axios.post("http://localhost:3000/set/ordered-list",{
   
      key: 71,
      value: "diego",
      score:8

  })
  .then(res=>{
    console.log("testSetPostOrderedList4");
      console.log(res.data);
  })
  .catch(err=>{
    console.log("testSetPostOrderedList4");
      console.log(err.response.data);
  });

}

// GET Key in Ordered List
const testSetGetOrderedList= ()=> {

   axios.get("http://localhost:3000/set/ordered-list/955")
  .then(res=>{
    console.log("testSetGetOrderedList");
      console.log(res.data);
  })
  .catch(err=>{
    console.log("testSetGetOrderedList");
      console.log(err.response.data);
  });

}

// GET Key in Ordered List
const testSetGetOrderedList2= ()=> {
  
   axios.get("http://localhost:3000/set/ordered-list/71")
  .then(res=>{
    console.log("testSetGetOrderedList2");
      console.log(res.data);
  })
  .catch(err=>{
    console.log("testSetGetOrderedList2");
      console.log(err.response.data);
  });

}

// GET Key and Value in Ordered List for Index
const testSetGetOrderedListIndex= ()=> {
  
   axios.get("http://localhost:3000/set/ordered-list/71/renata")
  .then(res=>{
    console.log("testSetGetOrderedListIndex");
      console.log(res.data);
  })
  .catch(err=>{
    console.log("testSetGetOrderedListIndex");
      console.log(err.response.data);
  });

}

// GET Key, Index Start and Index Stop in Ordered List for Range and return values
const testSetGetOrderedListStartStop= ()=> {

   axios.get("http://localhost:3000/set/ordered-list/71/0/2")
  .then(res=>{
    console.log("testSetGetOrderedListStartStop");
      console.log(res.data);
  })
  .catch(err=>{
    console.log("testSetGetOrderedListStartStop");
      console.log(err.response.data);
  });

}

const listTests=[
testWelcome,testSetPost,testSetPost2,testSetPost3,testSetPost4,testSetPost5,
testSetGet,testSetGetSIZE,
testSetPostExpire, testSetPostExpire2, testSetPostExpire3,
testSetDelete,
testSetPut,testSetPut2,
testSetPostOrderedList,testSetPostOrderedList2,testSetPostOrderedList3,testSetPostOrderedList4,
testSetGetOrderedList,testSetGetOrderedList2,
testSetGetOrderedListIndex,
testSetGetOrderedListStartStop
];

module.exports=listTests;