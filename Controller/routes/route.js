const express = require('express');
const app = express();
const router = express.Router();
const connection = require('../../model/database');

connection.connect((err)=>{
    if(err) throw err;
    console.log('Connection Successful');
})

//QUESTION !
router.get('/question1',function(req,res){
    console.log("Question 1");
    res.sendFile('Question1.html',{root:dir});
})

router.use('/question1insert',function(req,res){
    console.log('Question 1 inserted');
    var uname=document.getElementById("Username").value;
    var pwd=document.getElementById("Pwd").value;
    var gen=document.getElementById('Gender').value;
    var fname=document.getElementById("Fname").value;
    var lname=document.getElementById("Lname").value;
    var email=document.getElementById("Email").value;

    connection.query('insert into signup values(?,?,?,?,?,?)',[uname,pwd,gen,fname,lname,email],(err,results)=>{
        if(err) throw err;
        if(results){
        console.log("Values Inserted");
    }
    })
})

module.exports=router;