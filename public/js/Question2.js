function validate(){
    var lname=document.getElementById("Lname").value;
    var pwd=document.getElementById("Pwd").value;
    var cpwd=document.getElementById("CPwd").value;
    var email=document.getElementById("Email").value;
    var cemail=document.getElementById("CEmail").value;
    console.log(lname);
    if(!(pwd==cpwd)){
        alert("Passwords does not match");
        return false;
    }
    if(!(email==cemail)){
        alert("Email Ids does not match");
        return false;
    }
    return true;
}