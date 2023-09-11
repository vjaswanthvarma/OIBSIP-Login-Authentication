const  express =require("express");
const dirname =require("path");
const  fileURLToPath =require("url");
var md5 = require('md5');
const bodyParser=require("body-parser");
const app=express();
var data=[];
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})
app.post("/loginsubmits",(req,res)=>{
    var c=0;
    var s=0;
    var a=0;
    for(var i=0;i<data.length;i++){
        if((data[i].name===req.body.name)&&(data[i].password===md5(req.body.password))){
            c=1;
            break;
        }
        else if((data[i].name===req.body.name)&&!(data[i].password===md5(req.body.password))){
            a=1;
            break;
        }
        else if(!(data[i].name===req.body.name)&&(data[i].password===md5(req.body.password))){
            s=1;
            break;
        }

    }
    if(c==1){
        res.send("Login Successfully");
    }
    else if(a==1){
        res.send("Enter valid password");
    }
    else if(s==1){
        res.send("Enter valid name");
    }
    else{
        res.send("Enter the valid Data");
    }
})
app.get("/signup",(req,res)=>{
    res.sendFile(__dirname+"/signup.html");
})
app.post("/signupsubmits",(req,res)=>{
    var c=0;
    var s=0;
    var a=0;
    for(var i=0;i<data.length;i++){
        if((data[i].name===req.body.name)&&(data[i].password===md5(req.body.password))){
            c=1;
            break;
        }
        else if((data[i].name===req.body.name)&&!(data[i].password===md5(req.body.password))){
            a=1;
            break;
        }
        else if(!(data[i].name===req.body.name)&&(data[i].password===md5(req.body.password))){
            s=1;
            break;
        }

    }
    if(c==1){
        res.send("already user will registered ");
    }
    else if(a==1){
        res.send("already name exist");
    }
    else if(s==1){
        res.send("already password exist");
    }
    else{
    data.push({
        name:req.body.name,
        password:md5(req.body.password),
    })
    res.send("Signup suuccessfully")
}
    console.log(data);
})
app.listen(3000,function(req,res){
    console.log("Secure Server start");
})