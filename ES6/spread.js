let obj = {name: "Aman", age:22};

let obj1 = {...obj, city:"jalandar"};

console.log("obj:",obj);
console.log("obj1:",obj1);

obj1.name =  "rahul";
console.log("after updation obj:",obj);
console.log("after updation obj1:",obj1);