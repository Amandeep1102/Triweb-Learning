
function failure(err)
{
    console.log("Failed: ",err)
}

function success(result)
{
    console.log("Success: ",result)
}

function validate(name, yesSuccess,noError){

    if(name == "aman")
    {
        yesSuccess(" Name is validated");
    }
    else
    {
        noError(" Not matched");
    }
}

validate("aman", success, failure);