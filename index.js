const express= require("express");
const app = express();
app.use(express.static(__dirname+"/UI"))
app.use(express.json());
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
app.get("/api/v1/users",(req,res)=>{
    const course={
        
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
    userList.push(course);
    res.status(201).send(course);
});
app.listen(port,()=>console.log("sever running at "+port));