const express = require('express');
const app = express();
const connection = require('../../model/database');

connection.connect((err)=>{
    if(err) throw err;
    console.log('Connection Successful');
})

//QUESTION ONE  
app.get('/question1',function(req,res){
    console.log("Question 1");
    res.sendFile('Question1.html',{root:'../MySQL_assignment/views'});
})

app.post('/question1insert',function(req,res){
    console.log('Question 1 inserted');
    var uname=req.body.Username;
    var pwd=req.body.Pwd;
    var gen=req.body.Gender;
    var fname=req.body.Fname;
    var lname=req.body.Lname;
    var email=req.body.Email;

    connection.query('insert into signup values(?,?,?,?,?,?)',[uname,pwd,gen,fname,lname,email],(err,results)=>{
        if(err) throw err;
        if(results){
        console.log("Values Inserted");
        res.sendFile('Valuesinserted.html',{root:'../MySQL_assignment/views'})
        }
        else{
            res.sendFile('Question1.html',{root:'../MySQL_assignment/views'});
        }
    })
})

module.exports=app;