const express=require("express");
const port=2000;
const app=express();
app.get("/",(req,res)=>{
    // res.send("this is home page")
    res.send("home page!!");
})
app.listen(port,()=>{
    console.log(`listening to the port:${port}`);
})