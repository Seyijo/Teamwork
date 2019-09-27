const express= require("express");
const app = express();
const cors = require("cors");
app.use(express.static(__dirname+"/UI"))
app.use(express.json());
app.use(cors());
const port=process.env.PORT||3000;
const userList=[];


app.get("/",(req,res)=>{
    res.render("index");
});
 app.get("/api/v1/users",(req,res)=>{
    res.send(userList);
});
app.get("/api/v1/users/:userName",(req,res)=>{
    let user=userList.find(e=>e.userName===req.params.userName);
    if(user) return res.send(user);
    return res.status(404).send("user not found");
});
app.post("/api/v1/users",(req,res)=>{
    const user={
        
            firstName : req.body.firstName ,
            lastName : req.body.lastName,
            email : req.body.email,
            userName:req.body.userName,
            password : req.body.password,
            gender : req.body.gender,
            jobRole : req.body.jobRole ,
            department : req.body.department ,
            address : req.body.address
                }
    let exists=userList.find(e=>e.userName===req.body.userName||(e.lastName===req.body.lastName&&e.firstName==req.body.firstName));
    if(exists)return res.status(401).send("User already exists");
    for(let i in user){
        if(user[i]==="") return res.status(401).send("Some values not filled");
    }
    
    userList.push(user);
    res.status(201).send({status:201 ,
    message:"User created Successfully",
    data:user
});
    
});
app.listen(port,()=>console.log("sever running at "+port));
module.exports= app;