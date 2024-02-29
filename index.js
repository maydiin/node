const express= require("express");
const app= express();

app.set("view engine", "ejs");

const data= [
    {id:1, name:"iphone 14", price:3000},
    {id:2, name:"iphone 15", price:4000},
    {id:3, name:"iphone 13", price:5000}

];

// routes
app.use("/products/:id",function(req,res){
    res.render("urun_details");
});

app.use("/products",function(req,res){
    res.render("urunler", {
        liste: data
    });
});

app.use("/",function(req,res){
    res.render("index");
});

app.listen(3000,()=>{
    console.log("listening on port 3000");
});