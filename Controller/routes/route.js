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

//QUESTION TWO
app.get('/question2',function(req,res){
    console.log("Question 2");
    res.sendFile('Question2.html',{root:'../MySQL_assignment/views'});
})

app.post('/question2insert',function(req,res){
    console.log('Question 2 inserted');
    var lname=req.body.Login_name;
    var pwd=req.body.Pwd;
    var email=req.body.Email;
        connection.query('insert into Account_Information values(?,?,?)',[lname,pwd,email],(err,results)=>{
            if(err) throw err;
            if(results){
            console.log("Values Inserted");
            res.sendFile('Valuesinserted.html',{root:'../MySQL_assignment/views'})
            }
            else{
                res.sendFile('Question2.html',{root:'../MySQL_assignment/views'});
            }
        })
})

//QUESTION3
app.get('/question3',function(req,res){
    console.log("Question 3");
    res.sendFile('Question3.html',{root:'../MySQL_assignment/views'});
})

app.post('/question3insert',function(req,res){
    console.log('Question 3 inserted');
    var fname=req.body.Fname;
    var lname=req.body.Lname;
    var add=req.body.Add1+req.body.Add2;
    var city=req.body.City;
    var state=req.body.State;
    var zip=req.body.Zip;
    var country=req.body.Country;
    var gender=req.body.Gender;
        connection.query('insert into contact_information values(?,?,?,?,?,?,?,?)',[fname,lname,add,city,state,zip,country,gender],(err,results)=>{
            if(err) throw err;
            if(results){
            console.log("Values Inserted");
            res.sendFile('Valuesinserted.html',{root:'../MySQL_assignment/views'})
            }
            else{
                res.sendFile('Question3.html',{root:'../MySQL_assignment/views'});
            }
        })
})
module.exports=app;