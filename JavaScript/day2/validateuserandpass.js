function validateUser(name, password)
{
    if(name == ""){
        console.log("Invalid user name ! try again.");
        return;
    } else if(password == "" || password.length < 8){
        console.log("Invalid password ! only 2 attempts left");
        return;
    }
    console.log("OK ! you are successfully validated");
}

let username = "Amandeep";
let userpassword = "triweb23";
validateUser(username, userpassword);