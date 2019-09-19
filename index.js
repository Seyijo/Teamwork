const express= require("express");
const app = express();
app.use(express.static(__dirname+"/UI"))
const port=process.env.PORT||3000;
const userList=[];


app.get("/",(req,res)=>{
    res.render("index");
});
app.get("/api/users",(req,res)=>{
    res.send(userList);
});
app.get("/api/users/:userName",(req,res)=>{
    let user=userList.find(e=>e.userName===req.params.userName);
    if(user) return res.send(user);
    return res.status(404).send("user not found");
});
app.listen(port,()=>console.log("sever running at "+port))