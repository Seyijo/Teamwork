const express= require("express");
const app = express();
const cors = require("cors");
//const bodyParser=require("body-parser");
app.use(express.static(__dirname+"/UI"))
app.use(express.json());
app.use(cors());
//app.use(bodyParser.json());
const port=process.env.PORT||3000;
const userList=[];
const articleList=[];


app.get("/",(req,res)=>{
    res.render("index");
});
 app.get("/api/v1/users",(req,res)=>{
    res.status(200).send(userList);
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
app.delete("api/v1/users/:userName",(req,res)=>{
let exist =userList.find(e=>e.userName===req.params.userName)
if(!exist){
    return res.status(404).send("item not found");
    }
let index=userList.indexOf(exist);
    userList.splice(index,1);
    return res.status(202).res.send( exist +" deleted");
});
    
app.get("api/v1/article",(req,res)=>{
return res.status(200).send(articleList);
});
app.get("api/v1/article/:userId",(req,res)=>{
    let article=articleList.find(a=>a.userId=req.params.userId);
    if(article){
        return res.status(201).send(article.message);
        };
    return res.status(404).send("Article not found, it may have been deleted")
    });
    app.post("api/v1/article",(res,req)=>{
        let article={
            userId: req.body.userId,
            message:req.body.message
        }
        let artExists=articleList.find(a=>a.userId===req.body.userId);
        if(artExists){
            return res.status(401).send("Article already exists");
            };
articleList.push(article);
 return res.status(201)
        
    });
    app.delete("api/v1/article/:userId",(req,res)=>{
        let article=articleList.find(a=>a.userId=req.params.userId);

        if(article){
            let index =articleList.indexOf(article);
            articleList.splice(index,1);
            res.status(202).send(article +" has been deleted");
        }
        return res.status(404).send("Article not found");
    });


app.listen(port,()=>console.log("sever running at "+port));
module.exports=app;