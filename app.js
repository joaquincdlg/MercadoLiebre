const express=require("express");
const app=express();
const path=require("path");
const PORT= process.env.PORT || 3001;

app.use(express.static(path.resolve("./public")))

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"/views/index.html"))
});
app.get("/register",(req,res)=>{
    res.sendFile(path.join(__dirname + "/views/register.html"))
});
app.get("/login",(req,res)=>{
    res.sendFile(path.join(__dirname+"/views/login.html"))
})


app.listen(PORT,()=>{console.log("server running on port "+ PORT);})
