var express= require('express');
var app=express();
var bodyParser =require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(__dirname));

console.log(__dirname);

var route=require('./Controller/routes/route'); 
app.use(route);

app.listen(3000,()=>{
    console.log("Server is listening on port:3000");
})

