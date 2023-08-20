let obj = {name:"Aman",addrss:"dehradun",mobile:"80060",email:"adsm123@gmail.com"};

for (const key in obj) {
    console.log(`Value on ${key} is ${obj[key]}`);
}

let getKeys = Object.keys(obj);
console.log(getKeys);