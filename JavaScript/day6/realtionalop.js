
let obj = {username:"Aman", mobile:8006};
if('username' in obj)
{
    console.log(obj.username);
}

function oper()
{
    this.x = 5;
}

let y = new oper();
console.log(y);

console.log(y instanceof xyz);
console.log(obj instanceof xyz);

