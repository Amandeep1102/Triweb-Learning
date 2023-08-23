let key="new_key"

function ret(){
    return "somemorevalues";
}

let obj={
    sname: "aman",
    [key+2+ret()] : "yes"
}
console.log(obj);