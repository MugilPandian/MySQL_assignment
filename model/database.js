const mysql=require('mysql2');
const connect=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'sql_assignment',
    port:'3301'
});

module.exports=connect;