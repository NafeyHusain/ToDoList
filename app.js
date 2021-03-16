const express=require("express");
const bodyParser=require("body-parser");
// const request=require("request");
const https=require("https");
const { json } = require("body-parser");
const date=require(__dirname+"/date.js");



const app=express();
app.set('view engine','ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

let items = [];
let workitem=[];



app.get("/",function(req,res){
      let day=date();
      
      res.render("list",{listTitle : day, ListToAdd : items });
});


app.post("/",function(req,res){
      let item=req.body.inputText;
      if(req.body.list==="work"){
            workitem.push(item);
            res.redirect("work");
      }else{
            items.push(item);
      res.redirect("/");

      }
      
});



app.get("/work",function(req,res){
      res.render("list",{listTitle:"Work Item",ListToAdd : workitem});


})
app.post("/work",function(req,res){
      let item=req.body.inputText;
      workitem.push(item);
      res.redirect("/work");
});

app.listen(3000,function(){
      console.log("The server is up and running ")
})