
let obj = {name:"Amandeep", address:"Dehradun"};

console.log(obj.__proto__);
console.log('------------------------------');
let obj1 = Object.create(obj);
obj1.name = "Aman";
console.log("Obj1.__proto__",obj1.__proto__);

obj1.__proto__.display = function()
{
    console.log(`${this.name} lives in ${this.address}`);
}
obj1.display();

console.log('------------------------------');
let obj2 = Object.create(obj);
obj2.name = "Gagan";
console.log("Obj2.__proto__",obj2.__proto__);
obj2.display();
