function confirmation(){
    const name=String(document.getElementById("name").value);
    const email=String(document.getElementById("email").value);
    const pass = String(document.getElementById("pass").value);
    const repass=String(document.getElementById("repass").value);   

    if(name==" "|| name==null){
        alert("Enter a valid Name");
        return false
    }

   if(pass!=repass){
    alert("The password and confirm-password is not Same");
    return false
}
else if(pass.length<6){
    alert("Password must contain atleast 6 character");
    return false
}
var result= confirm("Verify Your deatils.\n Name: "+name+"\n Email: "+email);
return result;

}
function demo(){
    alert("Thank you for login!!")
}