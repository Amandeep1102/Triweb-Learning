let obj = {name:"amandeep", address:"India", mobile:998989898}

obj.alternateMobile = null;

console.log(obj.alternateMobile);


//.(dot) notation
console.log("Dot notation",obj.mobile);
//Bracket notation
console.log("Bracket notation",obj['mobile']);


const x = "123";
obj[x] = "hi"
console.log("X= ",obj[x])
console.log(obj)
