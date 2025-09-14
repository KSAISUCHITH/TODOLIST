const express=require("express");
const bodyParser=require("body-parser");

var app=express();

app.set("view engine","ejs");
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
var items=[];

var example="working";
app.get("/",function(req,res){
    res.render("list",{ejes: items});
});


app.post("/",function(req,res){
    
    var item=req.body.first;
    items.push(item);
    res.redirect("/")
});

app.post("/delete", function (req, res) {
    const index = req.body.taskIndex; // index comes from hidden input
    items.splice(index, 1);           // remove 1 item at that index
    res.redirect("/");                // reload updated list
});



app.listen(800,function(){
    console.log("Server Started");
});